import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/generic';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean = false;
  isSupAdmin: boolean = false;
  loggedUser: string = '';


  constructor(
    private oSessionService: SessionService,

  ) {
    this.oSessionService.subject.subscribe({
      next: () => {
        this.oSessionService.checkSession().subscribe({
          next: (data: IUser) => {
            this.isLogged = true;
            this.loggedUser = data.dni;
            this.isSupAdmin = data.tipousuario;
          },
          error: (error: any) => {
            this.isLogged = false;
            this.loggedUser = '';
            this.isSupAdmin = false;
           }
        })
      },
      error: (error: any) => { }
    });
  }

  ngOnInit(): void {
  }

}
