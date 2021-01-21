import { Component, OnInit, Input } from '@angular/core';
import { Linen } from '../model/linen';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  
  @Input() public linen: Linen;

  apiUrl: string;
  imageUrl: string;

  constructor(
    public dialog: MatDialog
  ) {}

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

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: this.linen
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
