import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiServerUrl="https://still-shore-85129.herokuapp.com";

  constructor(private http:HttpClient) { }
  
  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.apiServerUrl + '/persona/ver/1')
  }
  
  public modificarDatos(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/actualizar`,persona);
  }
}
