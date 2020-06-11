import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MuseumsService} from '../../services/museums.service'
import {KpiService} from '../../services/kpi.service'
import {Location} from '@angular/common';

@Component({
  selector: 'app-museum-details',
  templateUrl: './museum-details.component.html',
  styleUrls: ['./museum-details.component.css']
})
export class MuseumDetailsComponent implements OnInit {
  museum:any = {};
  params = this.activatedRoute.snapshot.params;

  kpi: any = {
    id: 0,
    id_museum: this.params.id,
    webVisitClicks: 0,
    webTicketBuy: 0,
    created_at: new Date(),
  };

  edit: boolean = false;
  constructor( private activatedRoute: ActivatedRoute,
    private MuseumsService:MuseumsService,private kpiService : KpiService, private location:Location) {

}


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.MuseumsService.getOneMuseum(params.id).subscribe(
      (res) => {
        this.museum = res;
        console.log(res)
      },
      (err) => console.log(err)
    );
    this.getMuseumKPI();

  }

  getMuseumKPI(){
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      console.log(params.id);
      this.kpiService.getMuseumsKPI(params.id).subscribe(
        res => {
          this.kpi = res;
          this.edit = true;
          console.log(this.edit);
        },
        err => console.log(err)

      );
    }
  }

  saveNewMuseumKPI() {
    delete this.kpi.created_at;
    delete this.kpi.id;
    console.log(this.edit);
    this.getMuseumKPI();
    this.kpiService.saveMuseumKPI(this.kpi).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );

  }
  updateMuseumKPI(webVisit : boolean){
    delete this.kpi[0].name;
    delete this.kpi[0].user_id;
    this.kpi[0].id_museum = this.params.id;
    if(webVisit){
      this.kpi[0].webVisitClicks ++;
    }
    else{
      this.kpi[0].webTicketBuy ++;
    }

    this.kpiService.updateMuseumKPI(this.kpi[0].id_museum, this.kpi[0])
    .subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(err)
    )
  }


}
