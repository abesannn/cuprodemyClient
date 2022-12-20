import { FormControl } from "@angular/forms";

export interface IEntity {
    id: number;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}


export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: Sort;
    empty: boolean;
}

export interface IUser {
    nickname: any;
    apellido2: any;
    apellido1: any;
    nombre: any;
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

export interface ITipousuario {
    id: number;
    name: string;
    users: number;
}

