import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routing} from "./app.routing";

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import {AuthComponentComponent} from "./auth-component/auth-component.component";
import {LoaderComponent} from "./loader/loader.component";
import {AuthService} from "./services/auth.service";
import {UtilsService} from "./services/utils.service";
import {NavbarTopComponent} from "./navbars/navbar-top/navbar-top.component";
import {AccueilAdminMultiPdvComponent} from "./accueil-admin-multi-pdv/accueil-admin-multi-pdv.component";
import {TarifsService} from "./services/tarifs.service";
import {MapsService} from "./services/maps.service";
import {ExpressocashService} from "./services/expressocash.service";
import {TigocashService} from "./services/tigocash.service";
import {OrangemoneyService} from "./services/orangemoney.service";
import {FacturierService} from "./services/facturier.service";
import {WizallService} from "./services/wizall.service";
import {DemandepretService} from "./services/demandepret.service";
import {EcomService} from "./services/ecom.service";
import {GestionreportingService} from "./services/gestionreporting.service";
import {CrmService} from "./services/crm.service";
import {ComptabiliteService} from "./services/comptabilite.service";
import {PostCashService} from "./services/postcash.service";
import {TntService} from "./services/tnt.service";
import {AdminmultipdvService} from "./services/adminmultipdv.service";
import {AdminpdvService} from "./services/adminpdv.service";
import {AuthGuardsup} from "./_guards/authsup.guard";
import {AuthGuardcais} from "./_guards/authcais.guard";
import {AuthGuard} from "./_guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,

    AuthComponentComponent,
    LoaderComponent,
    NavbarTopComponent,
    AccueilAdminMultiPdvComponent,

  ],
  exports:[
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Routing,


    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    AuthGuardcais,
    AuthGuardsup,

    AdminpdvService,
    AdminmultipdvService,
    UtilsService,
    TntService,
    PostCashService,
    AuthService,
    ComptabiliteService,
    CrmService,
    GestionreportingService,
    EcomService,
    DemandepretService,
    WizallService,
    FacturierService,
    OrangemoneyService,
    TigocashService,
    ExpressocashService,
    MapsService,

    TarifsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
