import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../_Services/user.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html'
})
export class SearchNameComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any = [];
  UserXName;
  constructor(private actRoute:ActivatedRoute, private UserApi:UserService) { }

  ngOnInit() {

    this.actRoute.params
    .subscribe(params => {
      const FullName = params.name;
      this.getUser(FullName);
    });
  }

  getUser(fullname: string) {
    this.UserApi.getUserByName(fullname)
    .subscribe(data => {
      console.log(data);
      this.UserXName = data;
      this.displayedColumns = ['rut', 'nombre', 'apellidos', 'ubicacion', 'acciones'];
      this.dataSource = new MatTableDataSource<any>(this.UserXName.usuario);
    });

  }

}
