import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  idSection: number;
  sectionInfo: any;
  textfinalTema: string;
  newURL: string;
  usertype: string;
  sectionP: any;
  loading:string = "loading";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db:DbService
  ) { }

  ngOnInit(): void {
    this.idSection = parseInt(this.route.snapshot.url[1].path) - 1;
    this.textfinalTema = this.getnextText();
    this.nextwhat();
    window.scrollTo({top: 0, left: 0});

    this.usertype = localStorage.getItem('uid');
    if (!this.usertype) {
      this.usertype = "normal"
    }
    this.db.getSection(this.idSection + 1).subscribe(result => {
      let res:any = result[result.length - 1]
      this.sectionInfo = res.payload.doc.data ()
      if(result) {
        this.loading = "complete"
      }
    })

  }
  goTo(enlace){
    window.open(enlace, "_blank");
  }
  getnextText(){
    if(this.idSection >= 0 && this.idSection <= 2){
      return "Da clic aquí, para ir a la siguiente sección"
    }else{
      return "Da clic aquí, para ir al inicio"
    }
  }
  nextwhat(){
    if(this.idSection >= 0 && this.idSection <= 2){
      this.newURL = `/tema/${this.idSection + 2}`;

    }else {
      this.newURL = `/home`;
    }
  }
}
