import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../_Services/user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  userByrut: any = [];
  displayedColumns: string[] = [];
  dataSource: any = [];
  // update
  updateId: any;
  // user
  userDelete: any;
  error: any;

  constructor(private actRoute:ActivatedRoute,  private router:Router, private userApi:UserService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params  =>  {
      // console.log(params);
      const rut = (params ['rut']);
      // console.log(rut);
      this.searchUser(rut);
    });

  }

  searchUser(rut) {
    return this.userApi.getUserByRut(rut)
    .subscribe( data => {
         // console.log(data);
          this.userByrut = data;
          this.displayedColumns = ['rut', 'nombre', 'apellidos', 'ubicacion', 'acciones'];
          this.dataSource = new MatTableDataSource<any>(this.userByrut.usuarioEncontrado);
          this.error = this.userByrut.message;
    },error => {
      this.error = error;
    });
  }

  sendID(id: string) {
    this.updateId = id;
    // console.log(id);
    this.router.navigate(['update-user/', this.updateId]);
  }

  deleteUser(id: number) {
    if(window.confirm('estas seguro de eliminar?')){
      this.userApi.deleteUser(id).subscribe(data => {
      this.userDelete = data;
      this.error = this.userDelete.message;

      // console.log(data);
    });
  }
  }
}
