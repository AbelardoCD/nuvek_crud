import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clientes } from './clientes';
import { User } from './users';

import { CLIENTES } from './clientes.json';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from './../../environments/environment'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'content-type':'application/json'})
  constructor(private http: HttpClient) { }

  getUsers():Observable< User[]>{
    return this.http.get(`${environment.api.server}/api/users`).pipe(
        map(response =>response as User[])
    )

  }

  create(user:User):Observable<User>{
    return this.http.post<User>(`${environment.api.server}/api/users`, user, {headers:this.httpHeaders})

  }

   delete(id:number):Observable<User>{
    return this.http.delete<User>(`${environment.api.server}/api/users/${id}`,{headers: this.httpHeaders})

  }

  updated(user:User):Observable<User>{
      return this.http.put<User>(`${environment.api.server}/api/users/${user.id}`, user, {headers: this.httpHeaders})

  }
}
