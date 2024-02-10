import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  strTask: string = ''
  tasks : string[] = []

  setTasks(value:string){
    return this.tasks.push(value)
  }
}
