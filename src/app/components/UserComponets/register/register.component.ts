import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../_Services/authentication.service';
import { TrayServices } from '../../../_Services/tray.service';


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
  Ubicaciones: any = [];
  // Activado: Act[] = [{value: true, viewValue: 'Si'}, {value: false, viewValue: 'No'}];
  // Rol: Roles[] = [{value2: 'ADMIN_ROLE', viewValue2: 'Administrador'}, {value2: 'USER_ROLE', viewValue2: 'Usuario'} ];
  value: string;
  constructor(
   private formBuilder: FormBuilder,
   private router: Router,
   private Authservice: AuthenticationService,
   private TrayApi: TrayServices) {

   }

ngOnInit() {

  this.TrayApi.getUbication().subscribe(res =>{

    this.Ubicaciones = res;

    console.log(res);
  });
  this.registerForm = this.formBuilder.group({
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

get f() {return this.registerForm.controls; }


onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
  }
  console.log(this.registerForm.value);
  this.Authservice.register(this.registerForm.value).subscribe(res => {
    //console.log(res);
    this.router.navigateByUrl('/home');
  },
  error => {
    //console.log(error);
    this.error = (error.message);
    this.loading = false;
  });

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