import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-accueil-admin-multi-pdv',
  templateUrl: './accueil-admin-multi-pdv.component.html',
  styleUrls: ['./accueil-admin-multi-pdv.component.css']
})
export class AccueilAdminMultiPdvComponent implements OnInit,AfterViewInit {

  autoriserpourcettefonctionnalie: boolean = false;
  constructor() { }

  ngOnInit() {
    if( JSON.parse(sessionStorage.getItem('currentUser')).prenom=='ABDAH' && JSON.parse(sessionStorage.getItem('currentUser')).telephone=='221775198699' && JSON.parse(sessionStorage.getItem('currentUser')).accessLevel==1 ) {
      this.autoriserpourcettefonctionnalie = true;
    }
    else if( JSON.parse(sessionStorage.getItem('currentUser')).prenom=='assane' && JSON.parse(sessionStorage.getItem('currentUser')).accessLevel==1 ) {
      this.autoriserpourcettefonctionnalie = true;
    }
  }

  ngAfterViewInit(){
    localStorage.setItem("auredemarrage","yesca")
    console.log("**YES CA**")
  }

}
