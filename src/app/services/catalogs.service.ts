import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from '../model/catalog';

@Injectable()
export class CatalogsService {
  private bedsheetsUrl: string;
  private imagesUrl: string;

  constructor(private http: HttpClient) {
    this.bedsheetsUrl = 'https://kpb-catalog.herokuapp.com/catalog';
    this.imagesUrl = 'http://localhost:8080/image';
  }
 
  public findAll(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.bedsheetsUrl);
  }
}
