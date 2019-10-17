import { Component, OnInit, ViewChild } from '@angular/core';
import { UbicationService } from '../../../_Services/ubication.service';
import { Ubication } from '../../../models/ubication';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ubication-list',
  templateUrl: './ubication-list.component.html',
  styleUrls: ['./ubication-list.component.css']
})
export class UbicationListComponent implements OnInit {
  AllUbications;
  displayedColumns: string[] = [];
  dataSource: any = [];
  error;
 
@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private ubicationApi:UbicationService, private router: Router) { }

  ngOnInit() {
   this.getUbication()
  }
  getUbication() {
    this.ubicationApi.getUbications()
    .subscribe(data => {
      this.AllUbications = data;
      this.displayedColumns = ['lugar','acciones'];
      this.dataSource = new MatTableDataSource<Ubication>(this.AllUbications.ubicaciones);
      this.dataSource.paginator = this.paginator;
      this.error = '';
});
}

  deleteUbication(id: number) {
    if (window.confirm('¿Elimina el registro de sucursal?')) {
   this.ubicationApi.deleteUbication(id)
   .subscribe(data => {
     this.router.navigate(['/ubication-list']);
   });
  }
  }

  sendID(idx:number) {
    // console.log(lugar);
    this.router.navigate(['/edit-ubication', idx]);
 
   }
}
