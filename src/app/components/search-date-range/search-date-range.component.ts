import { Component, OnInit, ViewChild } from '@angular/core';
import { TrayServices } from '../../_Services/tray.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Tray } from '../../models/tray';

@Component({
  selector: 'app-search-date-range',
  templateUrl: './search-date-range.component.html',
  styleUrls: ['./search-date-range.component.css']
})
export class SearchDateRangeComponent implements OnInit {
  Trayxdaterange: any = [];
  displayedColumns: string[] = [];
  dataSource: any = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private TrayApi:TrayServices, private actRoute:ActivatedRoute) { }

  ngOnInit() {
  }


  searchByDateRange( term: string )
  {
   this.TrayApi.getByDateRange(term).subscribe((data: {}) => {
    this.Trayxdaterange = data;
    this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso'];
    this.dataSource = new MatTableDataSource<Tray>(this.Trayxdaterange);
    this.dataSource.paginator = this.paginator;
   });

}
}