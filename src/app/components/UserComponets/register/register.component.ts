import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../_Services/authentication.service';
import { TrayServices } from '../../../_Services/tray.service';
import { UbicationService } from '../../../_Services/ubication.service';


export interface ubicacionI {
  value2: string;
  viewValue2: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Sexo: any = ['M', 'F'];
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  success = '';
  res:any;
  // Activado: Act[] = [{value: true, viewValue: 'Si'}, {value: false, viewValue: 'No'}];
  // Rol: Roles[] = [{value2: 'ADMIN_ROLE', viewValue2: 'Administrador'}, {value2: 'USER_ROLE', viewValue2: 'Usuario'} ];
  value: string;
  message: string;
  Ubicaciones: any;
  constructor(
   private formBuilder: FormBuilder,
   private router: Router,
   private Authservice: AuthenticationService,
   private TrayApi: TrayServices,
   private UbicationApi:UbicationService) {

   }

ngOnInit() {

  this.UbicationApi.getUbications2()
  .subscribe(res => {
    const sucursal = Object.values(res);
    this.Ubicaciones = sucursal[1];
    

  });

  this.registerForm = this.formBuilder.group({
    ubicacion: ['', Validators.required],
    nombre:   ['', Validators.required],
    apPat:    ['', Validators.required],
    apMat:    ['', Validators.required],
    rut:      ['', Validators.required],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    confirmpassword:['',Validators.required,{validator:this.checkPasswords}],
    sexo:     ['', Validators.required],
    telefono:  ['', [Validators.required, Validators.minLength(6)]],
    email:    ['', Validators.required],
  });
}

get f() {return this.registerForm.controls; }



onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
  }
  this.Authservice.register(this.registerForm.value)
  .subscribe(data => {
    this.res = data;
    this.message = 'Usuario Agregado con exito!';
    this.error = '';
  },
  error => {
    // console.log(error);
    this.error = error;
    this.loading = false;
  });

}


checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPass').value;

  return pass === confirmPass ? null : { notSame: true };
}


}



  /*this.submitted = true;

  if (this.registerForm.invalid) {
    return;
  }
  this.loading = true;
  this.userService.register(this.registerForm.value)
  .pipe(first())
  .subscribe(
    data => {
      this.alertService.success('registration successful', true);
      this.router.navigate(['/login']); },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });*/