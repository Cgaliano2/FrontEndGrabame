import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../../_Services/authentication.service';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
currentUser:User;
  constructor(
    public router: Router,
    private AuthService:AuthenticationService
  ) {

    this.AuthService.currentUser.subscribe(x => this.currentUser= x);
   }

  ngOnInit() {
  }


  logout(){
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }

}


 /*this.restApi.getImageTray(termino).subscribe((data:{})=>{
      this.imageData=data;
      console.log(this.imageData);
  })*/