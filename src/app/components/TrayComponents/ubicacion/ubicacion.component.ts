import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrayServices } from '../../../_Services/tray.service';
import { Ubication } from '../../../models/ubication';





@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  ubicacion:any =[];

  constructor(private actRoute: ActivatedRoute, private trayApi: TrayServices) { }

  ngOnInit() {
    this.trayApi.getTray()
    .subscribe( data => {
          this.ubicacion = data;
          console.log(this.ubicacion);
    });
    
   
  }

 /* getAllUbication()
  {
    return this.trayApi.getTray()
    .subscribe( data => {
          this.ubicacion = data;
          console.log(this.ubicacion);
    });
  }*/
 /*getUbication(ubicacion: string)
 {
  this.trayApi.SearchTray(ubicacion).subscribe((datos: { }) => {
    this.ubicacion = datos;
    console.log(this.ubicacion);
});

 }*/
}
