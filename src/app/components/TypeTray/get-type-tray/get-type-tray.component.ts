import { Component, OnInit, ViewChild } from '@angular/core';
import { TypeTrayService } from '../../../_Services/TypeTray.service';
import { TypeTray } from 'src/app/models/typeTray';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-get-type-tray',
  templateUrl: './get-type-tray.component.html'
})
export class GetTypeTrayComponent implements OnInit {
AllTypes;
displayedColumns: string[] = [];
dataSource: any = [];
error;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private ApiService: TypeTrayService) { }

  ngOnInit() {

    this.getTypes();
  }


  getTypes() {
    this.ApiService.getTypes()
    .subscribe(data => {
      console.log(data);
      this.AllTypes = data;
      console.log(this.AllTypes);
      this.displayedColumns = ['tipo', 'detalles', 'acciones'];
      this.dataSource = new MatTableDataSource<TypeTray>(this.AllTypes.detalleDB);
      this.dataSource.paginator = this.paginator;
      this.error = '';
});
}

  deleteType(tipo: string) {
    if (window.confirm('¿Elimina el tipo de bandeja?')) {
   this.ApiService.deleteTypes(tipo)
   .subscribe(data => {
     location.reload(true);
   });
  }
  }
}
