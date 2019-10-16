import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrayServices } from '../../../_Services/tray.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Tray } from 'src/app/models/tray';

@Component({
  selector: 'app-tray-date-range-user',
  templateUrl: './tray-date-range-user.component.html'
})
export class TrayDateRangeUserComponent implements OnInit {
  TrayXDateXUser: any;
  displayedColumns: string[] = [];
  dataSource: any = [];
  error;
  // paginator
  length = 100;
  pageSize = 10;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  total: number;
  constructor(private actRoute: ActivatedRoute, private TrayApi: TrayServices, private enrutador: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      const termino: string = (params.termino);
      this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
      this.searchByUserAndDateRange(termino);
    });

  }
  searchByUserAndDateRange(term) {
    this.TrayApi.getByDateRangeAndUser(term).subscribe(datos => {
     const data = datos;
     this.TrayXDateXUser = data.bandejas;
     this.dataSource = new MatTableDataSource(this.TrayXDateXUser);
     this.dataSource.paginator = this.paginator;
     this.error = '';
     const total = this.TrayXDateXUser;
     if (!total) {
         this.total = 0;
        } else {
     const index = this.getAllIndexes(total);
     this.total = index.length;
}
}, error => {
 this.TrayXDateXUser = '';
 this.error = (error);
 // console.log(this.error);
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
