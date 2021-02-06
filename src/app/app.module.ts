import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio'
import { ItemCardComponent } from './item-card/item-card.component';
import { CatalogPageComponent } from './second-page/second-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CatalogsService } from './services/catalogs.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadService } from './services/file-upload-service.service';
import { LinenCatalogTableComponent } from './linen-catalog-table/linen-catalog-table.component';
import { LinenBynameSearchComponent } from './linen-byname-search/linen-byname-search.component';
import {
  MatAutocompleteModule, MatChipsModule, MatDialog, MatDialogModule, MatInputModule, MatPaginatorModule,
  MatSlideToggleModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from "@angular/material";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { TutorPageComponent } from './tutor-page/tutor-page.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ImportResultTableComponent } from './import-result-table/import-result-table.component';
import { AvailabilityStatusIconComponent } from './availability-status-icon/availability-status-icon.component';
import { ImageSuggestionsComponent } from './image-suggestions/image-suggestions.component';
import { ProductImageSuggestionService } from './services/product-image-suggestion.service';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CatalogPageComponent,
    ItemCardComponent,
    FileUploadComponent,
    LinenCatalogTableComponent,
    LinenBynameSearchComponent,
    TutorPageComponent,
    EditProductComponent,
    LoginComponent,
    ImportResultTableComponent,
    AvailabilityStatusIconComponent,
    ImageSuggestionsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [
    CatalogsService,
    FileUploadService,
    ProductImageSuggestionService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [
    MatSortModule
  ],
  entryComponents: [
    EditProductComponent
  ]
})
export class AppModule { }
