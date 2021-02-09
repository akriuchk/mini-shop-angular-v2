import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/linen';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { api } from 'src/environments/apis';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() public product: Product;

  imageUrl: string;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.product.images.length != 0) {
      this.imageUrl = `${api.images}/${this.product.images[0].id}/raw`
    }
  }

  set404forImage() {
    this.imageUrl = "assets/not-available.png";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  getUser(): User {
    return this.authService.currentUserValue;
  }
}
