import { Component } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public fetchApiServ: FetchApiService,
    public router: Router){}

  subs: Subscription[] = []

  getRes: [] = []
  
  getApiResData(){
    let resApi= this.fetchApiServ.fetchApi().subscribe({
      next: (res)=>{
        this.getRes=res.results[0]
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this.subs.push(resApi)
  }
}
