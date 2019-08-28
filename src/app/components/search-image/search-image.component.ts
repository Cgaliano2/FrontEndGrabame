import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TrayServices } from '../../Servicios/tray-services';
import { Tray } from '../shared/tray';
import {Router } from '@angular/router';


@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {
  TrayData:any=[];
  constructor(
    private trayApi:TrayServices,
    private actRoute:ActivatedRoute) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params =>{
      let termino= (params['termino']); 
      this.searchTray(termino);
    });   
    }
    searchTray(term:string){
    
      this.trayApi.SearchTray(term).subscribe((datos:{})=>{
            this.TrayData =datos;
           
      });
  
  }
 
}
