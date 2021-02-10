import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Catalog } from '../model/catalog';
import { CatalogsService } from '../services/catalogs.service';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Product } from '../model/linen';

@Component({
  selector: 'app-linen-catalog-table',
  templateUrl: './linen-catalog-table.component.html',
  styleUrls: ['./linen-catalog-table.component.scss']
})
export class LinenCatalogTableComponent implements OnInit {
  @Input() catalogsInput: Catalog[] = [];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public displayedColumns = ['name', 'smallAvailable', 'middleAvailable', 'euroAvailable', 'duoAvailable'];

  constructor(private catalogService: CatalogsService) { }

  ngOnInit() {
    this.catalogService.findAllFilter(false)
      .pipe()
      .subscribe(response => {
        if (response) {
          Array.from(response).forEach(catalog => {
            this.catalogService.getCategory(catalog.name).subscribe(resp => {
              let dataSource: MatTableDataSource<Product>
              if (resp.products && resp.products.length != 0) {
                dataSource = new MatTableDataSource(resp.products)
              } else {
                dataSource = new MatTableDataSource()
              }

              const newCatalog = new Catalog(catalog.id, catalog.name, catalog.displayName, resp.products);
              newCatalog.linenDatasource = dataSource;
              this.catalogsInput.push(newCatalog)
            })
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

  isCatalogEmpty(catalog: Catalog): boolean {
    if (catalog.products) {
      return catalog.products.length === 0
    } else {
      return true;
    }
  }

  doFilter(value: string): void {
    Array.from(this.catalogsInput).forEach(catalog => {
      if (catalog.linenDatasource) {
        catalog.linenDatasource.filter = value.trim().toLocaleLowerCase();
      }
    });
  }
}
