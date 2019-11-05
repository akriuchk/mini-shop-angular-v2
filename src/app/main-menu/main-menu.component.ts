import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CatalogsService } from '../services/catalogs.service';
import { Catalog } from '../model/catalog';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  catalogList: Catalog[];
  selectedCatalog: Catalog;

  showOneCatalog = true;
  showUploadPage = false;
  showCatalogTable = false;
  showLinenSearch = false;

  /**
   * onSelect
   */
  onSelect(catalog: Catalog): void {
    this.showOneCatalog = true;
    this.showUploadPage = false;
    this.showCatalogTable = false;
    this.showLinenSearch = false;
    this.selectedCatalog = catalog;
  }

  onShowCatalog(): void {
    this.showOneCatalog = false;
    this.showUploadPage = false;
    this.showCatalogTable = true;
    this.showLinenSearch = false;
  }

  onUploadSelect(): void {
    this.showOneCatalog = false;
    this.showUploadPage = true;
    this.showCatalogTable = false;
    this.showLinenSearch = false;
  }

  onSearchSelect(): void {
    this.showOneCatalog = false;
    this.showUploadPage = false;
    this.showCatalogTable = false;
    this.showLinenSearch = true;
  }


  ngOnInit(): void {
    this.catalogService.findAll('true')
      .pipe()
      .subscribe((response: HttpResponse<any>) => {
        if (response.body) {
          this.catalogList = response.body;
        }
      });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private catalogService: CatalogsService) { }

}
