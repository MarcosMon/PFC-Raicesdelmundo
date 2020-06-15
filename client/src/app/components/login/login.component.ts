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
    this.UsersService.getUser(this.user).subscribe(
      (res) => {

        this.mensaje = res;
        if (this.mensaje.message.includes('respuesta')) {
          this.router.navigate(["/profile"]);
          this.UsersService.logUserIn(true);
          localStorage.setItem('logeado', 'true');
          localStorage.setItem('id', this.mensaje.message.substring(10, 11));
          localStorage.setItem('usuario', this.mensaje.message.substring(11, 30));
          this.setUserRole(this.mensaje.message);
        }

      },
      (err) => console.log(err)
    );
  }
  setUserRole(userRole: any) {

    var valueRole = userRole.match('permissions|admin');

    if (valueRole == null) {
      localStorage.setItem('userRole', 'normalUser');
    }
    if (valueRole[0] == 'admin') {
      localStorage.setItem('userRole', 'admin');
    }
    else {
      localStorage.setItem('userRole', 'permissions');
    }
  }
}
