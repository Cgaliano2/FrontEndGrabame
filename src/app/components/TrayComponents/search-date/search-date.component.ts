import { Component, OnInit, ViewChild } from '@angular/core';
import { TrayServices } from '../../../_Services/tray.service';
import {ActivatedRoute} from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Tray } from '../../../models/tray';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-date',
  templateUrl: './search-date.component.html',
  styleUrls: ['./search-date.component.css']
})
export class SearchDateComponent implements OnInit {
  Trayxdate: any = [];
  displayedColumns: string[] = [];
  dataSource: any = [];
  error;
  success;
  total:any;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


constructor(
    private trayApi: TrayServices,
    private actRoute: ActivatedRoute,
    private enrutador: Router
    ) { }

  ngOnInit() {

    this.actRoute.params
      .subscribe(params => {
      const termino: string = (params.term);
      this.searchByDate(termino);
    });

  }


searchByDate(term: string ) {

    this.trayApi.SearchDate(term)
    .subscribe(data => {
       console.log(data);
       this.Trayxdate = data;
       this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
       this.dataSource = new MatTableDataSource<Tray>(this.Trayxdate.bandejaDB);
       this.dataSource.paginator = this.paginator;
       this.error = this.Trayxdate.message;
       const total = this.Trayxdate.bandejaDB;
       if(!total) {
         this.total = 0;
       } else {
       const index = this.getAllIndexes(total);
       this.total = index.length;
      }

    });
}


verBandejas(idx) {
   this.enrutador.navigate(['/tray', idx]);
  }

  getAllIndexes(arr) {
    let indexes = [], i: number;
    for (i = 0; i < arr.length; i++) {
          indexes.push(i);
  }
    return indexes;
  }

}
