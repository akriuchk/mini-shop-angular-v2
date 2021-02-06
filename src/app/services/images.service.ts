import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { api } from "../../environments/apis";
import { Image } from "../model/image";
import { catchError, tap } from 'rxjs/operators';


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

  public patchImages(images: Image[]): Observable<any> {
    const url = `${api.images}`;
    return this.http.patch(url, images).pipe(
      tap(_ => console.log(_.toString())),
      catchError(_ => of(_))
    );
  }
}
