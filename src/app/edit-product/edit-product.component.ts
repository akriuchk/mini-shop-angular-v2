import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { api } from 'src/environments/apis';
import { Product } from '../model/linen';
import { CatalogsService } from '../services/catalogs.service';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  formGroup: FormGroup;
  imageUrl: string;
  newProductImage: File = null;

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    formBuilder: FormBuilder,
    private imageService: ImagesService,
    private catalogService: CatalogsService
  ) {
    this.formGroup = formBuilder.group({
      smallAvailable: this.product.smallAvailable,
      middleAvailable: this.product.middleAvailable,
      duoAvailable: this.product.duoAvailable,
      euroAvailable: this.product.euroAvailable
    });
  }

  handleFileSelect(files: FileList) {
    this.newProductImage = files[0];
    // this.cleanErrorMsg();
  }

  onSaveClick(): void {
    this.product.smallAvailable = this.formGroup.value.smallAvailable;
    this.product.middleAvailable = this.formGroup.value.middleAvailable;
    this.product.duoAvailable = this.formGroup.value.duoAvailable;
    this.product.euroAvailable = this.formGroup.value.euroAvailable;

    console.log(this.product);

    if (this.newProductImage) {
      this.imageService.postFile(this.newProductImage, this.product.name).subscribe(resp => resp);
    }
    this.catalogService.updateProduct(this.product).subscribe(resp => resp);
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.product.images.length != 0) {
      this.imageUrl = `${api.images}/${this.product.images[0].id}/raw`
    }
  }

  set404forImage() {
    this.imageUrl = "assets/not-available.png";
  }

}
