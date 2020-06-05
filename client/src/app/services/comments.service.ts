import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  createComment(data){
    return this.http.post(`${this.API_URL}/comments`, data);
}

getListCommentsByMuseum(id){
    return this.http.get(`${this.API_URL}/comments/${id}`);
}
}
