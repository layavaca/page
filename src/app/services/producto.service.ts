import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 
  private dbPath = '/productos'; 
  productos: Producto[] = []

  productosRef: AngularFirestoreCollection<Producto>;

  constructor(private db: AngularFirestore) {
    this.productosRef = db.collection(this.dbPath); }

  save(producto: Producto) {
    this.productos.push(producto)
    producto.uid = this.db.createId()
    console.log(this.productos)
    this.create(producto)
  }


  getList() {
    return this.productos
  }

  getAll() {
    return this.productosRef.valueChanges();
  }
  create(producto: Producto): any {
    return this.productosRef.doc(producto.uid).set({ ...producto });
  }

  editar(producto: Producto): any {
    return this.productosRef.doc(producto.uid).update(producto);
  }

  delete(id: string): Promise<void> {
    return this.productosRef.doc(id).delete();
  }
}
