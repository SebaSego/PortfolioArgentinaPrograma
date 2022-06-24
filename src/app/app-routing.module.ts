import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'iniciar-sesion', component:InicioSesionComponent},
  {path: '', redirectTo:'iniciar-sesion', pathMatch: 'full'},
  {path: 'educacion', component:EducacionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
