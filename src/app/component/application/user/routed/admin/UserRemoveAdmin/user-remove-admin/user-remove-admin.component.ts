import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/User.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-user-remove-admin',
  templateUrl: './user-remove-admin.component.html',
  styleUrls: ['./user-remove-admin.component.css']
})
export class UserRemoveAdminComponent implements OnInit {

 
  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oUserService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "user " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}
