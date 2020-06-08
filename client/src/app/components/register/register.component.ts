import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Route, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  mensaje: any = [];
  user = {
    id: 0,
    username: "",
    password: "",
    fullname: "",
    user_role: "admin",
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
        this.mensaje = res;

        if(this.mensaje.message.includes('Usuario creado')){
          this.router.navigate(["/login"])
          // this.UsersService.logUserIn();
        }
      },
      (err) => console.log(err)
    );
  }



}
