import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Catalog } from '../model/catalog';
import { FileUploadService } from '../services/file-upload-service.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption } from '@angular/material/list';
import { CatalogsService } from '../services/catalogs.service';
import { ImportResultDto } from '../model/importFileDto';

@Component({
  selector: 'file-upload-page',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput',  {static: false}) 
  fileInput: ElementRef;

  fileToUpload: File = null;
  catalogs: string[];
  selectedCatalogsToUpload: string;
  uploadInProgress: boolean = false;
  parsedCatalogs: ImportResultDto;

  errorMessage: string;

  color = 'primary';
  mode = 'indeterminate';

  constructor(private fileUploadService: FileUploadService, private catalogService: CatalogsService) { }

  ngOnInit() {
    this.catalogs = this.catalogService.catalogs;
  }

  handleFileSelect(files: FileList) {
    this.fileToUpload = files[0];
    this.cleanErrorMsg();
  }

  startFileUpload() {
    this.uploadInProgress = true;
    console.log(this.selectedCatalogsToUpload);

    this.fileUploadService.postFile(this.fileToUpload, this.catalogService.defCatalogType(this.selectedCatalogsToUpload[0]))
      .pipe()
      .subscribe(response => {
        this.parsedCatalogs = response;
        this.uploadInProgress = false;
      }, error => {
        this.handleError(error)
        this.uploadInProgress = false;
      });
  }

  handleError(error: any) {
    this.errorMessage = `Error! Details: ${error.error.message}`;
    this.fileToUpload = null;
    this.selectedCatalogsToUpload = null;
  }

  cleanErrorMsg() {
    this.errorMessage = null;
    this.fileInput.nativeElement.value='';
  }

  uploadBlocked(): boolean {
    if (this.selectedCatalogsToUpload == undefined || this.selectedCatalogsToUpload.length != 1 || this.fileToUpload == null) {
      return true;
    }
    return false;
  }
}
