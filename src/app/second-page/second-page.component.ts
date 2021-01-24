import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalog } from '../model/catalog';
import { Product } from '../model/linen';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  catalog: Catalog;
  availableSizes = [
    { name: 'Small', selected: false },
    { name: 'Medium', selected: false },
    { name: 'Euro', selected: false },
    { name: 'Duo', selected: false }
  ];

  constructor(
    private router: Router) {
    console.time('someFunction');
    var s = this.router.getCurrentNavigation().extras.state;
    // console.log(s);
    this.catalog = new Catalog(s.id, s.name, s.displayName, s.products);
    console.timeEnd('someFunction');
  }

  ngOnInit() {
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
