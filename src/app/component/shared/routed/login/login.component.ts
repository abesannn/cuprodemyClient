import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/generic';
import { UntypedFormGroup, UntypedFormBuilder} from '@angular/forms';
import { CryptoService } from 'src/app/service/crypto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  strOperation: string = "login"
  formularioLogin: UntypedFormGroup;
  oUserSession: IUser;

  constructor(
    private FormBuilder: UntypedFormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oCryptoService: CryptoService, 
    public oMetadataService: MetadataService,
    private oAuthService: SessionService

  ) {
    oAuthService.reload();
    oAuthService.checkSession().subscribe({
      next: (data: any) => {
        // ok
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }
    })

    if (oRoute.snapshot.data['message']) {
      this.oUserSession = this.oRoute.snapshot.data['message'];
      localStorage.setItem("user", JSON.stringify(oRoute.snapshot.data['message']));
      oRouter.navigate(['/home']);
    } else {
      localStorage.clear();
    }

    this.formularioLogin = <UntypedFormGroup>this.FormBuilder.group({
      nickname: ['', [Validators.required, Validators.minLength(5)]],
      pass: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  ngOnInit(): void { }

  onSubmit() {
    const loginData = { nickname: this.formularioLogin.get('nickname')!.value, pass: this.oCryptoService.getSHA256(this.formularioLogin.get('pass')!.value) };
    console.log("login:onSubmit: ", loginData);
    this.oAuthService.login(JSON.stringify(loginData)).subscribe(data => {
      localStorage.setItem("player", JSON.stringify(data.toString()));
      if (data != null) {
        this.oRouter.navigate(['/','home']);
      } else {
        localStorage.clear();
      }
    });
    return false;
  }

  loginAdmin() {
    this.formularioLogin.setValue({
      nickname: "admin",
      pass: "wildcart"
    })
  }

  loginUser() {
    this.formularioLogin.setValue({
      nickname: "user",
      pass: "useruser"
    })
  }

}
