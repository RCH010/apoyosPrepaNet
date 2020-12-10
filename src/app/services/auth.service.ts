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
    this.userData = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          this.userUID = user.uid;
          localStorage.setItem('uid', user.uid)
          return this.afs.collection('users').doc(user.uid).valueChanges();
        } else {
          // Logged out
          localStorage.removeItem('uid')
          return null;
        }
      })
    );
  }

  signIn(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }
  singOut() {
    return this.afAuth.auth.signOut()
  }
}
