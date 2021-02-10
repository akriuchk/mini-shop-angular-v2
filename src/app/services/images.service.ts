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

  postFile(file: File, product: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('product', product);

    return this.http.post(api.images, formData);
  }

  public get(id: number): Observable<HttpResponse<Image>> {
    const url = `${api.images}/${id}`;
    return this.http.get<Image>(url, {
      observe: 'response'
    });
  }

  public getRawUrl(id: number): string {
    return `${api.images}/${id}/raw`
  }

  public getUnmatched(): Observable<HttpResponse<Image[]>> {
    const url = `${api.images}/unmatched`;
    return this.http.get<Image[]>(url, {
      observe: 'response'
    });
  }

  public patchImages(images: Image[]): Observable<any> {
    const url = `${api.images}`;
    return this.http.patch(url, images).pipe(
      tap(_ => console.log(_.toString())),
      catchError(_ => of(_))
    );
  }


}
