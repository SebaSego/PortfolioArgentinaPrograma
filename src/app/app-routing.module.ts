import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { LoginComponent } from './componentes/menu/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'inicio-sesion', component:LoginComponent},
  /*{path: '', redirectTo:'inicio-sesion', pathMatch: 'full'},*/
  {path: 'educacion', component:EducacionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
