import { Component } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public todoSrvc : TodoListService){}
  
  task : string = ""
  
  addTasks(){
    console.log("task",this.task)
    this.todoSrvc.setTasks(this.task)
    this.task = ''
  }

}
