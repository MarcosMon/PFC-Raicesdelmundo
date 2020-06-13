import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  API_URI = 'http://localhost:3000/api';
  // API_URI = "http://www.raicesdelmundo.tk:3000/api";

  constructor(private http: HttpClient) { }

  createComment(data){
    return this.http.post(`${this.API_URI}/comments`, data);
}

  getListCommentsByMuseum(id){
    return this.http.get(`${this.API_URI}/comments/${id}`);
}
  deleteMuseumComments(id: string) {
  return this.http.delete(`${this.API_URI}/comments/${id}`);
  }

}
