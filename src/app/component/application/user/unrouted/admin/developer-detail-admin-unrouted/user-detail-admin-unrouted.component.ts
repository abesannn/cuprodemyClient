import { Component, Input, OnInit } from '@angular/core';
import { IPage, IUser } from 'src/app/model/generic';
import { UserService } from 'src/app/service/User.service';

@Component({
  selector: 'app-user-detail-admin-unrouted',
  templateUrl: './user-detail-admin-unrouted.component.html',
  styleUrls: ['./user-detail-admin-unrouted.component.css']
})
export class UserDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oUser: IUser;

  constructor(
    private oUserService: UserService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
