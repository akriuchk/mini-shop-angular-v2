import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from '../model/catalog';
import { environment } from 'src/environments/environment';

@Injectable()
export class CatalogsService {
  private readonly bedsheetsUrl: string;

  constructor(private http: HttpClient) {
    this.bedsheetsUrl = environment.apiUrl + 'catalog';
  }

  public findAll(onlyAvailable: string): Observable<HttpResponse<any>> {
    const params = { onlyAvailable }
    return this.http.get(this.bedsheetsUrl, {
      params,
      observe: 'response'
    });
  }

  // public findAll(): Observable<Catalog[]> {
  //   return this.http.get<Catalog[]>(this.bedsheetsUrl)
  //   ;
  // }
}
