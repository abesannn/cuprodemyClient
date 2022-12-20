import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/model/generic';

@Component({
  selector: 'app-user-view-admin',
  templateUrl: './user-view-admin.component.html',
  styleUrls: ['./user-view-admin.component.css']
})
export class UserViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}
