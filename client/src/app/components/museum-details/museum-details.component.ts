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
  webVisitClicks = 0;
  webTicketBuy = 0;
  kpi: any = {
    id: 0,
    id_museum: this.params.id,
    webVisitClicks: 0,
    webTicketBuy: 0,
    amountOfComments: 0,
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

      this.kpiService.getMuseumsKPI(params.id).subscribe(
        res => {
          this.kpi = res;
          this.edit = true;
        },
        err => console.log(err)

      );

  }

  saveNewMuseumKPI() {
    delete this.kpi.created_at;
    delete this.kpi.id;
    this.kpiService.saveMuseumKPI(this.kpi).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
  updateMuseumKPI(){
    delete this.kpi[0].name;
    delete this.kpi[0].user_id;
    this.kpi[0].id_museum = this.params.id;
    this.kpi[0].webVisitClicks += this.webVisitClicksCount();
    this.kpi[0].webTicketBuy += this.webTicketBuyCount();
    this.kpiService.updateMuseumKPI(this.kpi[0].id_museum, this.kpi[0])
    .subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(err)
    )
  }

  webVisitClicksCount(){
    this.webVisitClicks = 0;
    this.webVisitClicks ++;
    return this.webVisitClicks;
  }

  webTicketBuyCount(){
    this.webTicketBuy = 0;
    this.webTicketBuy ++;
    return this.webTicketBuy;
  }



}
