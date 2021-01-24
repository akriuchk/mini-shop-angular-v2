import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { api } from '../../environments/apis';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public apiUrl: string = '';
  public enableDebug = true;
  public auth: string = '';
  public categories: string = '';
  public search: string = '';
  public files: string = '';
  public images: string = '';

  constructor() { 
    this.apiUrl = environment.apiUrl;
    this.enableDebug = environment.production;
    this.auth = api.auth;
    this.categories = api.categories;
    this.search = api.search;
    this.files = api.files;
    this.images = api.images;
  }
}
