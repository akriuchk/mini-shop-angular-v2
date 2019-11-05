import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from '../model/catalog';
import { Linen } from '../model/linen';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  @Input() catalog: Catalog;
  selectedSizes: any[] = [];

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
    // console.log('linens', this.catalog.linens);

    let linens = this.catalog.linens.filter(linen => 
      
      linen.smallAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Small').selected
      || linen.middleAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Medium').selected 
      || linen.duoAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Duo').selected 
      || linen.euroAvailable === this.availableSizes.find(availableSize => availableSize.name == 'Euro').selected
    );
    
    // console.log('linens after', linens); 
    
    return linens
  }


  isSelected(size: any): boolean {
    const index = this.selectedSizes.indexOf(size);
    // return index >= 0;
    return this.availableSizes.find(availableSize => availableSize === size).selected;
  }

  selectSize(size: any): void {
    console.log('Selected: ', size.name, size.selected);
    
    let selectedSize = this.availableSizes.find(availableSize => availableSize === size)
    selectedSize.selected = !selectedSize.selected;

    console.log('Selected: ', size.name, size.selected);

    let index = this.selectedSizes.indexOf(size);

    if (index >= 0) {
      this.selectedSizes.splice(index, 1);
    } else {
      this.selectedSizes.push(size);
    }
  }

}
