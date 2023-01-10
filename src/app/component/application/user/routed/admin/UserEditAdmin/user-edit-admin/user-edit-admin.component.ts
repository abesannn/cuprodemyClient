import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IUser2Form, IUser2Send } from 'src/app/model/user-interface';


import { UserService } from 'src/app/service/User.service';
import { SessionService } from 'src/app/service/session.service';


declare let bootstrap: any;
@Component({
  selector: 'app-user-edit-admin',
  templateUrl: './user-edit-admin.component.html',
  styleUrls: ['./user-edit-admin.component.css']
})
export class UserEditAdminComponent implements OnInit {


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
  // foreigns
  tipousuarioDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService

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

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          dni: [data.dni, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          apellido1: [data.apellido1, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          apellido2: [data.apellido2, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          nickname: [data.nickname, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          });

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      dni: this.oForm.value.dni,
      apellido1: this.oForm.value.apellido1,
      apellido2: this.oForm.value.apellido2,
      email: this.oForm.value.email,
      nickname: this.oForm.value.nickname,
      tipousuario: { id: 2 }
    }
    if (this.oForm.valid) {
      this.oUserService.updateOne(this.oUser2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "CUPRODEMY";
          this.modalContent = "User " + this.id + " updated";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/User/view', this.id])
    })
    this.myModal.show()
  }

  }

