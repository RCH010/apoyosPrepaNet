import { Component, OnInit } from '@angular/core';
import { infoTemas } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  idSection: number;
  informacion = infoTemas;
  sectionInfo: any;
  textfinalTema: string;
  newURL: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idSection = parseInt(this.route.snapshot.url[1].path) - 1; 
    this.sectionInfo = infoTemas[this.idSection];
    this.textfinalTema = this.getnextText();
    this.nextwhat();
    window.scrollTo({top: 0, left: 0});
    // window.location.reload();
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
