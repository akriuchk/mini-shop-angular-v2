import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Catalog } from '../model/catalog';
import { Linen } from '../model/linen';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  @Input() catalog: Catalog;
  availableSizes = [
    { name: 'Small', selected: false },
    { name: 'Medium', selected: false },
    { name: 'Euro', selected: false },
    { name: 'Duo', selected: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  getLinensFiltered(): Linen[] {
    let linens = this.catalog.linens.filter(linen => {
      if (this.availableSizes.find(availableSize => availableSize.name == 'Small').selected) {
        return linen.smallAvailable === true
      }
      if (this.availableSizes.find(availableSize => availableSize.name == 'Medium').selected) {
        return linen.middleAvailable === true
      }
      if (this.availableSizes.find(availableSize => availableSize.name == 'Euro').selected) {
        return linen.euroAvailable === true
      }
      if (this.availableSizes.find(availableSize => availableSize.name == 'Duo').selected) {
        return linen.duoAvailable === true
      }
      

      // linen.smallAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Small').selected
      // || linen.middleAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Medium').selected
      // || linen.duoAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Duo').selected
      // || linen.euroAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Euro').selected
    });
    if (linens.length == 0) {
      return this.catalog.linens;
    }
    return linens
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
