

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionServiceService } from 'src/app/servicios/educacion-service.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public listaEducacion : Educacion[]=[];
  public altaEducacion : FormGroup | any;
  private eduModificar: Educacion | undefined;


  constructor(private educacionService:EducacionServiceService, private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
    this.mostrarEducacion();
    this.agregarEducacion();
    
    
    }

    public mostrarEducacion(){
      this.educacionService.getEducacion().subscribe(
        data =>{this.listaEducacion=data
        console.log(this.listaEducacion)
      });
    }
    
    public agregarEducacion(){
      this.altaEducacion=this.formBuilder.group({ 
        titulo: '',
        institucion: '',
        anioInicio: '',
        anioFin: '',
        detalle: '',
        urlImagen: ''})
    }
    public agregarEducacionCargada(){
      const educacion=this.altaEducacion.value;
      this.educacionService.crearEducacion(educacion).subscribe(
        data=>{
        this.mostrarEducacion();
        this.altaEducacion.reset();
        });
      
      
    }
    
    public editarEducacion(educacion :Educacion){
      this.eduModificar=educacion;
    }
   
}


