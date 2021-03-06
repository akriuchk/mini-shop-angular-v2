import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, debounceTime, switchMap } from 'rxjs/operators';
import { CatalogsService } from '../services/catalogs.service';
import { Product } from '../model/linen';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-linen-byname-search',
  templateUrl: './linen-byname-search.component.html',
  styleUrls: ['./linen-byname-search.component.scss']
})
export class LinenBynameSearchComponent implements OnInit {
  public linenAutocomplete: Observable<Product> = null;
  public autoCompleteControl = new FormControl();

  @Output() selectedProductEvent = new EventEmitter<string>();

  constructor(private catalogService: CatalogsService) { }

  lookup(value: string): Observable<Product[]> {
    return this.catalogService.findProductByNamePart(value.toLowerCase()).pipe(
      map(results => results)
    );
  }

  setLinen(event: MatAutocompleteSelectedEvent): void {
    this.selectedProductEvent.emit(event.option.value);
  }


  ngOnInit() {
    this.linenAutocomplete = this.autoCompleteControl.valueChanges.pipe(
      startWith(''),
      // delay emits
      debounceTime(300),
      // use switch map so as to cancel previous subscribed events, before creating new once
      switchMap(value => {
        if (value !== '') {
          // lookup from github
          return this.lookup(value);
        } else {
          // if no value is present, return null
          return of(null);
        }
      })
    );
  }
}
