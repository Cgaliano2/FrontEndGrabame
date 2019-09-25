import { Component, OnInit,ViewChild, Input} from '@angular/core';
import { TrayServices } from '../../_Services/tray.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Tray } from '../../models/tray';
import * as _moment from 'moment';
const moment = _moment;
import {MatDatepickerInputEvent} from '@angular/material/datepicker';



@Component({
  selector: 'app-tray-list',
  templateUrl: './tray-list.component.html',
  styleUrls: ['./tray-list.component.css']

})



export class TrayListComponent implements OnInit {
tray: any = [];
displayedColumns: string[] = [];
dataSource: any = [];
fecha:any;
/*date = new FormControl(new Date().toString());
serializedDate = new FormControl((new Date().toUTCString()));
fecha = moment(this.serializedDate.value).format('YYYY-MM-DD');*/








@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

constructor(
    private trayApi: TrayServices,
    private router: Router
  ) {

  }
  ngOnInit() {
   this.LoadTray();
  }
  //Cargar bandejas
  LoadTray() {
    return this.trayApi.getTray()
    .subscribe( data => {
          this.tray = data;
          //console.log(this.tray);
          this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
          this.dataSource = new MatTableDataSource<Tray>(data);
          this.dataSource.paginator = this.paginator;
          //this.dataSource = data;
    });
  }
  //detalles bandeja
  verBandejas(idx)
  { 
   this.router.navigate(['/tray', idx]);
  }


  events: string[] = [];

  addEvent(term, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${moment(event.value).format('YYYY-MM-DD')}`);
    term= this.events.pop();
    console.log(term);
    this.router.navigate(['/search-date', term]);

  }



/*
  EnviarFecha(term)
  {
    term = this.fecha
    this.router.navigate(['/search-date', term]);
  }*/
}