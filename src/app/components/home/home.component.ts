import { Component,OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import { TrayServices } from '../../Servicios/tray-services';
import * as _moment from 'moment';
const moment = _moment;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chart = []; 

  constructor(private apiService: TrayServices) { }
  
  ngOnInit(){
    this.apiService.getTray().subscribe(res =>{
     
      let allDates = res.map(res => res.fechaIngreso);

      let tDate = []
      allDates.forEach((res) => {
        let fecha = moment(res).format('YY-MMM-D');
        tDate.push(fecha);
        console.log(fecha);
  
    
})
      this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels:tDate,
            datasets: [
              { 
                data: ['hola'],
                borderColor: "#3cba9f",
                fill: false
              },
              { 
                data: ['chau'],
                borderColor: "#ffcc00",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

    })
  }


 
}
