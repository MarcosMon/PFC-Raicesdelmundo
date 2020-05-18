import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Route, Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje: any = [];
  user = {
    id: 0,
    username: "",
    password: 0
  };
  constructor(private UsersService: UsersService,
    private router: Router,
    private activateddRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  getUsers() {

    console.log(this.user);
    this.UsersService.getUser(this.user).subscribe(
      (res) => {

        console.log(res);
        this.mensaje = res;
        if(this.mensaje.message.includes('respuesta')){
          this.router.navigateByUrl('/profile', { state: { hello: res } });
          this.UsersService.logUserIn();
          localStorage.setItem('id', this.mensaje.message.substr(10,11));
        }

      },
      (err) => console.log(err)
    );
  }
}
