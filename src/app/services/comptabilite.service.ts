import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ComptabiliteService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private basetoken:any;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }

  userexploitation(): Observable<any>{
    let url = this.link+"/comptabilite-sen/userexploitation";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  exploitation(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/exploitation";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv, type: data.type, infotype: data.infotype});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  exploitationaveccommission(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/exploitationaveccommission";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv, type: data.type, infotype: data.infotype});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listevente(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/listevente";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listecharge(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/listecharge";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  ajoutcharge(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/ajoutcharge";
    let datas = JSON.stringify({token:this.basetoken, libelle: data.libelle, idpdv: data.idpdv, service: data.service, montant: data.montant});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  supprimerservice(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/supprimerservice";
    let datas = JSON.stringify({token:this.basetoken, idsupprimer: data.idsupprimer});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  modifierservice(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/modifierservice";
    let datas = JSON.stringify({token:this.basetoken, service: data.service, designations: data.designations, idservice: data.idservice});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  ajoutservice(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/ajoutservice";
    let datas = JSON.stringify({token:this.basetoken, nom: data.nom, idpdv: data.idpdv, designations: data.designations});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  approvisionner(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/approvisionner";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv, montant: data.montant});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listecaisse(): Observable<any>{
    let url = this.link+"/comptabilite-sen/listecaisse";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listeservice(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/listeservice";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listerevenu(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/listerevenu";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listerevenutransfert(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/listerevenutransfert";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  etatcaisse(): Observable<any>{
    let url = this.link+"/comptabilite-sen/etatcaisse";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  validerapprovisionn(data:any): Observable<any>{
    let url = this.link+"/comptabilite-sen/validerapprovisionn";
    let datas = JSON.stringify({token:this.basetoken, idcaisse: data.idcaisse});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }


}
