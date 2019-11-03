import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
    private readonly imagesEndpoint: string;

  constructor(private http: HttpClient) {
    this.imagesEndpoint = environment.apiUrl + 'image';
  }

  public get(id: number): Observable<HttpResponse<any>> {
    return this.http.get(this.imagesEndpoint + id, {
      observe: 'response'
    });
  }
}
