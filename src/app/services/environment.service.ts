import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public apiUrl: string = '';
  public enableDebug = true;

  constructor() { 
    this.apiUrl = environment.apiUrl;
    this.enableDebug = environment.production
  }
}
