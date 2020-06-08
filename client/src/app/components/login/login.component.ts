import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Route, Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  mensaje: any = [];
  user = {
    id: 0,
    username: "",
    password: ""
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
          this.router.navigateByUrl('/profile', { state: { hello: this.mensaje.message } });
          this.UsersService.logUserIn(true);
          localStorage.setItem('logeado', 'true');
          console.log(this.mensaje.message.substring(10,11));
          localStorage.setItem('id', this.mensaje.message.substring(10,11));
          localStorage.setItem('usuario', this.mensaje.message.substring(11,30));
        }

      },
      (err) => console.log(err)
    );
  }
}
