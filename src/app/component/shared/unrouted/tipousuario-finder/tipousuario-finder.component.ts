import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic';
import { ITipousuario } from 'src/app/model/tipo-usuario.interface';
import { IUser } from 'src/app/model/user-interface';
import { UserService } from 'src/app/service/User.service';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-finder',
  templateUrl: './tipousuario-finder.component.html',
  styleUrls: ['./tipousuario-finder.component.css']
})
export class TipousuarioFinderComponent implements OnInit {

  @Output() idSeleccionado = new EventEmitter<number>();
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IUser>;
  //
  private pListContent!: ITipousuario[];
    private pagesCount!: number;
    private numberPage: number = 0;
    sortField: string = "";
    sortDirection: string = "";
    private pageRegister: number = 5;
    private termino: string = "";
    id_Tipousuario: number = 0;

  constructor(
    private oUserService: UserService,
    private oAuthService: SessionService,
    private oRouter: Router,
    private oTipousuarioService: TipousuarioService,
      private oSessionService: SessionService
    
  ) {
    oAuthService.checkSession().subscribe({
        next: (data: any) => {
        this.getPage();
      },
      error:(error:any) => {
        this.oRouter.navigate(['/login']);
      }
    })
  }

  ngOnInit() {

  }

  getPage() {
    this.oTipousuarioService.getTipousuarioPlist(this.numberPage, this.pageRegister, this.termino, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp : IPage<ITipousuario>) =>{
        this.pListContent = resp.content;
        this.pagesCount = resp.totalPages;
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  }
  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): ITipousuario[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }

  filterByTipousuario(id: number): void {
    this.id_Tipousuario = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionTipousuario(id: number): void {
    this.closeEvent.emit(id);
  }
  setOrder(order: string): void {
      this.sortField = order;
      if (this.sortDirection == "asc") {
        this.sortDirection = "desc";
      } else {
        this.sortDirection = "asc";
      }
      this.getPage();
    }

}
   


