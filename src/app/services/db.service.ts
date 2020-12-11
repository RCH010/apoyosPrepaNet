import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getSection(idSection: number){
    return this.afs.collection('supertemas', ref => ref.where('idTema', '==', idSection)).snapshotChanges();
  }
  updateSection(idSection: string, section: any){
    return this.afs.collection('supertemas').doc(idSection).update(section);
  }
}
