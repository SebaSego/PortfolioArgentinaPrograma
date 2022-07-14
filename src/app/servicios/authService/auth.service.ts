import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl=environment.apiBaseUrl
  
  constructor(private http:HttpClient) { }

  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/ver/1`)
  }

}
