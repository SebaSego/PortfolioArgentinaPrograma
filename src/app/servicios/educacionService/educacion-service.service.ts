import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {
  private apiServerUrl=environment.apiBaseUrl
  public educacionCargada :Educacion[]= [{id:0,
    titulo:"",
    institucion:"",
    anioInicio:"",
    anioFin:"",
    detalle:"",
    urlImagen:""}];


  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/ver`)
  }
  public crearEducacion(educacion : Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/new`,educacion);
  }

  public modificarEducacion(educacion : Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/modificar`,educacion);
  }

  public borrarEducacion(educacionId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${educacionId}`);
  }

}

