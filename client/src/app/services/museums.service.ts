import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuseumsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
    getMuseums() {
      return this.http.get(`${this.API_URI}/museums`);
    }
    getOneMuseum(id : string){
      return this.http.get(`${this.API_URI}/museums/${id}`)

    }
   }

