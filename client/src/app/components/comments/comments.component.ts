import { Component, OnInit } from '@angular/core';
import { CommentsService } from "../../services/comments.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment;
  userID = localStorage.getItem('id');
  commentList;
  params = this.activatedRoute.snapshot.params;
  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsList();
  }

  commentsList() {

    this.commentsService.getListCommentsByMuseum(this.params.id).subscribe(
      res => {
        console.log(res);
        this.commentList = res;
      },
      err => console.log(err)
    );
  }

  createComment() {

    let commentData: any = {
      id_user: this.userID,
      id_museum: this.params.id,
      comment: this.comment
    }
    this.commentsService.createComment(commentData).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    this.comment = null;
    this.commentsList();
  }

}
