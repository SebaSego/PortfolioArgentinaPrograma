import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/servicios/authService/auth.service';
import { EducacionServiceService } from 'src/app/servicios/educacionService/educacion-service.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  miPortfolio: any = {};
  public editPersona : FormGroup | any;
  public listaEducacion : Educacion[]=[];


  constructor(
    private datosPortfolio:PortfolioService, 
    public autentic : AuthService, 
    public educacionService:EducacionServiceService,
    private formBuilder : FormBuilder
    ) { }

  ngOnInit(): void {
    
    this.mostrarPersona();
    this.iniciarFormulario();
    this.mostrarEducacion();
    
  }

  public mostrarPersona() {
    this.datosPortfolio.getPersona().subscribe(data =>{
      this.miPortfolio= data;
      console.log(this.miPortfolio);
      
    });
  }

  /* Metodo para mostrar Educacion desde la Api */
  public mostrarEducacion(){
    this.educacionService.getEducacion().subscribe(
      data =>{
        this.listaEducacion=data;
      }
    );
  }

  /* Metodo para iniciar Formulario */
  public iniciarFormulario(){
    this.editPersona=this.formBuilder.group({ 
      id: '',
      nombre: '',
      apellido: '',
      ocupacion: '',
      email: '',
      telefono: '',
      urlImg: ''})
  }

  /*Metodo para Setear los valores del formulario con la entidad a modificar */
  public editarPersona(miPortfolio :Persona){
    
    this.editPersona.setValue({
      id:miPortfolio.id,
      nombre: miPortfolio.nombre,
      apellido: miPortfolio.apellido,
      ocupacion: miPortfolio.ocupacion,
      email: miPortfolio.email,
      telefono: miPortfolio.telefono,
      urlImg: miPortfolio.urlImg
    })
  }

  /* Metodo para Guardar las modificaciones realizadas en el formulario */
  public modificarPersonaCargada(){
    const persona=this.editPersona.value;
    this.datosPortfolio.modificarDatos(persona).subscribe(
      data=>{
      this.mostrarPersona();
      this.editPersona.reset();
      });
      
  }

}
