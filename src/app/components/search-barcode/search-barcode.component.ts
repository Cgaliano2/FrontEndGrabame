import { Component, OnInit, ViewChild } from '@angular/core';
import { TrayServices } from 'src/app/_Services/tray.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Tray } from 'src/app/models/tray';

@Component({
  selector: 'app-search-barcode',
  templateUrl: './search-barcode.component.html'
})
export class SearchBarcodeComponent implements OnInit {
  Trayxbarcode: any = [];
  displayedColumns: string[] = [];
  dataSource: any = [];
  error;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private TrayApi: TrayServices, private actRoute: ActivatedRoute, private enrutador: Router) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params => {
      const termino = (params.codigoQr);
      this.searchByBarcode(termino);
    });
  }





  searchByBarcode(codigoQr: string) {
    this.TrayApi.getByBarcode(codigoQr).subscribe((res: {}) => {
     console.log(res);
     this.Trayxbarcode = res;
     this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
     this.dataSource = new MatTableDataSource<Tray>(this.Trayxbarcode);
     this.dataSource.paginator = this.paginator;
     this.error = '';

  }, error => {
    console.log(error);
    this.Trayxbarcode = '';
    this.error = error;
  });

}
verBandejas(idx) {
this.enrutador.navigate(['/tray', idx]);
}


}
