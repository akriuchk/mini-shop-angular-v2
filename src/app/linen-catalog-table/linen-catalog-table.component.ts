import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Catalog } from '../model/catalog';
import { CatalogsService } from '../services/catalogs.service';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-linen-catalog-table',
  templateUrl: './linen-catalog-table.component.html',
  styleUrls: ['./linen-catalog-table.component.scss']
})
export class LinenCatalogTableComponent implements OnInit {
  @Input() catalogsInput: Catalog[];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public displayedColumns = ['name', 'smallAvailable', 'middleAvailable', 'euroAvailable', 'duoAvailable'];

  constructor(private catalogService: CatalogsService) { }

  ngOnInit() {
    this.catalogService.findAllFilter(false)
      .pipe()
      .subscribe(response => {
        if (response) {
          this.catalogsInput = response;
          Array.from(this.catalogsInput).forEach(catalog => {
            catalog.linenDatasource = new MatTableDataSource(catalog.products);
          });
        }
      })
  }
  
  ngAfterViewInit(): void {
    //TODO FIXME sorting doesn't work now :(
    // Array.from(this.catalogsInput).forEach(catalog => {
    //   catalog.linenDatasource.sort = this.sort;
    // });
  }

  doFilter(value: string): void {
    Array.from(this.catalogsInput).forEach(catalog => {
      catalog.linenDatasource.filter = value.trim().toLocaleLowerCase();
      catalog.linenDatasource.filter
    });
  }
}
