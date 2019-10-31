import { Component, OnInit, Input } from '@angular/core';
import { Linen } from '../model/linen';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() linen: Linen;
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
