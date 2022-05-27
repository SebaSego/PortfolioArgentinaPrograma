import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'iniciar-sesion', component:InicioSesionComponent},
  {path: '', redirectTo:'iniciar-sesion', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
