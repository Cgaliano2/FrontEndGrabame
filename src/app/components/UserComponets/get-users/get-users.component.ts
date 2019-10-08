import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from '../../../_Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-users',
  template: `<div class="container main-container">
  <mat-accordion>
  <mat-expansion-panel>
      <mat-expansion-panel-header>
          <mat-panel-title>
              Buscar Usuario
          </mat-panel-title>
          <mat-panel-description>
              digite el rut del usuario
          </mat-panel-description>
      </mat-expansion-panel-header>
      <form class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput placeholder="rut" #rut required="true">
      </mat-form-field>
      <button mat-raised-button color="accent" (click)="obtainRut(rut.value)">Buscar</button>
    </form>
  </mat-expansion-panel>
  <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">
      <mat-expansion-panel-header>
          <mat-panel-title>
              Busqueda por rango de fechas
          </mat-panel-title>
          <mat-panel-description>
              Selecciona un Rango de Fechas
          </mat-panel-description>
      </mat-expansion-panel-header>
      <input id="rangeDate" name="rangeDate" #input="ngModel" [(ngModel)]="!rangeDate" type="text" bsDaterangepicker class="form-control" />
      <button mat-raised-button color="accent" (click)="obtainDate(input.viewModel)">Buscar</button>
  </mat-expansion-panel>
  <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">
  <mat-expansion-panel-header>
      <mat-panel-title>
          Busqueda por codigo QR
      </mat-panel-title>
      <mat-panel-description>
          Escribe el codigo 
      </mat-panel-description>
  </mat-expansion-panel-header>
  <form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="CodigoQR" #codigoqr required="true">
  </mat-form-field>
  <button mat-raised-button color="accent" (click)="obtainBarCode(codigoqr.value)">Buscar</button>
</form>
</mat-expansion-panel>

</mat-accordion>
<router-outlet></router-outlet>
<div>`
})
export class GetUsersComponent implements OnInit {
  users: any = [];
  displayedColumns: string[] = [];
  dataSource: any = [];
  //buscar x Rut
  rut:any;
  constructor(
    private UserApi: UserService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {

   this.getUser();
  }


  getUser() {
    return this.UserApi.getUsers()
    .subscribe( data => {
          console.log(data);
          this.users = data;
          this.displayedColumns = ['detalles', 'codigoqr', 'fechaIngreso', 'ubicacion'];
          this.dataSource = new MatTableDataSource<any>(this.users.cantidad);
          this.dataSource.paginator = this.paginator;


    });
  }

  obtainRut(rut:string){
    this.rut=rut;
    this.router.navigate(['search-user/', this.rut], {relativeTo:this.actRoute});

  }
}
