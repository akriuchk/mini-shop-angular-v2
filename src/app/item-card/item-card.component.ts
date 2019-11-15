import { Component, OnInit, Input } from '@angular/core';
import { Linen } from '../model/linen';
import { environment } from 'src/environments/environment';

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
    if (this.linen.images.length != 0) {
      this.imageUrl = `${this.apiUrl}image/${this.linen.images[0]}`;
    } else {
      this.imageUrl = "assets/not-available.png";
    }
  }
  
  set404forImage() {
    this.imageUrl = "assets/not-available.png";
  }

}
