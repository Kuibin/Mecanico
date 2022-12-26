import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  checkoutForm;
  entidadesActivo: string = "";
  servicioActivo: string = "";

  // formulario = new FormGroup({
  //   // nombre: new FormControl('',Validators.required),
  //   // telefono: new FormControl('',[Validators.required, Validators.minLength(10)]),
  //   // email: new FormControl('',[Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
  //   // password: new FormControl('',Validators.required)
  // });

  constructor(private formBuilder: FormBuilder ) {
    this.checkoutForm = this.formBuilder.group({
      entidades: '',
      servicios: ''
    });}

  ngOnInit(): void {
    alert("inicio");
  }

  entidadesSel(inputValue:string){
    alert(this.checkoutForm.get('entidades')?.value);
    this.entidadesActivo = this.checkoutForm.get('entidades')?.value;
    // alert("cambio");
   }

   servicioSel(){
    this.servicioActivo = this.checkoutForm.get('servicios')?.value;
   }

}
