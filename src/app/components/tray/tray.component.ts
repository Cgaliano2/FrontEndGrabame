import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrayServices } from '../../Servicios/tray-services';



@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
})
export class TrayComponent implements OnInit {
  Tray: any = [];

  constructor(private actRoute: ActivatedRoute,
              private trayApi: TrayServices) {
    /*this.actRoute.params.subscribe(params => {
        console.log(params);

        this.Tray = this.trayApi.SearchTray(params ['id'] );
    });*/
  }

  ngOnInit() {
      this.actRoute.params.subscribe(params => {
      let idex = (params ['id'] );
      this.showTray(idex);
    });
  }

  showTray(idx:string)
  {
    this.trayApi.SearchTray(idx).subscribe((datos: {})=>{
      this.Tray = datos;
    });
  }

}
