import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-fetch-images',
  templateUrl: './fetch-images.component.html',
  styleUrls: ['./fetch-images.component.scss']
})
export class FetchImagesComponent {

  subs: Subscription[] = []

  constructor(
    public router: Router,
    public fetchApiServ: FetchApiService) { }
 
  getData: any = ""
  
  getApiData(){
    let resApi= this.fetchApiServ.fetchApi().subscribe({
      next: (res)=>{
        console.log(res.results[0].name);
        this.getData=res.results[0]
        console.log("getData", this.getData)
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this.subs.push(resApi)
  }
}