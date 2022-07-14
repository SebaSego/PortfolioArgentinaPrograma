import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  usuarioDB : any;
  cargando : boolean = true;
  logueado : boolean = false;
  datosCorrectos : boolean = true;
  textoError : string ='';

  constructor(private formBuidler: FormBuilder, private autentic:AuthService) { 
   
    /*Validaciones de Formulario*/
    this.form=this.formBuidler.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    )
    
  }

  ngOnInit(): void {
   
    //Metodo para traer datos del usuario
   
    this.autentic.getUsuario().subscribe(data =>{
      setTimeout(() => {
        this.cargando = false;  
        this.usuarioDB=data;
        
        }, 2000);
    })

  }
  /* Metodos para obtener email y password del formulario */
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }
  
  /* Funcion para validar Usuario y Contraseña  */
  validar(){
    if (this.form.valid){
      
      if (this.form.value.email != this.usuarioDB.usuario){
        this.datosCorrectos = false;
        this.textoError = "El correo electrónico ingresado no pertenece a una cuenta registrada.";
        
      }
        else{
          if(this.form.value.password != this.usuarioDB.password){
            this.datosCorrectos = false;
            this.textoError = "La contraseña ingresada no es válida.";
            
          }
        
            else{ 
              this.datosCorrectos = true;
              this.logueado = true;
              
            }
        }
    }
      
  }

 
}
