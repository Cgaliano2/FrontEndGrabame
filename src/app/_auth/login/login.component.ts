import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../_Services/alert.service';
import { AuthenticationService } from '../../_Services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private AuthService: AuthenticationService,
    private alertService: AlertService) {
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      rut: ['', Validators.required],
      password: ['', Validators.required]
    });
   // obtener el retorno de los parametros de la ruta o por defecto '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

   // reset login status
    this.AuthService.logout();

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.AuthService.login(this.f.rut.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
      this.router.navigate([this.returnUrl]);
      },error =>{
        this.error = error;
        this.loading =  false;
      });

  }

}
/*
onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.AuthService.login(this.f.rut.value, this.f.password.value).pipe(first()).subscribe(data => {
      this.router.navigate([this.returnUrl]);
      if (data.success === false) {
        this.error = data.message;
        this.loading = false;
      }

      });

  }

this.Authserv.login(this.loginForm.value).subscribe( success =>{
  console.log(success.valueOf);
  if(success){
    this.router.navigate(['/home']);
  }
});*/
