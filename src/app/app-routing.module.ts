import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';




const routes: Routes = [
  {path: '', component:PortfolioComponent},
  
  {path: '/educacion', component:EducacionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
