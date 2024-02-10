import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FetchImagesComponent } from './fetch-images/fetch-images.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'fetchImages',
    component: FetchImagesComponent,
  },
  {
    path: "reactiveForms",
    component: ReactiveFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }