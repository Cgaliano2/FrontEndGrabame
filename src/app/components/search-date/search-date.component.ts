import { Component, OnInit,ViewChild } from '@angular/core';
import { TrayServices } from '../../Servicios/tray-services';
import {ActivatedRoute} from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Tray } from '../../models/tray';
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
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

constructor(
    private trayApi: TrayServices,
    private actRoute: ActivatedRoute,
    private enrutador:Router
    ) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params => {
      const termino:string = (params['term']);
      console.log(termino);
      this.searchByDate(termino);
    });

  }


searchByDate(term: string ) {
    this.trayApi.SearchDate(term).subscribe((datos: { }) => {
          this.Trayxdate = datos;
          console.log(this.Trayxdate)
          this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
          this.dataSource = new MatTableDataSource<Tray>(this.Trayxdate);
          console.log(this.dataSource)
          this.dataSource.paginator = this.paginator;
    });
}

verBandejas(idx)
  { 
   this.enrutador.navigate(['/tray', idx]);
  }


}
