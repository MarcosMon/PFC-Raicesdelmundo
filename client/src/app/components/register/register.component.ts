import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Route, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    id: 0,
    username: "",
    password: 0,
    fullname: "",
    created_at: new Date()
  };

  constructor(private UsersService: UsersService,
    private router: Router,
    private activateddRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  saveNewUser() {


    console.log(this.user);
    this.UsersService.createUser(this.user).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/museums"]);
      },
      (err) => console.log(err)
    );
  }

}
