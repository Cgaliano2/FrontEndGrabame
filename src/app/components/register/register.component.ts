import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from 'src/app/models/user';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  usuario: User;
  constructor() { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
ngOnInit()
{
  this.usuario = new User();

}
  matcher = new MyErrorStateMatcher();

onSubmit()
{
  console.log('Formsending');
  console.log(this.usuario);
}

}
