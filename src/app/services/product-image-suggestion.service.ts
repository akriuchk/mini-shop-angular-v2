import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/environments/apis';
import { Product } from '../model/linen';

@Injectable({
  providedIn: 'root'
})
export class ProductImageSuggestionService {

  constructor(private http: HttpClient) { }

// /suggestedImages

  public getSuggestions(): Observable<HttpResponse<Product[]>>{
    const url = `${api.products}/suggestedImages`;
    return this.http.get<Product[]>(url, {
      observe: 'response'
    });
  }
  
}
