import { Component, OnInit, HostBinding } from '@angular/core';
import {MuseumsService} from '../../services/museums.service'
import { Route, Router, ActivatedRoute } from "@angular/router";
import { KpiService } from 'src/app/services/kpi.service';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-mymuseum-list',
  templateUrl: './mymuseum-list.component.html',
  styleUrls: ['./mymuseum-list.component.css']
})
export class MymuseumListComponent implements OnInit {
  museums: any = [];
  error = 'false';
  constructor(private museumsService : MuseumsService,
    private kpiService : KpiService,
    private commentsService : CommentsService,
    private router: Router,
    private activateddRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getMuseums();

  }

  getMuseums(){
    this.museumsService.getMuseums(localStorage.getItem('id')).subscribe(
      res => {
        this.museums = res;
        console.log(this.museums);

      },
      err =>{
        this.error = err.error.text;
      }


    );
  }

deleteMyMuseumKPI(id:string){
  this.kpiService.deleteMuseumKPI(id).subscribe(
    res => {
      console.log(res)
      this.getMuseums();
    },
    err => console.log(err)
  );
}
deleteMyMuseumComments(id:string){
  this.commentsService.deleteMuseumComments(id).subscribe(
    res => {
      console.log(res)
      this.getMuseums();
    },
    err => console.log(err)
  );
}

  deleteMuseum(id: string){

    this.deleteMyMuseumKPI(id);
    this.deleteMyMuseumComments(id);

    this.museumsService.deleteMuseum(id).subscribe(
      res => {

        this.getMuseums();
        console.log(res);

        if(this.museums.length <= 1){
          this.museums = [];
        }
      },
      err => console.log(err)
    );
  }

  showMuseum(nombre:string){

    this.router.navigate(['details/museums/',nombre]);

  }
}
