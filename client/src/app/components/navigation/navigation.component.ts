import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userID = localStorage.getItem('id');
  userRole = localStorage.getItem('userRole');

constructor( private UsersService: UsersService,
            private router : Router ) {

}

  ngOnInit() {

  }
  logOut(){
    this.UsersService.logUserIn('false');
  }
  isLogged(){
    return <any> this.UsersService.isLogged();
  }
  }



