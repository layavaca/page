import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private dbPath = '/contactos';
  contactos: Contacto[] = []

  contactosRef: AngularFirestoreCollection<Contacto>;
  //contactosDoc: AngularFirestoreDocument<Contacto>

  constructor(private db: AngularFirestore) {
    this.contactosRef = db.collection(this.dbPath);
    // this.contactosDoc = db.doc(this.dbPath);
  }

  save(contacto: Contacto) {
    this.contactos.push(contacto)
    //contacto.uid = this.db.createId()
    console.log(this.contactos)
    this.create(contacto)
  }

  getList() {
    return this.contactos
  }

  getAll() {
    return this.contactosRef.valueChanges();
  }
  create(contacto: Contacto): any {
    //return this.contactosRef.doc(contacto.uid).set({ ...contacto });
  }

  editar(contacto: Contacto): any {
   // return this.contactosRef.doc(contacto.uid).update(contacto);
   this.contactos.push(contacto)
   console.log(this.contactos)
    this.create(contacto)
  }

  delete(id: string): Promise<void> {
    return this.contactosRef.doc(id).delete();
  }
}
