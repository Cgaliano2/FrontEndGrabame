import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { TrayServices } from '../../_Services/tray.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Tray } from '../../models/tray';
import * as _moment from 'moment';
const moment = _moment;
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { NgModel } from '@angular/forms';







@Component({
  selector: 'app-tray-list',
  templateUrl: './tray-list.component.html',
  styleUrls: ['./tray-list.component.css']

})



export class TrayListComponent implements OnInit {
  model1: Date;
  panelOpenState = false;
constructor(
    private trayApi: TrayServices,
    private router: Router,
    public dialog: MatDialog,
    private actRoute: ActivatedRoute
  ) {
  }
  // Mostrar Bandejas
tray: any = [];
displayedColumns: string[] = [];
dataSource: any = [];
// Filtros
fechas: any;
fecha2: any;
fecha1: any;
consulta: any;
fecha: any;
unArray: any = [];
/*date = new FormControl(new Date().toString());
serializedDate = new FormControl((new Date().toUTCString()));
fecha = moment(this.serializedDate.value).format('YYYY-MM-DD');*/
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  events: string[] = [];
  ngOnInit() {
   this.LoadTray();

  }
  // Cargar bandejas
  LoadTray() {
    return this.trayApi.getTray()
    .subscribe( data => {
          this.tray = data;
          this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso', 'ubicacion'];
          this.dataSource = new MatTableDataSource<Tray>(data);
          this.dataSource.paginator = this.paginator;


    });
  }
  // detalles bandeja
  verBandejas(idx) {

   this.router.navigate(['/tray', idx]);

  }
  // FILTROS----------------------------------------------------

  // Filtro x Fecha
  /*addEvent(term, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${moment(event.value).format('YYYY-MM-DD')}`);
    term = this.events.pop();

    this.router.navigate(['/search-date', term]);
  }
*/

obtenerFecha(fecha , event: MatDatepickerInputEvent<Date>) {
  this.events.push(`${moment(event.value).format('YYYY-MM-DD')}`);
  fecha = this.events.pop();
  console.log(fecha);
  // this.router.navigate(['/search-date', term]);
  this.router.navigate(['search-date', fecha], {relativeTo: this.actRoute});
}
  // Filtro X Rango de Fechas
  obtainDate(term) {
     this.fechas = term;
     this.fecha1 = moment(this.fechas[0]).format('YYYY-MM-DD');
     this.fecha2 = moment(this.fechas[1]).format('YYYY-MM-DD');
     this.consulta = this.fecha1 + '&' + this.fecha2;
     console.log(this.consulta);
     this.router.navigate(['search-dateRange', this.consulta]);
     // this.router.navigate(['/'])
  }
}
