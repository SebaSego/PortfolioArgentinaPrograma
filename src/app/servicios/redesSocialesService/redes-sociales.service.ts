import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesSociales } from 'src/app/models/redes_sociales';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {
  private apiServerUrl=environment.apiBaseUrl

  constructor(private http:HttpClient) { }

  public getRedesSociales():Observable<RedesSociales[]>{
    return this.http.get<RedesSociales[]>(`${this.apiServerUrl}/redesSociales/ver`)
  }
  public crearRedesSociales(redSocial : RedesSociales):Observable<RedesSociales>{
    return this.http.post<RedesSociales>(`${this.apiServerUrl}/redesSociales/new`,redSocial);
  }

  public modificarRedesSociales(redSocial : RedesSociales):Observable<RedesSociales>{
    return this.http.put<RedesSociales>(`${this.apiServerUrl}/redesSociales/modificar`,redSocial);
  }

  public borrarRedesSociales(redSocialId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/redesSociales/delete/${redSocialId}`);
  }
}
