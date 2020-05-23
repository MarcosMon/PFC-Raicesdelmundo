import { Component, OnInit, HostBinding } from '@angular/core';
import {MuseumsService} from '../../services/museums.service'
import { Route, Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-mymuseum-list',
  templateUrl: './mymuseum-list.component.html',
  styleUrls: ['./mymuseum-list.component.css']
})
export class MymuseumListComponent implements OnInit {
  museums: any = [];
  constructor(private museumsService : MuseumsService,
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
      err => console.log(err)

    );
  }

  deleteMuseum(id: string){

    this.museumsService.deleteMuseum(id).subscribe(
      res => {
        console.log(res)
        this.getMuseums();
      },
      err => console.log(err)
    );
  }

  showMuseum(nombre:string){

    this.router.navigate(['details/museums/',nombre]);

  }
}
