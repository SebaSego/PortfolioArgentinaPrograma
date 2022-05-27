import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styles: [
  ]
})
export class InicioSesionComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuidler: FormBuilder) { 
    this.form=this.formBuidler.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {
  }
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }

}
