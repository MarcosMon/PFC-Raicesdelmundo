import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MuseumsService} from '../../services/museums.service'
import {Location} from '@angular/common';

@Component({
  selector: 'app-museum-details',
  templateUrl: './museum-details.component.html',
  styleUrls: ['./museum-details.component.css']
})
export class MuseumDetailsComponent implements OnInit {
  curiosidad:any = {};
  constructor( private activatedRoute: ActivatedRoute,
    private MuseumsService:MuseumsService, private location:Location) {

}


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.MuseumsService.getOneMuseum(params.id).subscribe(
      (res) => {
        this.curiosidad = res;
        console.log(res)
      },
      (err) => console.log(err)
    );
  }



}
