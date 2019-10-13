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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  total: number;
  constructor(private actRoute: ActivatedRoute, private TrayApi: TrayServices, private enrutador: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      const termino: string = (params.termino);
      this.searchByUserAndDateRange(termino);
    });

  }
  searchByUserAndDateRange(term) {
    this.TrayApi.getByDateRangeAndUser(term).subscribe((res: {}) => {
      // console.log(res);
       this.TrayXDateXUser = res;
       this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
       this.dataSource = new MatTableDataSource<any>(this.TrayXDateXUser.bandejas);
       this.dataSource.paginator = this.paginator;
       this.error = '';
       const total = this.TrayXDateXUser.bandejas;
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