import { Component, OnInit, HostBinding } from '@angular/core';
import {MuseumsService} from '../../services/museums.service'

@Component({
  selector: 'app-mymuseum-list',
  templateUrl: './mymuseum-list.component.html',
  styleUrls: ['./mymuseum-list.component.css']
})
export class MymuseumListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  museums: any = [];
  constructor(private museumsService : MuseumsService) { }

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

}
