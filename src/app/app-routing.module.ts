import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { CatalogPageComponent } from './second-page/second-page.component';

const appRoutes: Routes = [
  {path: 'first-page', component: FirstPageComponent},
  {path: 'second-page', component: CatalogPageComponent} 
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
