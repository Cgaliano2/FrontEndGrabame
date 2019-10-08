import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
user:any;
  constructor(private actRoute:ActivatedRoute, private UserApi: UserService) { }

  ngOnInit() {

    this.actRoute.params.subscribe(params =>{
      const rut = (params['rut']);
    

      console.log(params);
    });
  }

}
