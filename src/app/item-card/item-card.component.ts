import { Component, OnInit, Input } from '@angular/core';
import { Linen } from '../model/linen';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() linen: Linen;
  apiUrl: string;
  imageUrl: string;

  constructor() {}

  ngOnInit() {
    this.apiUrl = environment.apiUrl;
    this.imageUrl = `${this.apiUrl}images/${this.linen.image}`;
  }
  
  set404forImage() {
    this.imageUrl = "assets/not-available.png";
  }

}
