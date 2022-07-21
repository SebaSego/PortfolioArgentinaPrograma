import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habilidades } from 'src/app/models/habilidades';
import { AuthService } from 'src/app/servicios/authService/auth.service';
import { HabilidadesServiceService } from 'src/app/servicios/habilidadesService/habilidades-service.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public listaHabilidades : Habilidades[]=[];
  public altaHabilidades : FormGroup | any;
  public esNuevo :boolean = true;
  
  constructor(private habilidadesService: HabilidadesServiceService, private formBuilder : FormBuilder, public autentic : AuthService) { }

  ngOnInit(): void {
    this.mostrarHabilidades();
    this.agregarHabilidades();
    
  }

  public mostrarPorcentaje(porcentaje:number){
    return ("width: "+ porcentaje +"%");
  }
  
  /* Metodo para mostrar Entidad desde la Api */
  public mostrarHabilidades(){
    this.habilidadesService.getHabilidades().subscribe(
      data =>{
        this.listaHabilidades=data;
      
    });
  }

  public cambiarEsNuevo(){
    this.altaHabilidades.reset();
    this.esNuevo=true;
  }

  /* Metodo para iniciar Formulario */
  public agregarHabilidades(){
    this.altaHabilidades=this.formBuilder.group({ 
      id: '',
      nombreHabilidad: '',
      descripcion: '',
      progreso: '',
      imagen: '',
      })
  }

  /* Metodo para dar de Alta la Entidad en Base de datos usando la Api */
  public agregarHabilidadesCargada(){
    const habilidad=this.altaHabilidades.value;
    this.habilidadesService.crearHabilidades(habilidad).subscribe(
      data=>{
      this.mostrarHabilidades();
      this.altaHabilidades.reset();
      });
  }

  /*Metodo para Setear los valores del formulario con la entidad a modificar */
  public editarHabilidades(habilidades :Habilidades){
      
    this.altaHabilidades.setValue({
      id:habilidades.id,
      nombreHabilidad: habilidades.nombreHabilidad,
      descripcion: habilidades.descripcion,
      progreso: habilidades.progreso,
      imagen: habilidades.imagen
    })
    this.esNuevo=false
    
  }

  /* Metodo para Guardar las modificaciones realizadas en el formulario */
  public modificarHabilidadesCargada(){
    const habilidad=this.altaHabilidades.value;
    this.habilidadesService.modificarHabilidades(habilidad).subscribe(
      data=>{
      this.mostrarHabilidades();
      this.altaHabilidades.reset();
      });
      this.esNuevo=true;
  }

  public eliminarHabilidades(id: number){
    this.habilidadesService.borrarHabilidad(id).subscribe(
      data=>{
        this.mostrarHabilidades();
      }
    )
  }



}
