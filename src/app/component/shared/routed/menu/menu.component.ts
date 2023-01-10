import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user-interface';

import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean = false;
  usuarioSesionTipoUsuario: number;

  loggedUser: string = '';


  constructor(
    private oSessionService: SessionService,

  ) {
    this.oSessionService.subject.subscribe({
      next: () => {
        this.oSessionService.checkSession().subscribe({
          next: (data: IUser) => {
            this.isLogged = true;
            this.loggedUser = data.nickname;
            this.usuarioSesionTipoUsuario = data.tipousuario.id;

          },
          error: (error: any) => {
            this.isLogged = false;
            this.loggedUser = '';
            
           }
        })
      },
      error: (error: any) => { }
    });
  }

  ngOnInit(): void {
  }

}
