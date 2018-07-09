import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


export class Portefeuille{
  nom:string;
  prenom:string;
  telephone:string;
  nombre_operation:number;
  fidelite:number;
  date_ajout:any;
}

export class Relance{
  iduser : number ;
  prenom:string ;
  nom:string ;
  telephone:string ;
  infosoperation:string;
  echeance:any;
}

export class Promotion{
  nom:string;
  prenom:string;
  telephone:string;
  nombre_operation:number;
  fidelite:number;
  date_ajout:any;
}

export class Prospection{
  nom:string;
  prenom:string;
  telephone:string;
}

export class Suivicommande{
  nomclient:string;
  prenomclient:string;
  montantcommande:number;
  pointderecuperation:string;
  etat:string;
}

export class Servicepoint{
  nom:string;
  designations:string;
}


@Injectable()
export class CrmService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private basetoken:any;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }


  validerDemandeDepot(data:any): Observable<any>{
    let url = this.link+"/crm-sen/validerDemandeDepot";
    let datas = JSON.stringify({token:this.basetoken, montant: data.montant, infocc: data.infocc, infocom: data.infocom});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  getEtatDemandeDepot(data:any): Observable<any>{
    let url = this.link+"/crm-sen/getEtatDemandeDepot";
    let datas = JSON.stringify({token:this.basetoken, infosup: data.infosup});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  portefeuille(): Observable<any>{
    let url = this.link+"/crm-sen/portefeuille";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  relance(): Observable<any>{
    let url = this.link+"/crm-sen/relance";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  promotion(): Observable<any>{
    let url = this.link+"/crm-sen/promotion";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  sendSms(data:any): Observable<any>{
    let url = this.link+"/crm-sen/sendSms";
    let datas = JSON.stringify({token:this.basetoken, destinataires:data.destinataire, messageContain:data.message});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  prospection(): Observable<any>{
    let url = this.link+"/crm-sen/prospection";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  suivicommande(): Observable<any>{
    let url = this.link+"/crm-sen/suivicommande";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  servicepoint(): Observable<any>{
    let url = this.link+"/crm-sen/servicepoint";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

}
