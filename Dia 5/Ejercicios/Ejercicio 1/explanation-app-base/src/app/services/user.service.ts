import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * @param httpClient
   */
  constructor(private httpClient:HttpClient) { }

  /**
   * Update a remote user with id 1 ( unique user on db )
   */
  public updateUserRemote(user:User): Observable<User> {
    return this.httpClient.put<User>(environment.URL_SERVER+'users/1',user);
  }

}
