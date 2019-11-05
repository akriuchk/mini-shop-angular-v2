import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalog } from '../model/catalog';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private readonly fileuploadEndpoint: string;


  constructor(private http: HttpClient) {
    this.fileuploadEndpoint = environment.apiUrl + 'parse';
  }

  postFile(file: File, catalog: string): Observable<Catalog[]> {
    const formData: FormData = new FormData();
    formData.append('catalogFile', file, file.name);
    formData.append('catalog', catalog);

    return this.http.post<Catalog[]>(this.fileuploadEndpoint,
      formData
    );
  }
}
