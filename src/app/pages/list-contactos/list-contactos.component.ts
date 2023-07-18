import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss'],
})

export class ListContactosComponent implements OnInit{
  listadoContactos: Contacto[] = []
  listadoContactosFire: any;
  lisatdoContactosWS: any;
  
  

  constructor(private contactoService: ContactoService,
    private personaService : PersonaService,
    private router: Router) {
    this.listadoContactos = contactoService.getList()
    this.listadoContactosFire = contactoService.getAll()
  }

  ngOnInit(): void {
    this.lisatdoContactosWS = this.personaService.getAll()
  }
 
  editar(contacto: Contacto) {
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
      }
    }
    this.router.navigate(['/contacto'], params)
  }

  eliminar(event: Event,contacto:Contacto){
   // this.contactoService.delete(contacto.uid)
  }
   
}