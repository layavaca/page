import { Component } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { NavigationExtras, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.scss'],
})

export class ListProductosComponent {
  listadoProductos: Producto[] = []
  listadoProductosFire: any;

  constructor(private productoService: ProductoService,
      private router: Router) {
    this.listadoProductos = productoService.getList()
    console.log('listadoProductos', this.listadoProductos)
    this.listadoProductosFire = productoService.getAll()
  }

  editar(producto: Producto) {
    console.log(producto)
    let params: NavigationExtras = {
      queryParams: {
        producto: producto,
      }
    }
    this.router.navigate(['/producto'], params)
  }
 
  eliminar(event: Event,producto : Producto){
    this.productoService.delete(producto.uid)
  }
}
