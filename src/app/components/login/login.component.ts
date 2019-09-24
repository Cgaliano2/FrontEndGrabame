import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../models/user';
import { AuthService } from '../../_Services/auth.service';
import { AlertService } from '../../_Services/alert.service';


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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private Authserv: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      rut: ['', Validators.required],
      password: ['', Validators.required]
    });

   // reset login status
    this.Authserv.logout();
     // obtener el retorno de los parametros de la ruta o por defecto '/'
    this.returnUrl = this.actRoute.snapshot.queryParams['/home'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.Authserv.login(this.loginForm.value).subscribe( res =>{
      this.router.navigate(['/home']);
    });
    /*this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.loginS.login(this.f.rut.value, this.f.password.value)
.pipe(first())
.subscribe(
  data => {
    this.router.navigate([this.returnUrl]);

  },
  error => {
    this.alertService.error(error);
    this.loading = false;
  });*/

  }

  
}

