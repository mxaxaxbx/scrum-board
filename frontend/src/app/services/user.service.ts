import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserI } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private env: string;

  constructor(
    private _http: HttpClient
  ) {
    this.env = environment.APP_URL;
  }

  registerUser(user: UserI) {
    return this._http.post<UserI>(`${ this.env }/api/users/register`, user)
  }
}
