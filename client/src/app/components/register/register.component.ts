import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  mensaje: any = [];
  user = {
    id: 0,
    username: "",
    password: "",
    fullname: "",
    user_role: "",
    created_at: new Date(),
  };

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private UsersService: UsersService,
    private router: Router,
    private activateddRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        fullName: ["", Validators.required],
        userName: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: this.MustMatch("password", "confirmPassword"),
      }
    );
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.user.fullname = this.registerForm.value.fullName;
    this.user.username = this.registerForm.value.userName;
    this.user.password = this.registerForm.value.password;
    this.saveNewUser();
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  saveNewUser() {
    this.UsersService.createUser(this.user).subscribe(
      (res) => {
        this.mensaje = res;

        if (this.mensaje.message.includes("Usuario creado")) {
          this.router.navigate(["/login"]);
        }
      },
      (err) => console.log(err)
    );
  }
}
