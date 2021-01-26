import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/environments/apis';
import { ImportResultDto } from '../model/importFileDto';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  postFile(file: File, catalog: string): Observable<ImportResultDto> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('category', catalog);

    return this.http.post<ImportResultDto>(api.files, formData);
  }
}
