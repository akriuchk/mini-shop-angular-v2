import { Component, OnInit } from '@angular/core';
import { Item } from "../model/item";

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  items: Item[] = [
    new Item(1, "First item"),
    new Item(2, "Second item"),
    new Item(3, "Third item"),
    new Item(4, "Forth item"),
    new Item(5, "Fifth item")
  ];
}