import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usertype: string;
  userUID: Observable<any>;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usertype = localStorage.getItem('uid');
    if (!this.usertype) {
      this.usertype = "normal"
    }
  }

  logout(){
    this.authService.singOut().then(res =>{
      this.router.navigateByUrl('/home').then(res => {
        localStorage.clear()
        location.reload()
      })
    })
  }
}
