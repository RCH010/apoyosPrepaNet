import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  usertype: String;

  ngOnInit(): void {
    this.usertype = localStorage.getItem('uid');
    if (!this.usertype) {
      this.usertype = "normal"
    }
  }

}
