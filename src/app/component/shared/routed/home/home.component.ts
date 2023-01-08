import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private oAuthService: SessionService,

  ) { 
    oAuthService.reload();
  }

  ngOnInit() {
    this.oAuthService.reload();
  }


}
