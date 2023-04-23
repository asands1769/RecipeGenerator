import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-generator';
  currentUser;
  loggedIn: boolean;
  constructor(private http: HttpClient, private router: Router) { 
  }
  ngOnInit(): void {
  }
toProfile(){
  this.router.navigate(["/profile"])
}
}
