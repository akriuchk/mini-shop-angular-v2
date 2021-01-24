import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LinenBynameSearchComponent } from './linen-byname-search/linen-byname-search.component';
import { LoginComponent } from './login/login.component';
import { CatalogPageComponent } from './second-page/second-page.component';
import { TutorPageComponent } from './tutor-page/tutor-page.component';

const appRoutes: Routes = [
  { path: 'upload', component: FileUploadComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'linenSearch', component: LinenBynameSearchComponent },
  { path: 'tutor', component: TutorPageComponent },
  { path: 'signin', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
