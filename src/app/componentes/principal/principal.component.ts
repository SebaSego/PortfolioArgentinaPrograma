import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  miPortfolio: any;


  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    
    this.datosPortfolio.getPersona().subscribe(data =>{
      this.miPortfolio= data;
      console.log(this.miPortfolio);
      
    });
    
  }

}
