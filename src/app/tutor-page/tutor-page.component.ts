import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/linen';


import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';


@Component({
  selector: 'app-tutor-page',
  templateUrl: './tutor-page.component.html',
  styleUrls: ['./tutor-page.component.scss']
})
export class TutorPageComponent implements OnInit {

  @Input() products: Product[]
  availableSizes = [
    { name: 'Small', selected: false },
    { name: 'Medium', selected: false },
    { name: 'Euro', selected: false },
    { name: 'Duo', selected: false }
  ];
  
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.fetchProducts();
  }


  fetchProducts(): void {
    this.http.get<Product[]>("http://localhost:8081/products", {
      observe: 'response'
    })
      .pipe(
        // tap(({ user }) => this.setUser(user)),
        // pluck('user')
      )
      .subscribe((response: HttpResponse<any>) => {
        if (response.body) {
          this.products = response.body;
        }
      })

  }

}
