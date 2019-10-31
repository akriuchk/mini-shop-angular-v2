import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CatalogsService } from '../services/catalogs.service';
import { Catalog } from '../model/catalog';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit{
  catalogList: Catalog[];
  selectedCatalog: Catalog;

  /**
   * onSelect
   */
  onSelect(catalog: Catalog): void {
    this.selectedCatalog = catalog;
  }


  ngOnInit(): void {
    this.catalogService.findAll().subscribe(data => {
      this.catalogList = data.filter(catalog => catalog.linens.length > 0);
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private catalogService: CatalogsService) {}

}
