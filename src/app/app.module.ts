import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PieComponent } from './pages/pie/pie.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Entrada1Component } from './pages/entrada1/entrada1.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListProductosComponent } from './pages/list-productos/list-productos.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EntradaComponent,
    MenuComponent,
    PieComponent,
    Pagina1Component,
    Entrada1Component,
    ContactoComponent,
    ListContactosComponent,
    ProductoComponent,
    ListProductosComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatTableModule, 
    MatButtonModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase},],
  bootstrap: [AppComponent]
})

export class AppModule { }
