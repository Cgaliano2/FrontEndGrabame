import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrayServices } from '../../Servicios/tray-services';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Tray } from '../shared/tray';



@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
})
export class TrayComponent implements OnInit {
  Tray: any = [];
 // displayedColumns: string[] = [];
  //dataSource: any = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
    this.trayApi.SearchTray(idx).subscribe((datos: {}) => {
      this.Tray = datos;
      console.log(this.Tray);

    });
  }

}
