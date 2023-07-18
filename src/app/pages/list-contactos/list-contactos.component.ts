import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';


@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss'],
})

export class ListContactosComponent {
  listadoContactos: Contacto[] = []
  listadoContactosFire: any;
  
  

  constructor(private contactoService: ContactoService,
    private router: Router) {
    this.listadoContactos = contactoService.getList()
    this.listadoContactosFire = contactoService.getAll()
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
    this.contactoService.delete(contacto.uid)
  }
   
}