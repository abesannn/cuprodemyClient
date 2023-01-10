import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoService } from 'src/app/service/crypto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';
import { IUser, IUserBean, IUserBean2Form } from 'src/app/model/user-interface';
import { ParseSourceFile } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  strOperation: string = "login"
  UserBean: IUserBean;
  UserBeanForm: IUserBean2Form;
  formularioLogin: FormGroup<IUserBean2Form>;
  lengthNickname: number = 9;
  minLengthPass: number = 5;

  constructor(
    private oRouter: Router,
    private oSessionService: SessionService,
    private oCryptoService: CryptoService,
    public oMetadataService: MetadataService,
    private formularioLoginBuilder: FormBuilder
  ) {
    oSessionService.reload();
    oSessionService.checkSession().subscribe({
      next: (data: any) => {
        // ok
      },
      error: (error: any) => {
        this.oRouter.navigate(['/login']);
      }
    })
    this.UserBean = {} as IUserBean;
    this.UserBeanForm = {} as IUserBean2Form;
    this.formularioLogin = {} as FormGroup<IUserBean2Form>;
  }

  ngOnInit() {
    this.formularioLogin = <FormGroup>this.formularioLoginBuilder.group({
      nickname: ['', [Validators.required, Validators.minLength(this.lengthNickname), Validators.maxLength(this.lengthNickname), Validators.pattern('([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])')]],
      pass: ['', [Validators.minLength(this.minLengthPass)]]
    });
  }
  onSubmit() {
    this.UserBean = {
      nickname: this.formularioLogin.value.nickname as string,
      pass: this.oCryptoService.getSHA256(this.formularioLogin.value.pass!) as string
    }
    if (this.formularioLogin.valid) {
      this.oSessionService.login(this.UserBean).subscribe({
        next: (data: IUser) => {
          localStorage.setItem('User', JSON.stringify(data));
          this.oRouter.navigate(['']);
        },
        error: (error: any) => {
          this.oRouter.navigate(['/login']);
        }
      })
    }
  }

  loginAdmin() {
    let adminBean: IUserBean = {
      nickname : 'admin',
      pass : '4298f843f830fb3cc13ecdfe1b2cf10f51f929df056d644d1bca73228c5e8f64'
    }
    this.oSessionService.login(adminBean).subscribe({
      next: (data: IUser) => {
        localStorage.setItem('User', JSON.stringify(data));
        this.oRouter.navigate(['']);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  loginUser() {
    this.formularioLogin.setValue({
      nickname: "user",
      pass: "useruser"
    })
  }

}
