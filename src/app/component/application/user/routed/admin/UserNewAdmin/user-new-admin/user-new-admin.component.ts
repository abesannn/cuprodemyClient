import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITipousuario } from 'src/app/model/tipo-usuario.interface';
import { IUser, IUser2Form, IUser2Send } from 'src/app/model/user-interface';

import { UserService } from 'src/app/service/User.service';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';


declare let bootstrap: any;
@Component({
  selector: 'app-user-new-admin',
  templateUrl: './user-new-admin.component.html',
  styleUrls: ['./user-new-admin.component.css']
})
export class UserNewAdminComponent implements OnInit {


  id: number = 0;
  oUser: IUser = null;
  oUser2Form: IUser2Form = null;
  oUser2Send: IUser2Send = null;
  oForm: FormGroup<IUser2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  tipousuarioDescription: string = "";
  id_tipousuario:number;
  

  constructor(
    private oRouter: Router,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oTipousuarioService: TipousuarioService
  ) {
    oAuthService.reload();
    oAuthService.checkSession().subscribe({
      next: (data: any) => {

      },
      error:(error:any) => {
        this.oRouter.navigate(['/login']);
      }
    })

  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      dni: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z])')]],
      apellido1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      apellido2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      nickname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      id_tipousuario: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Send = {
      id: this.oForm.value.id,
      dni: this.oForm.value.dni,
      nombre: this.oForm.value.nombre,
      apellido1: this.oForm.value.apellido1,
      apellido2: this.oForm.value.apellido2,
      email: this.oForm.value.email,
      nickname: this.oForm.value.nickname,
      tipousuario: { id: 2 }
    }
    if (this.oForm.valid) {
      this.oUserService.newOne(this.oUser2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "CUPRODEMY";
          this.modalContent = "User " + data + " created";
          this.showModal(data);
        }
      })
    }

  }



  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/user/view', data])
    })
    this.myModal.show()
  }

  updateTipousuarioDescription(id_tipousuario: number) {
    this.oTipousuarioService.getOne(id_tipousuario).subscribe({
      next: (data: ITipousuario) => {
        this.tipousuarioDescription = data.nombre;
      },
      error: (error: any) => {
        this.tipousuarioDescription = "Tipousuario not found";
        this.oForm.controls['id_tipousuario'].setErrors({'incorrect': true});
      }
    })
  }
  closeTipousuarioModal(id_tipousuario: number) {
    this.oForm.controls['id_tipousuario'].setValue(id_tipousuario);
    this.updateTipousuarioDescription(id_tipousuario);
    this.myModal.hide();
  }

  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTipousuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

}

