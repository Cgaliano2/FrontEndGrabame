import { NgModule } from '@angular/core';
//Materials
import {
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule } from '@angular/material';



const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule


];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
