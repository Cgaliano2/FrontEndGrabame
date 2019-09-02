import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TrayServices } from '../../Servicios/tray-services';


@Component({
  selector: 'app-search-image',
  templateUrl: './search-tray.component.html',
  
})
export class SearchImageComponent implements OnInit {
  TrayData: any = [];
  constructor(
    private trayApi: TrayServices,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params => {
      const termino:string = (params['termino']);
      this.searchTray(termino);
    });
    }

    
    searchTray(term: string ) {
      this.trayApi.SearchTray(term).subscribe((datos: { }) => {
            this.TrayData = datos;
      });
  }
}
