import { Component, OnInit } from '@angular/core';
import { TrayServices } from '../../../Servicios/tray-services';
import {Router} from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    public router: Router
  ) { }

  ngOnInit() {

  }
  buscarFoto(termino:string){
  this.router.navigate(['/Buscar-Bandeja', termino]);
  console.log(termino);
}


}


 /*this.restApi.getImageTray(termino).subscribe((data:{})=>{
      this.imageData=data;
      console.log(this.imageData);
      
  })*/