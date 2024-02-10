import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http: HttpClient) {
    this.myBehaviouralSubject.next('hi')
   }


  mySubject : Subject<any> = new Subject() 
  myBehaviouralSubject : BehaviorSubject<string> = new BehaviorSubject('data from Behavioural Subject') 


  fetchApi(): Observable<any>{
    return this.http.get('https://randomuser.me/api/')
  }
}