import { Component, OnInit } from '@angular/core';
import { TrayServices } from '../../Servicios/tray-services';
import { Router } from '@angular/router';






@Component({
  selector: 'app-tray-list',
  templateUrl: './tray-list.component.html',
  styleUrls: ['./tray-list.component.css']
})
export class TrayListComponent implements OnInit {
tray: any = [];
images: any = [];

  constructor(
    private trayApi: TrayServices,
    private router: Router
  ) {}
  ngOnInit() {
  this.LoadTray();

  }
  //Cargar 
  LoadTray() {
    return this.trayApi.getTray()
    .subscribe( data => {
          this.tray = data;
          //console.log(this.tray);
    });
  }

verBandejas(idx)
{

 this.router.navigate(['/tray', idx]);
}

}