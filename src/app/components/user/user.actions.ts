import { Action } from '@ngrx/store';
import {User} from './user.reducer'

export const CREATE  = '[User] Create'
export const UPDATE  = '[User] Update'
export const DELETE  = '[User] Delete'

export class Create implements Action {
    readonly type = CREATE;
    constructor( public user : User){ }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor( public id : string,public changes: Partial<User>){ }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor( public id : string){ }
}

export type UserActions = Create | Update | Delete;