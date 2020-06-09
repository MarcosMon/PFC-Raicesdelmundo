import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from "@angular/router";

import {MuseumsService} from '../../services/museums.service'

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {
  allmuseums: any = [];
  constructor(private museumsService : MuseumsService,
    private router: Router,
    private activateddRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllMuseums();
  }

  getAllMuseums(){
    this.museumsService.getAllMuseums().subscribe(
      res => {
        this.allmuseums = res;
      },
      err => console.log(err)

    );
  }
  showMuseum(nombre:string){

    this.router.navigate(['details/museums/',nombre]);
  }


}
