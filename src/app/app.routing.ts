import  { RouterModule, Routes} from '@angular/router' ;

import { AuthComponentComponent } from './auth-component/auth-component.component';
import {AccueilAdminMultiPdvComponent} from "./accueil-admin-multi-pdv/accueil-admin-multi-pdv.component";
import {AuthGuard} from "./_guards/auth.guard";


const appRoutes: Routes = [
  { path: '', component: AuthComponentComponent },
  { path: 'accueiladmmpdv', component: AccueilAdminMultiPdvComponent, canActivate: [AuthGuard] },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
