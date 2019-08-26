import { Component, OnInit } from '@angular/core';
import { TrayServices } from '../../Servicios/tray-services';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-tray-search',
  templateUrl: './tray-search.component.html',
  styleUrls: ['./tray-search.component.css']
})

export class TraySearchComponent implements OnInit {
_id = this.actRoute.snapshot.params['_id'];
trayData:any=[];
  constructor(
    public restApi: TrayServices,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    
    this.restApi.getOneTray(this._id).subscribe((data:{})=>
    {

      this.trayData = data;
      console.log('data')
    })
  }
  
}