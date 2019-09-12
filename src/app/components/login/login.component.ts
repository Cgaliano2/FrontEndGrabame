import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';
import { AuthService } from '../../_Services/auth.service';

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
    private loginS: AuthService) { }
  

  ngOnInit(){
  
  }}

