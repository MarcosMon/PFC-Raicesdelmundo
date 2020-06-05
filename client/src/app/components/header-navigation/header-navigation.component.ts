import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

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
