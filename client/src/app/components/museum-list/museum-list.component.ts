import { Component, OnInit, HostBinding } from '@angular/core';

import {MuseumsService} from '../../services/museums.service'

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  museums: any = [];

  constructor(private museumsService : MuseumsService) { }

  ngOnInit() {
    this.getMuseums();
  }

  getMuseums(){
    this.museumsService.getMuseums().subscribe(
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

}
