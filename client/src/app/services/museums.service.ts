import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Museum } from "../models/museums";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class MuseumsService {
  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}
  getMuseums() {
    return this.http.get(`${this.API_URI}/museums`);
  }
  getOneMuseum(id: string) {
    return this.http.get(`${this.API_URI}/museums/${id}`);
  }

  deleteMuseum(id: string) {
    return this.http.delete(`${this.API_URI}/museums/${id}`);
  }

  saveMuseum(museum: Museum) {
    return this.http.post(`${this.API_URI}/museums`, museum);
  }

  updateMuseum(id : string | number, updateMuseum : Museum): Observable<Museum> {
    return this.http.put(`${this.API_URI}/museums/${id}`,updateMuseum);
  }
}
