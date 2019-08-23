import { Component, OnInit } from '@angular/core';
import { TrayServices } from '../../Servicios/tray-services';
import { toArray } from 'rxjs/operators';
import { Tray } from '../shared/tray';
@Component({
  selector: 'app-tray-list',
  templateUrl: './tray-list.component.html',
  styleUrls: ['./tray-list.component.css']
})
export class TrayListComponent implements OnInit {
tray: any = [];
  constructor(
    private trayApi: TrayServices
  ) {}
  ngOnInit() {
  this.LoadTray();
  }
  LoadTray() {
    return this.trayApi.getTray()
    .subscribe( data => {
          this.tray = data;
          console.log(this.tray);
    });
  }
  }




