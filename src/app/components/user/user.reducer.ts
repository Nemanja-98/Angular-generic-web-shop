import * as actions from './user.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { act } from '@ngrx/effects';
import axios from 'axios';

const getUsers = async () => {
  console.log('getUsers');
  const res = await axios.get('http://localhost:4000/users');
  console.log(res);

  const idList = [];
  res.data.map((el) => {
    idList.push(String(el.id));
  });
    console.log("lista",idList)
  //    return idList;

  let users = {};
  res.data.map((el) => {
    users[String(el.id)] = {...el,id:String(el.id)};
  });
  console.log('users', users);
  return {ids:idList,entities:users};
};

const defualtKorisnik = getUsers().then(res => res);

console.log("caocaocao",defualtKorisnik);

export interface User {
  id: string;
  username: string;
  password: string;
  address: string;
  phone: string;
}

const userAdapter = createEntityAdapter<User>();

export interface State extends EntityState<User> {}

const defaultUser = {
  ids: ['1', '2', '3'],
  entities: {
      '1':{
          id : '1',
          username : 'neca1',
          password : '123123'
      },
      '2':{
          id : '2',
          username : 'neca2',
          password : '123123'
      },
      '3':{
        id:'3',
        username:"vuk",
        password:"vuk1",
      }
  }
};

export const initialState: State = userAdapter.getInitialState(defaultUser);

export function userReducer(
  state: State = initialState,
  action: actions.UserActions
) {
  switch (action.type) {
    case actions.CREATE:
      console.log('createUser');
      return userAdapter.addOne(action.user, state);

    case actions.UPDATE:
      return userAdapter.updateOne(
        {
          id: action.id,
          changes: action.changes,
        },
        state
      );

    case actions.DELETE:
      return userAdapter.removeOne(action.id, state);
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
