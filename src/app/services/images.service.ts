import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from "../../environments/apis";


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) {
  }

  public get(id: number): Observable<HttpResponse<any>> {
    const url = `${api.images}/${id}`;
    return this.http.get(url, {
      observe: 'response'
    });
  }
}
