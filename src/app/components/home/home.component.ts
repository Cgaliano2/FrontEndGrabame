import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import { TrayServices } from '../../_Services/tray.service';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
const moment = _moment;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ubicacionControl = new FormControl();
  selectFormControl = new FormControl();
  Lastup: any = [];
  Tray: any = [];
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked = true;
  public clicked1 = false;
  public clicked2 = false;
  // CHART 1
  dato1: any;
  dato2: any;
  dato3: any;
  // Ubicaciones
  ubicaciones: any = [];
  // chart x año
  Anual: any = [];
  anio: any;
  total: any;
// Diarios
daily: any;
error: any;

  // chart = [];

  constructor(private apiService: TrayServices) { }

  ngOnInit() {
this.apiService.getUbication().subscribe(datos => {
  // console.log(datos);
  this.ubicaciones = datos;
  const gradientChartOptionsConfigurationWithTooltipBlue: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest'
    },
    responsive: true,
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: '#2380f7'
        }
      }],

      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#2380f7'
        }
      }]
    }
  };


}, error => {

  this.error = error;
  console.log(this.error);

});

this.apiService.getChartDaily().subscribe(res => {
  const informacion = res.pop();
  this.daily = informacion.total;
  console.log(this.daily);
});


this.apiService.getChartYearly().subscribe(res => {
  // console.log(res);
  this.Anual = res;
  const total = this.Anual.map(res => res.total).reverse();
  const anio = this.Anual.map(res => res._id.año).reverse();
  this.anio = anio;
  this.total = total;

// chart verde
  const gradientChartOptionsConfigurationWithTooltipGreen: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#54BAE8', // '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent',
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(0,242,195,0.1)',
        zeroLineColor: 'transparent',
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
};

  this.canvas = document.getElementById('chartLineGreen');
  this.ctx = this.canvas.getContext('2d');


  const gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
  gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); // green colors
  gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); // green colors

  const data = {
  labels: this.anio,
  datasets: [{
    label: 'Data',
    fill: true,
    backgroundColor: gradientStroke,
    borderColor: '#00D6B4',
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: '#00D6B4',
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: '#00D6B4',
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: this.total,
  }]
};


  const myChart = new Chart(this.ctx, {
  type: 'line',
  data,
  options: gradientChartOptionsConfigurationWithTooltipGreen

});

});
this.apiService.getChartsMontly().subscribe(res => {
      // console.log(res);
      const Anio = res.map(res => res._id.año).sort();
      const Total = res.map(res => res.total);
      const Info = res.map(res => res._id.mes).sort();

      this.dato1 = Total;
      this.dato2 = Info;
      this.dato3 = Anio;

      console.log(this.dato1);
      console.log(this.dato2);
      console.log(this.dato3);


      const gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: '#9a9a9a'
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,252,212,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9a9a9a'
          }
        }]
      }
    };


      this.canvas = document.getElementById('chartBig1');
      this.ctx = this.canvas.getContext('2d');

      const gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);


      gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); // green colors
      gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); // green colors


      const data = {
      labels: this.dato2,
      datasets: [{
        label: 'Data',
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00D6B4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00D6B4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00D6B4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: this.dato1,
      }]
    };

      const myChart = new Chart(this.ctx, {
      type: 'line',
      data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });

  });

  }

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }



}


/*function getAllIndexes(arr) {
  let indexes = [], i: number;
  for (i = 0; i < arr.length; i++) {
        indexes.push(i);
}
  return indexes;
}*/
