import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  usertype: String;

  ngOnInit(): void {
    this.usertype = localStorage.getItem('uid');
    if (!this.usertype) {
      this.usertype = "normal";
    }
  }

  goto(section: number){
    let address = `/tema/${section}`;
    if(this.usertype != 'normal') {
      address = `/admin/edit-tema/${section}`;
    }
    this.router.navigateByUrl(address);
  }

}
