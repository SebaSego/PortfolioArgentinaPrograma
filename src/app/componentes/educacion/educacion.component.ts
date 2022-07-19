
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { AuthService } from 'src/app/servicios/authService/auth.service';
import { EducacionServiceService } from 'src/app/servicios/educacionService/educacion-service.service';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public listaEducacion : Educacion[]=[];
  public altaEducacion : FormGroup | any;
  public esNuevo :boolean = true;
  

  constructor(private educacionService:EducacionServiceService, private formBuilder : FormBuilder, public autentic : AuthService ) { }
  
  ngOnInit(): void {
    this.mostrarEducacion();
    this.agregarEducacion();
    
    
    }
    /* Metodo para mostrar Educacion desde la Api */
    public mostrarEducacion(){
      this.educacionService.getEducacion().subscribe(
        data =>{
          this.listaEducacion=data;
          this.educacionService.educacionCargada=data;
        
      });
    }
    
    public cambiarEsNuevo(){
      this.altaEducacion.reset();
      this.esNuevo=true;
    }
    /* Metodo para iniciar Formulario */
    public agregarEducacion(){
      this.altaEducacion=this.formBuilder.group({ 
        id: '',
        titulo: '',
        institucion: '',
        anioInicio: '',
        anioFin: '',
        detalle: '',
        urlImagen: ''})
    }

    /* Metodo para dar de Alta la Entidad en Base de datos usando la Api */
    public agregarEducacionCargada(){
      const educacion=this.altaEducacion.value;
      this.educacionService.crearEducacion(educacion).subscribe(
        data=>{
        this.mostrarEducacion();
        this.altaEducacion.reset();
        });
      
      
    }
    /*Metodo para Setear los valores del formulario con la entidad a modificar */
    public editarEducacion(educacion :Educacion){
      
      this.altaEducacion.setValue({
        id:educacion.id,
        titulo: educacion.titulo,
        institucion: educacion.institucion,
        anioInicio: educacion.anioInicio,
        anioFin: educacion.anioFin,
        detalle: educacion.detalle,
        urlImagen: educacion.urlImagen
      })
      this.esNuevo=false
      
    }
    /* Metodo para Guardar las modificaciones realizadas en el formulario */
    public modificarEducacionCargada(){
      const educacion=this.altaEducacion.value;
      this.educacionService.modificarEducacion(educacion).subscribe(
        data=>{
        this.mostrarEducacion();
        this.altaEducacion.reset();
        });
        this.esNuevo=true;
    }

    public eliminarEducacion(id: number){
      this.educacionService.borrarEducacion(id).subscribe(
        data=>{
          this.mostrarEducacion();
        }
      )
    }


   
}


