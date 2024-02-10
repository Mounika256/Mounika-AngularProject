import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  isLoggedIn: boolean = false
  logoutIcon: string = '\u27F6';
  currentPath: string = ''

  constructor(public router: Router) {}


  getNavbar(){
    this.isLoggedIn = true
  }

  logoutBtn(){
    this.isLoggedIn = false
    this.router.navigateByUrl('/')
  }


  navigateToPage(path: string): void {
    this.router.navigateByUrl(path)
    this.currentPath = path
  }

}
