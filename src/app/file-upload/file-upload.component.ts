import { Component, OnInit } from '@angular/core';
import { Catalog } from '../model/catalog';
import { FileUploadService } from '../services/file-upload-service.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption } from '@angular/material/list';
import { CatalogsService } from '../services/catalogs.service';

@Component({
  selector: 'file-upload-page',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileToUpload: File = null;
  catalogs: string[];
  selectedCatalogsToUpload: string;
  uploadInProgress: boolean = false;
  parsedCatalogs: Catalog[];

  errorMessage: string;

  color = 'primary';
  mode = 'indeterminate';

  constructor(private fileUploadService: FileUploadService, private catalogService: CatalogsService) { }

  ngOnInit() {
    this.catalogs = this.catalogService.catalogs;
  }

  handleFileSelect(files: FileList) {
    this.fileToUpload = files[0];
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
        this.errorMessage = error.error.message;
        this.uploadInProgress = false;
      });
  }

  uploadBlocked(): boolean {
    if (this.selectedCatalogsToUpload == undefined || this.selectedCatalogsToUpload.length != 1 || this.fileToUpload == null) {
      return true;
    }
    return false;
  }
}
