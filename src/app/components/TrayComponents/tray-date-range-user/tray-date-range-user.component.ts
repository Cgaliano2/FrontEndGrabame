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
     }, error => {
       this.TrayXDateXUser = '';
       this.error = (error);
       // console.log(this.error);
     });
 }
 verBandejas(idx) {
  this.enrutador.navigate(['/tray', idx]);
 }
}
