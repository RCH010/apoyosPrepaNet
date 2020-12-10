import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email: string;
  password: string;
  msgErr: string;
  displayErr: Boolean
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.displayErr = false;
  }

  sumbitLogIn(loginForm: NgForm){
    if(loginForm.valid){
      this.authService.signIn(this.email, this.password).then(res =>{
        localStorage.setItem('uid', res.user.uid);
        console.log("UID: ", res.user.uid)
        this.router.navigateByUrl('/home').then(res => {
          this.msgErr = undefined
          location.reload()
          this.displayErr = false;
        })
      })
      .catch(res =>{
        this.displayErr = true;
        this.msgErr = "Credenciales incorrectas"
      })
    }else{
      this.displayErr = true;
      this.msgErr = "Credenciales incorrectas"
    }
  }
}
