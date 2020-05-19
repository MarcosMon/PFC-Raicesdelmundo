import { Component, OnInit, HostBinding } from '@angular/core';

import {MuseumsService} from '../../services/museums.service'

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  allmuseums: any = [];

  constructor(private museumsService : MuseumsService) { }

  ngOnInit() {
    this.getAllMuseums();
  }

  getAllMuseums(){
    this.museumsService.getAllMuseums().subscribe(
      res => {
        this.allmuseums = res;
        console.log(this.allmuseums);
      },
      err => console.log(err)

    );
  }


}
