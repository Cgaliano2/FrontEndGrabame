import { Component, OnInit, ViewChild } from '@angular/core';
import { TrayServices } from '../../../_Services/tray.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Tray } from '../../../models/tray';

@Component({
  selector: 'app-search-date-range',
  templateUrl: './search-date-range.component.html'
})
export class SearchDateRangeComponent implements OnInit {
  Trayxdaterange: any = [];
  displayedColumns: string[] = [];
  dataSource: any = [];
  error;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  total: number;
  constructor(private TrayApi: TrayServices, private actRoute: ActivatedRoute, private enrutador: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      console.log(params);
      const termino: string = (params.term);
      // console.log(termino);
      this.searchByDateRange(termino);
    });

  }


  searchByDateRange(term) {
   this.TrayApi.getByDateRange(term).subscribe((res: {}) => {
      console.log(res);
      this.Trayxdaterange = res;
      this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
      this.dataSource = new MatTableDataSource<Tray>(this.Trayxdaterange.bandejaDB);
      this.dataSource.paginator = this.paginator;
      this.error = '';
      const total = this.Trayxdaterange.bandejaDB;
      if (!total) {
       this.total = 0;
     } else {
     const index = this.getAllIndexes(total);
     this.total = index.length;
    }


    }, error => {
      this.Trayxdaterange = '';
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
