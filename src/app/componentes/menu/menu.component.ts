import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/authService/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public autentic:AuthService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.autentic.logueado = false;
  }

}
