import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrayServices } from '../../_Services/tray-services';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Tray } from '../../models/tray';



@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.css']
})
export class TrayComponent implements OnInit {
    Tray: any = [];
    displayedColumns: string[] = [];
    dataSource: any = [];
    TrayNumber:any=[];
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
      const idex:string = (params ['id'] );
      this.showOneTray(idex);
     
    
    });
}


  /* 
   ngOINIT
  this.actRoute.params.subscribe(params => {
      let idex = (params ['id'] );
      this.showTray(idex);
    });*/

    showOneTray(term: string ) {
      this.trayApi.SearchTray(term).subscribe((datos: { }) => {
            this.Tray = datos;
            this.TrayNumber = this.Tray.length;

            console.log(this.Tray);
      });
  }
}