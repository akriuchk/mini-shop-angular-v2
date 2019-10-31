import { Component, OnInit, Input } from '@angular/core';
import { Catalog } from '../model/catalog';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  @Input() catalog: Catalog;

  constructor() { }

  ngOnInit() {
  }

}
