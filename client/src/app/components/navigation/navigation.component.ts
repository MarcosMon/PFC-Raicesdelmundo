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
  ok = false;
constructor( private UsersService: UsersService ) {

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



