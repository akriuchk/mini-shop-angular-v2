import { Component, OnInit } from '@angular/core';
import { Product } from '../model/linen';
import { Image } from "../model/image";
import { ProductImageSuggestionService } from '../services/product-image-suggestion.service';
import { ImagesService } from '../services/images.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-image-suggestions',
  templateUrl: './image-suggestions.component.html',
  styleUrls: ['./image-suggestions.component.scss']
})
export class ImageSuggestionsComponent implements OnInit {
  suggestProductImages: Product[]
  decisionPatch: Map<Image, boolean> = new Map();

  constructor(
    private suggestionService: ProductImageSuggestionService,
    private imageService: ImagesService
  ) { }

  ngOnInit() {
    this.suggestionService.getSuggestions().pipe()
      .subscribe(response => {
        this.suggestProductImages = response.body;
      }, error => {
        //log it
      });
  }

  imageUrl(image: Image): string {
    return this.imageService.getRawUrl(image.id);
  }

  onCheckBoxSelected(product: Product, image: Image, event: MatCheckboxChange): void {
    // console.log(image => product.name)
    this.decisionPatch.set(image, event.checked)
    if (event.checked) {
      image.product = product.name;
    }
  }

  confirmAndSend(): void {
    var arr = Array.from(this.decisionPatch.entries())
      .filter(entry => entry[1] === true)
      .map(entry => entry[0])

    this.imageService.patchImages(arr).subscribe(_ => {
      this.suggestionService.getSuggestions().pipe()
      .subscribe(response => {
        this.suggestProductImages = response.body;
      }, error => {
        //log it
      });
    })
  }
}
