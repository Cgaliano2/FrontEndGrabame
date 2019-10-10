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
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


constructor(
    private trayApi: TrayServices,
    private actRoute: ActivatedRoute,
    private enrutador: Router
    ) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params => {
      const termino: string = (params.term);
     // console.log(termino);
      this.searchByDate(termino);
    });

  }


searchByDate(term: string ) {

    this.trayApi.SearchDate(term).subscribe(datos => {
       console.log(datos);
       this.Trayxdate = datos;
       this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
       this.dataSource = new MatTableDataSource<Tray>(this.Trayxdate.bandejaDB);
       this.dataSource.paginator = this.paginator;
       this.error = '';
      }, error => {
      this.Trayxdate = '';
      this.error = (error);
      // console.log(this.error);
      });
}


verBandejas(idx) {
   this.enrutador.navigate(['/tray', idx]);
  }


}
