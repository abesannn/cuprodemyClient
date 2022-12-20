import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/User.service';
import { IPage, IUser } from 'src/app/model/generic';

@Component({
  selector: 'app-UserPlistAdmin',
  templateUrl: './UserPlistAdmin.component.html',
  styleUrls: ['./UserPlistAdmin.component.css']
})
export class UserPlistAdminComponent implements OnInit {
  responseFromServer: IPage<IUser>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oUserService: UserService
  ) {
    this.getPage();
  }

  ngOnInit() {

  }

  getPage() {
    this.oUserService.getUserPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IUser>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
      
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
    this.getPage();
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
