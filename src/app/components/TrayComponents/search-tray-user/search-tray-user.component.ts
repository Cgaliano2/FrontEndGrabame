import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrayServices } from '../../../_Services/tray.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Tray } from 'src/app/models/tray';

@Component({
  selector: 'app-search-tray-user',
  templateUrl: './search-tray-user.component.html'
})
export class SearchTrayUserComponent implements OnInit {
error;
TrayXUser:any = []; 
displayedColumns: string[] = [];
dataSource: any = [];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private actRoute:ActivatedRoute, private ApiService:TrayServices , private enrutador: Router) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params => {
      const termino: string = (params['rut']);
      this.getByUser(termino);
    });
  }


  getByUser(rut: string) {
    this.ApiService.getByUser(rut).subscribe(datos => {
      console.log(datos);
      this.TrayXUser = datos;
      this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso','nombre'];
      this.dataSource = new MatTableDataSource<any>(this.TrayXUser.bandejas);
      this.dataSource.paginator = this.paginator;
      this.error='';

      
     }, error => {
       this.TrayXUser = '';
       this.error = error;
       
     });

  }

  
verBandejas(idx) {
  this.enrutador.navigate(['/tray', idx]);
 }
}
