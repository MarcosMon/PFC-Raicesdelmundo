import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class UsersService {
  API_URI = "http://localhost:3000/api";
  // API_URI = "http://www.raicesdelmundo.tk:3000/api";

  constructor(private http: HttpClient) {}
  getUser(user) {
    return this.http.post(`${this.API_URI}/login`,user);
  }

  createUser(user) {
    return this.http.post(`${this.API_URI}/register`, user);
  }


  public logUserIn(data : any) {
    localStorage.setItem('logeado', data);

  }
  public isLogged()  {
    return <any> localStorage.getItem('logeado');
  }

}
