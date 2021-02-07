import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';
import { Product } from '../model/linen';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-image-setting',
  templateUrl: './image-setting.component.html',
  styleUrls: ['./image-setting.component.scss']
})
export class ImageSettingComponent implements OnInit {

  orphanImages: Image[];
  decisionPatch: Map<Image, string> = new Map();

  constructor(
    private imageService: ImagesService
  ) { }

  ngOnInit() {
    this.imageService.getUnmatched().pipe()
      .subscribe(response => {
        this.orphanImages = response.body;
      }, error => {
        //log it
      });
  }

  setProductForImage(img: Image, productName: string) {
    console.log(`lets set ${productName} to ${img.filename}`)
    this.decisionPatch.set(img, productName)
  }

  imageUrl(image: Image): string {
    return this.imageService.getRawUrl(image.id);
  }

  confirmAndSend(): void {
    console.log(this.decisionPatch)
    var arr = Array.from(this.decisionPatch.entries())
      .map(entry => {
        var img = entry[0]
        img.product = entry[1]
        return img;
      })

    this.imageService.patchImages(arr).subscribe(_ => {
      this.imageService.getUnmatched().pipe()
        .subscribe(response => {
          this.orphanImages = response.body;
        }, error => {
          //log it
        });
    })
  }

}
