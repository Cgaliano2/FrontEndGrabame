import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TypeTrayService } from '../../../_Services/TypeTray.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-type-tray',
  templateUrl: './create-type-tray.component.html'
})
export class CreateTypeTrayComponent implements OnInit {
registerType: FormGroup;
error: any;
loading: any;
submitted = false;
AllTypes: any;
  constructor(private formBuilder: FormBuilder, private ApiService: TypeTrayService, private router: Router) { }

  ngOnInit() {
    this.registerType = this.formBuilder.group({
      tipo: ['', [ Validators.required, Validators.maxLength(1)]],
      descripcion: ['', Validators.required],
      });
    this.ApiService.getTypes().subscribe(data => {
        this.AllTypes = data;
        console.log(this.AllTypes);
})

  }

  get f() {return this.registerType.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.registerType.invalid) {
      return;
    }
    this.ApiService.createDetails(this.registerType.value).subscribe(res => {
     console.log(res);
     this.router.navigateByUrl('/home');
    },
    error => {
      console.log(error.message);
      this.error = error;
      this.loading = false;
    });
  }
}
