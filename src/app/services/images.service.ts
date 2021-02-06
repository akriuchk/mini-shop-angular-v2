import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from "../../environments/apis";
import { Image } from "../model/image";


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

  public getRawUrl(id: number): string {
    return `${api.images}/${id}/raw`
  }

  public patchImages(images: Image[]) {
    const url = `${api.images}`;
    return this.http.patch(url, images)
      .subscribe(v => console.log(v))
      ;
  }
}
