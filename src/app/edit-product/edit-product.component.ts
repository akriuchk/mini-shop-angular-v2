import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Linen } from '../model/linen';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  formGroup: FormGroup;
  apiUrl: string;
  imageUrl: string;

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public linen: Linen,
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      smallAvailable: this.linen.smallAvailable,
      middleAvailable: this.linen.middleAvailable,
      duoAvailable: this.linen.duoAvailable,
      euroAvailable: this.linen.euroAvailable
    });
  }

  onSaveClick(): void {
    this.linen.smallAvailable = this.formGroup.value.smallAvailable;
    this.linen.middleAvailable = this.formGroup.value.middleAvailable;
    this.linen.duoAvailable = this.formGroup.value.duoAvailable;
    this.linen.euroAvailable = this.formGroup.value.euroAvailable;

    console.log(this.linen);
    this.dialogRef.close();
  }

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
