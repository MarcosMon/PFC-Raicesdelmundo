import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usr: any = localStorage.getItem('usuario');
  user = this.usr.replace('permissions', '');
  constructor(private UsersService: UsersService) {
  }

  ngOnInit() {
  }




}
