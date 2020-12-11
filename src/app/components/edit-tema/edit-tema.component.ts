import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { link } from 'src/app/models/link';
import { Section } from 'src/app/models/section';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-edit-tema',
  templateUrl: './edit-tema.component.html',
  styleUrls: ['./edit-tema.component.css']
})
export class EditTemaComponent implements OnInit {
  idSection: number;
  sectionInfo: any;
  textfinalTema: string;
  newURL: string;
  usertype: string;
  sectionP: any;
  sectionUID: string;

  msgError: string = "";
  showError: boolean = false;

  newSection: Section;
  newLink: link;

  loading:string = "loading";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db:DbService
  ) { }
  ngOnInit(): void {
    this.idSection = parseInt(this.route.snapshot.url[2].path) - 1;
    this.textfinalTema = this.getnextText();
    this.nextwhat();
    window.scrollTo({top: 0, left: 0});

    this.usertype = localStorage.getItem('uid');
    if (!this.usertype) {
      this.usertype = "normal"
    }
    this.db.getSection(this.idSection + 1).subscribe(result => {
      let res:any = result[result.length - 1]
      this.sectionUID = res.payload.doc.id;
      this.sectionInfo = res.payload.doc.data();
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
      this.newURL = `/admin/edit-tema/${this.idSection + 2}`;
    }else {
      this.newURL = `/admin/home`;
    }
  }
  saveChanges() {
    this.showError = false;
    if(this.sectionInfo.supertitle === ''){
      this.showError = true;
    }
    this.sectionInfo.sections.forEach((element, id) => {
      // links
      element.links.forEach((link, index) => {
        if(link.enlace === '' && link.nombre === '') {
          this.sectionInfo.sections[id].links.splice(index,1);
        }
      });
      if(element.title === '' && element.parrafos[0].text === '') {
        this.sectionInfo.sections.splice(id,1);
      }
      if (element.title === '') {
        this.showError = true;
      }
    });
    if(this.showError) {
      this.msgError = "Revisar que la sección tenga un título, y todas las subsecciones también.";
    }else{
      this.db.updateSection(this.sectionUID, this.sectionInfo).then(()=>{
        alert("Los cambios han sido guardados.");
        window.scrollTo({top: 0, left: 0});
      })
    }
  }
  newSubSection(){
    let newsect: Section = {
      "title": "",
      "parrafos": [
        {"text": ""}
      ],
      "links": [{
        "enlace": "",
        "nombre": ""
      }]
    }
    this.sectionInfo.sections.push(newsect);
  }
  addNewLink(subSectionid:number){
    let nLink: link = {
      "enlace": "",
      "nombre": ""
    };
    this.sectionInfo.sections[subSectionid].links.push(nLink);
  }

}

