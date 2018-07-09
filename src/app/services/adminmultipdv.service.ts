import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AdminmultipdvService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private basetoken:any;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }

  bilandeposit(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/bilandeposit";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  depositinitialconsommeparservice(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/depositinitialconsommeparservice";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  historiquereclamation(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/historiquereclamation";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  demanderetraitfond(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/demanderetraitfond";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  validerretrait(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/validerretrait";
    let datas = JSON.stringify({token:this.basetoken, type:data.type, idretrait: data.idretrait});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listmajcautions(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/listmajcautions";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  modifymajcaution(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/modifymajcaution";
    let datas = JSON.stringify({token:this.basetoken, type:data.type, idadminpdv: data.idadminpdv, modifycaution: data.modifycaution, categorie:data.categorie});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  nombredereclamationagentpdvvente(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/nombredereclamationagentpdvvente";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  activiteservices(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/activiteservices";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  performancesadminclasserbydate(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/performancesadminclasserbydate";
    let datas = JSON.stringify({token:this.basetoken, typedate:data.typedate});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  performancesadminclasserbylotbydate(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/performancesadminclasserbylotbydate";
    let datas = JSON.stringify({token:this.basetoken, typelot:data.typelot, typedate:data.typedate});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  detailperformancesadminclasserbydate(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/detailperformancesadminclasserbydate";
    let datas = JSON.stringify({token:this.basetoken, idadminpdv:data.idadminpdv, typedate:data.typedate});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listmap(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/activiteservices";
    let datas = JSON.stringify({token:this.basetoken, type:data.type});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  listcreditmanager(): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/listcreditmanager";
    let datas = JSON.stringify({token:this.basetoken, type:'me'});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  valideraacreditmanager(data:any): Observable<any>{
    let url = this.link+"/adminmultidpv-sen/ajoutcreditmanager";
    let datas = JSON.stringify({token:this.basetoken, data:data});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }




}
