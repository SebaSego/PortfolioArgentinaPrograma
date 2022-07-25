import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl="https://still-shore-85129.herokuapp.com";
  logueado : boolean = false;
  
  constructor(private http:HttpClient) { }

  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/ver/1`)
  }

}
