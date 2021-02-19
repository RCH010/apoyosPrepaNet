import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  userUID: String;
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        this.userData = undefined;
        localStorage.removeItem('user');
        localStorage.removeItem('uid');
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  signIn(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }
  singOut() {
    return this.afAuth.auth.signOut()
  }
}
