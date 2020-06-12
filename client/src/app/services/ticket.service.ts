import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  API_URI = 'http://localhost:3000/api';
  // API_URI = "http://www.raicesdelmundo.tk:3000/api";

  constructor(private http: HttpClient) { }

  createTicket(data){
    return this.http.post(`${this.API_URI}/tickets`, data);
  }
  getListTicketsByUser(id){
      return this.http.get(`${this.API_URI}/tickets/${id}`);
  }
  deleteTicket(id: string) {
  return this.http.delete(`${this.API_URI}/tickets/${id}`);
  }
  updateTicketStatus(id : string | number, updateTicketStatus : any): Observable<any> {
    return this.http.put(`${this.API_URI}/tickets/${id}`,updateTicketStatus);
  }
}
