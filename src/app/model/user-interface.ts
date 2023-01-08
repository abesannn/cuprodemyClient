import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";

export interface IUserBean {
    nickname: string;
    pass: string;
}

export interface IUserBean2Form {
    nickname: FormControl<string>;
    pass: FormControl<string>;
}