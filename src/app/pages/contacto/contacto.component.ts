import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService,
    private personaService : PersonaService,
    private router: Router) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params)
      this.contacto = new Contacto()
      this.contacto = params['contacto']
    }
  }

  guardar() {
    console.log(this.contacto)
    this.contactoService.save(this.contacto)
    this.contacto = new Contacto()
    this.personaService.save(this.contacto).subscribe(data =>{
      console .log("resultado WS save", data)
    });
    this.contacto = new Contacto()
  }      
  
  Edita2() {
    console.log(this.contacto)
    this.contactoService.editar(this.contacto)
  } 
}
