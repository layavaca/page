import { Component } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params)
      this.producto = new Producto()
      this.producto = params['producto']
    }
  }

  guardar() {
    console.log(this.producto)
    this.productoService.save(this.producto)
    this.producto = new Producto()
  }      

  Edita2() {
    console.log(this.producto)
    this.productoService.editar(this.producto)
  } 

}
