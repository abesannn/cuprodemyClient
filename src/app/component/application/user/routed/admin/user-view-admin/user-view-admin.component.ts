import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/generic';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-user-view-admin',
  templateUrl: './user-view-admin.component.html',
  styleUrls: ['./user-view-admin.component.css']
})
export class UserViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,
  ) {
    oAuthService.reload();
    oAuthService.checkSession().subscribe({
      next: (data: any) => {

      },
      error:(error:any) => {
        this.oRouter.navigate(['/login']);
      }
    })

    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}
