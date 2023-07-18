import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Entrada1Component } from './pages/entrada1/entrada1.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListProductosComponent } from './pages/list-productos/list-productos.component';

const routes: Routes = [
  {path: 'pagina1', component: Pagina1Component},
  {path: 'entrada1', component: Entrada1Component},
  {path: 'contacto', component: ContactoComponent},
  {path: 'list-contactos', component: ListContactosComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'list-productos', component: ListProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
