import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Catalog } from '../model/catalog';
import { Product } from '../model/linen';
import { CatalogsService } from '../services/catalogs.service';

@Component({
  selector: 'product-list-cards',
  templateUrl: './product-list-cards.component.html',
  styleUrls: ['./product-list-cards.component.scss']
})
export class CatalogPageComponent implements OnInit {
  catalog$: Observable<Catalog>;
  catalog: Catalog;

  availableSizes = [
    { name: 'Small', selected: false },
    { name: 'Medium', selected: false },
    { name: 'Euro', selected: false },
    { name: 'Duo', selected: false }
  ];

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogsService
  ) {
    
  }

  ngOnInit() {
    this.catalog$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.catalogService.getCategory(params.get('name')))
    );

    this.catalog$.subscribe( cat => this.catalog = cat)
  }

  getProductsFiltered(): Product[] {
    let products = this.catalog.products.filter(product => {
      if (this.availableSizes.find(availableSize => availableSize.name == 'Small').selected) {
        return product.smallAvailable === true
      }
      if (this.availableSizes.find(availableSize => availableSize.name == 'Medium').selected) {
        return product.middleAvailable === true
      }
      if (this.availableSizes.find(availableSize => availableSize.name == 'Euro').selected) {
        return product.euroAvailable === true
      }
      if (this.availableSizes.find(availableSize => availableSize.name == 'Duo').selected) {
        return product.duoAvailable === true
      }


      // linen.smallAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Small').selected
      // || linen.middleAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Medium').selected
      // || linen.duoAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Duo').selected
      // || linen.euroAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Euro').selected
    });
    if (products.length == 0) {
      return this.catalog.products;
    }
    return products
  }

  isSelected(size: any): boolean {
    return this.availableSizes.find(availableSize => availableSize === size).selected;
  }

  selectSize(size: any): void {
    console.log('Button Selected: ', size.name, size.selected);
    this.availableSizes.forEach(availableSize => {
      if (availableSize.name === size.name) {
        availableSize.selected = !size.selected;
        console.log('Selected: ', availableSize.name, availableSize.selected);
      } else {
        availableSize.selected = false;
        console.log('Selected: ', availableSize.name, availableSize.selected);
      }
    })
  }

  cleanUpSelection(): void {
    this.availableSizes.forEach(availableSize => availableSize.selected = false);
  }
}
