import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CatalogsService } from '../services/catalogs.service';
import { Catalog } from '../model/catalog';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  catalogList: Catalog[];
  selectedCatalog: Catalog;

  /**
   * onSelect
   */
  onSelect(catalog: Catalog): void {
    this.selectedCatalog = catalog;
  }


  ngOnInit(): void {
    this.catalogService.findAll()
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

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private catalogService: CatalogsService,
    private authService: AuthService
    ) { }

  getUser(): User {
    return this.authService.currentUserValue;
  }

}
