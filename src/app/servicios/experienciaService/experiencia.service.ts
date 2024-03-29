import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl="https://still-shore-85129.herokuapp.com";

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/ver`)
  }
  public crearExperiencia(experiencia : Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/new`,experiencia);
  }

  public modificarExperiencia(experiencia : Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/modificar`,experiencia);
  }

  public borrarExperiencia(experienciaId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/delete/${experienciaId}`);
  }
}
