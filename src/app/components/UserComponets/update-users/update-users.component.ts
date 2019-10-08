import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_Services/user.service';
import { TrayServices } from '../../../_Services/tray.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
UpdateForm: FormGroup;
Ubicaciones: any;
UserXRut: any;
Rut: any;
user: any;
error:any;
  constructor(private actRoute: ActivatedRoute,
              private UserApi: UserService,
              private router: Router,
              private TrayApi: TrayServices,
              private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    // formulario

   // obtener rut
    this.actRoute.params.subscribe(params => {
      // console.log(params);
     this.Rut = (params.id);
      // console.log(this.Rut);
     this.searchUser(this.Rut);

      });
// obtener ubicaciones
    this.TrayApi.getUbication().subscribe(res => {
        this.Ubicaciones = res.ubicaciones;
        // console.log(this.Ubicaciones);
      });
    this.UpdateForm = this.formBuilder.group({
        nombre:   ['', Validators.required],
        apPat:    ['', Validators.required],
        apMat:    ['', Validators.required],
        rut:      ['', Validators.required],
        password: ['', [ Validators.required, Validators.minLength(6)]],
        sexo:     ['', Validators.required],
        telefono:  ['', [Validators.required, Validators.minLength(6)]],
        email:    ['', Validators.required],
        ubicacion: ['', Validators.required],
        });
  }


  get f() {return this.UpdateForm.controls; }

  searchUser(rut) {
    return this.UserApi.getUserByRut(rut)
    .subscribe( data => {
        // console.log(data);
        this.UserXRut = data;
        this.user = this.UserXRut;


    });
  }
  updateUser() {
    if (window.confirm('Confirma los cambios')) {
      this.UserApi.updateUser(this.Rut, this.UserXRut).subscribe(data => {
    this.router.navigate(['get-users']);
      }, error => {

        this.error = error;
      });

    }

  }
}
