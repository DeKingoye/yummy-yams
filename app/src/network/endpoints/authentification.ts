import { apis } from '../axios';
import { AxiosResponse } from 'axios';
import { SigninFactory, Signin } from '../../normalizr/auth/signin';
import { User, UserFactory } from '../../normalizr/user/user';


export interface LoginParams {
    email: string;
    password: string;
    
}   
export const login = (
  params: LoginParams
): Promise<Signin> => {
  return apis.yummy
    .post(`/auth/signin`, params)
    .then((response: AxiosResponse): Promise<Signin> => {
      return Promise.resolve(SigninFactory.createSignin(response.data));
    });
};

export interface CreateUserParams{
    name: string;
    email: string;
    password: string;
}
export const createUser = (params: CreateUserParams): Promise<void> => {
  return apis.yummy
    .post(`/auth/signup`, params)
};
export const getMe = (): Promise<User> => {
  return apis.yummy
    .get(`/auth/me`)
    .then((response: AxiosResponse): Promise<User> => {
      return Promise.resolve(UserFactory.createUser(response.data));
    });
}

