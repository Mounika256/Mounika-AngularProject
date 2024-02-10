import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FetchImagesComponent } from './fetch-images/fetch-images.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    HomeComponent,
    ReactiveFormsComponent,
    FetchImagesComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
