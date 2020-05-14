import { Component, OnInit, HostBinding } from '@angular/core';
import { Museum } from '../../models/museums';
import {MuseumsService} from '../../services/museums.service';

@Component({
  selector: 'app-museum-form',
  templateUrl: './museum-form.component.html',
  styleUrls: ['./museum-form.component.css']
})
export class MuseumFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

    museum : Museum = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor( private MuseumsService : MuseumsService) { }

  ngOnInit() {
  }

  saveNewMuseum(){
    delete this.museum.created_at;
    delete this.museum.id;
    this.MuseumsService.saveMuseum(this.museum).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }


}
