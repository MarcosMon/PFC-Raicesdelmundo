import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class KpiService {
  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}


  getMuseumsKPI(id: string){
    return this.http.get(`${this.API_URI}/kpi/${id}`);
  }
  getMuseumsKPIUser(id: string){
    return this.http.get(`${this.API_URI}/login/users/kpi/${id}`);
  }

  saveMuseumKPI(museum) {
    return this.http.post(`${this.API_URI}/kpi`, museum);
  }

  updateMuseumKPI(id : string | number, updateMuseumKPI : any): Observable<any> {
    return this.http.put(`${this.API_URI}/kpi/${id}`,updateMuseumKPI);
  }
}
