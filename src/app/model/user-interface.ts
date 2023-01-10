import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";
import { ITipousuario } from "./tipo-usuario.interface";

export interface IUserBean {
    nickname: string;
    pass: string;
}

export interface IUserBean2Form {
    nickname: FormControl<string>;
    pass: FormControl<string>;
}

export interface IUser {
    nickname: string;
    apellido2: string;
    apellido1: string;
    nombre: string;
    id: number;
    dni: string;
    email: string;
    tipousuario: ITipousuario;
}


export interface IUser2Form {
    id:          FormControl<number>;
    dni:          FormControl<string>;
    nombre:        FormControl<string>;
    apellido1:     FormControl<string>;
    apellido2:    FormControl<string>;
    email:       FormControl<string>;
    nickname:    FormControl<string>;
    id_tipousuario:    FormControl<number>;
}
export interface IUser2Send {
    id:          number;
    dni:          string
    nombre:        string;
    apellido1:     string;
    apellido2:    string;
    email:       string;
    nickname:    string;
    tipousuario:   IEntity;
}
