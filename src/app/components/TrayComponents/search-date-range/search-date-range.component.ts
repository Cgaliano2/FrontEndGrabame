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
  constructor(private TrayApi:TrayServices, private actRoute:ActivatedRoute, private enrutador:Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      console.log(params);
      const termino: string = (params['term']);
      // console.log(termino);
      this.searchByDateRange(termino);
    });

  }


  searchByDateRange(term) {
   this.TrayApi.getByDateRange(term).subscribe((res: {}) => {
     // console.log(res);
      this.Trayxdaterange = res;
      this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
      this.dataSource = new MatTableDataSource<Tray>(this.Trayxdaterange.bandejaDB);
      this.dataSource.paginator = this.paginator;
      this.error = '';

    }, error => {
      this.Trayxdaterange = '';
      this.error = (error);
      //console.log(this.error);
    });

}
verBandejas(idx) {
  this.enrutador.navigate(['/tray', idx]);
 }

}