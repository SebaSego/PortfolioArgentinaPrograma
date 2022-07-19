import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia';
import { AuthService } from 'src/app/servicios/authService/auth.service';
import { ExperienciaService } from 'src/app/servicios/experienciaService/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public listaExperiencia : Experiencia[]=[];
  public altaExperiencia : FormGroup | any;
  public esNuevo :boolean = true;
  constructor(private experienciaService:ExperienciaService, private formBuilder : FormBuilder, public autentic : AuthService) { }

  ngOnInit(): void {
    this.mostrarExperiencia();
    this.agregarExperiencia();
  }

   /* Metodo para mostrar Entidad desde la Api */
   public mostrarExperiencia(){
    this.experienciaService.getExperiencia().subscribe(
      data =>{
        this.listaExperiencia=data;
      
      
    });
  }
  
  public cambiarEsNuevo(){
    this.altaExperiencia.reset();
    this.esNuevo=true;
  }
  /* Metodo para iniciar Formulario */
  public agregarExperiencia(){
    this.altaExperiencia=this.formBuilder.group({ 
      id: '',
      puesto: '',
      institucionExp: '',
      anioInicioExp: '',
      anioFinExp: '',
      detalleExp: '',
      ciudad:'',
      urlLogoEmpresa: ''})
  }

  /* Metodo para dar de Alta la Entidad en Base de datos usando la Api */
  public agregarExperienciaCargada(){
    const experiencia=this.altaExperiencia.value;
    this.experienciaService.crearExperiencia(experiencia).subscribe(
      data=>{
      this.mostrarExperiencia();
      this.altaExperiencia.reset();
      });
    
    
  }
  /*Metodo para Setear los valores del formulario con la entidad a modificar */
  public editarExperiencia(experiencia :Experiencia){
    
    this.altaExperiencia.setValue({
      id:experiencia.id,
      puesto: experiencia.puesto,
      institucionExp: experiencia.institucionExp,
      anioInicioExp: experiencia.anioInicioExp,
      anioFinExp: experiencia.anioFinExp,
      detalleExp: experiencia.detalleExp,
      ciudad: experiencia.ciudad,
      urlLogoEmpresa: experiencia.urlLogoEmpresa
    })
    this.esNuevo=false
    
  }
  /* Metodo para Guardar las modificaciones realizadas en el formulario */
  public modificarExperienciaCargada(){
    const experiencia=this.altaExperiencia.value;
    this.experienciaService.modificarExperiencia(experiencia).subscribe(
      data=>{
      this.mostrarExperiencia();
      this.altaExperiencia.reset();
      });
      this.esNuevo=true;
  }

  public eliminarExperiencia(id: number){
    this.experienciaService.borrarExperiencia(id).subscribe(
      data=>{
        this.mostrarExperiencia();
      }
    )
  }


}
