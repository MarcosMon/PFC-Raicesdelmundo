import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userLogOut;
  userID = localStorage.getItem('id');
  log : any = localStorage.getItem('logeado');
constructor( private UsersService: UsersService ) {

}

  ngOnInit() {
  }
  logOut(){
    this.UsersService.logUserOut();
    localStorage.setItem('logeado','false');
  }
  islogged(){
    return  localStorage.getItem('logeado');
  }


  }



