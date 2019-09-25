import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../_Services/alert.service';
import { AuthenticationService } from '../../_Services/authentication.service';


export interface Roles {
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
  //Activado: Act[] = [{value: true, viewValue: 'Si'}, {value: false, viewValue: 'No'}];
  //Rol: Roles[] = [{value2: 'ADMIN_ROLE', viewValue2: 'Administrador'}, {value2: 'USER_ROLE', viewValue2: 'Usuario'} ];
  value: string;
  constructor(
   private formBuilder: FormBuilder,
   private router: Router,
   private Authservice: AuthenticationService,
   private aleserv: AlertService) { }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
  nombre:   ['', Validators.required],
  apPat:    ['', Validators.required],
  apMat:    ['', Validators.required],
  rut:      ['', Validators.required],
  password: ['', [ Validators.required, Validators.minLength(6)]],
  sexo:     ['', Validators.required],
  telefono:  ['', Validators.required],
  email:    ['', Validators.required],
  ubicacion: ['', Validators.required],
  
  });
}

get f() {return this.registerForm.controls; }

onSubmit() {

  this.submitted = true;
  if(this.registerForm.invalid) {
    return;
  }

  this.Authservice.register(this.registerForm.value).subscribe(res =>{
    this.aleserv.success('Registration Successful', true);
    this.router.navigateByUrl('/login');
  },
  error =>{
    this.aleserv.error(error);
    this.loading = false;
  });

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
}

}
