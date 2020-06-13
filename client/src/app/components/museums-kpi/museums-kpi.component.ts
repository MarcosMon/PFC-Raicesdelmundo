import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Route, Router, ActivatedRoute } from "@angular/router";
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {KpiService} from '../../services/kpi.service'
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './museums-kpi.component.html',
  styleUrls: ['./museums-kpi.component.css'],
})
export class MuseumsKpiComponent implements OnInit {


  constructor(private kpiService : KpiService,
    private router: Router,
    private activateddRoute: ActivatedRoute) { }

    kpi;
    public barChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{ticks: {
        beginAtZero: true,
        callback: function (label : any, index, labels) {
          if (Math.floor(label) === label) {
            return label;
        }
        }
    }}], yAxes: [{

     }] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        },
      }
    };

    public barChartLabels: Label[] = [];
    public barChartType: ChartType = 'horizontalBar';
    public barChartLegend = true;
    // public barChartPlugins = [pluginDataLabels];

    public barChartData: ChartDataSets[] = [
      { data: [], label: 'webVisitClicks' },
      { data: [], label: 'webTicketBuy' }
    ];
  ngOnInit() {
    this.getMuseumsKPI();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  getMuseumsKPI(){
    this.kpiService.getMuseumsKPIUser(localStorage.getItem('id')).subscribe(
      res => {
        this.kpi = res;
        console.log(this.kpi);
        this.kpi.forEach(element => {
          this.barChartLabels.push(element.name);
          this.barChartData[0].data.push(element.webVisitClicks);
          this.barChartData[1].data.push(element.webTicketBuy);
        });
      },
      err => console.log(err)

    );
  }
}
