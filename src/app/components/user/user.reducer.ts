import * as actions from './user.actions';
import { EntityState , createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { act } from '@ngrx/effects';

export interface User {
    id : string;
    username : string;
    password : string;
}

const userAdapter = createEntityAdapter<User>();

export interface State extends EntityState<User> {}

const defaultUser = {
    ids: ['1'],
    entities: {
        '1':{
            id : '1',
            username : '',
            password : ''
        }
    }
}

export const initialState: State = userAdapter.getInitialState(defaultUser);


export function userReducer (
    state :State = initialState,
    action: actions.UserActions){

    switch (action.type){

        case actions.CREATE:
            console.log("createUser");
            return userAdapter.addOne(action.user,state);

        case actions.UPDATE:
            return userAdapter.updateOne({
                id: action.id,
                changes: action.changes,
            }, state)

        case actions.DELETE:
            return userAdapter.removeOne(action.id , state)
        default:
            return state;
    }
}

export const getUserState = createFeatureSelector<State>('user');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = userAdapter.getSelectors(getUserState);