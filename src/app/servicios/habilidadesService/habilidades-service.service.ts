import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from 'src/app/models/habilidades';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesServiceService {
  private apiServerUrl=environment.apiBaseUrl

  constructor(private http:HttpClient) { }

  public getHabilidades():Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(`${this.apiServerUrl}/habilidades/ver`)
  }
  public crearHabilidades(habilidades : Habilidades):Observable<Habilidades>{
    return this.http.post<Habilidades>(`${this.apiServerUrl}/habilidades/new`,habilidades);
  }

  public modificarHabilidades(habilidades : Habilidades):Observable<Habilidades>{
    return this.http.put<Habilidades>(`${this.apiServerUrl}/habilidades/modificar`,habilidades);
  }

  public borrarHabilidad(habilidadId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/habilidades/delete/${habilidadId}`);
  }

}
