import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navegar() {
    this.router.navigate(['/entrada1']);
  }

  contacto(){
    this.router.navigate(['/contacto'])
  }

  producto(){
    this.router.navigate(['/producto'])
  }

}
