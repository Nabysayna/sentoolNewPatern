import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminpdvService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private basetoken:any;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }

  nombredereclamationpdvvente(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/nombredereclamationpdvvente";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  historiquereclamation(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/historiquereclamation";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listuserpdv(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/listuserpdv";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  modifypdv(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/modifypdv";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv, modifydata: data.modifydata});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  deconnectpdv(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/deconnectpdv";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  autoriservoirdepot(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/autoriservoirdepot";
    let datas = JSON.stringify({token:this.basetoken, idpdv: data.idpdv, estautoriser: data.estautoriser});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  bilandeposit(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/bilandeposit";
    let datas = JSON.stringify({token:this.basetoken, type: data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  demandeRetrait(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/demandeRetrait";
    let datas = JSON.stringify({token:this.basetoken, montant:data.montant});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  validerDemandeDepot(data:any): Observable<any>{
    let url = this.link+"/admindpv-sen/validerDemandeDepot";
    console.log(url);
    let datas = JSON.stringify({token:this.basetoken, montant: data.montant, infocc: data.infocc, infocom: data.infocom});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

}
