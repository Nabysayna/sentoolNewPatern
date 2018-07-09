import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class GestionreportingService {

  private link = "https://mysentool.pro/index.php";
  private headers:HttpHeaders;
  private basetoken:any;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }

  public reportingdate(data:any): Observable<any>{
    let url = this.link+"/gestionreporting-sen/reportingdate";
    let datas = JSON.stringify({token:this.basetoken, idpdv:data.idpdv, type:data.type, infotype:data.infotype});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  public reimpression(data:any): Observable<any>{
    let url = this.link+"/gestionreporting-sen/reimpression";
    let datas = JSON.stringify({token:this.basetoken, idpdv:data.idpdv, operation:data.operation, infooperation:data.infooperation});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  public gestionreporting(): Observable<any>{
    let url = this.link+"/gestionreporting-sen/gestionreporting";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  public servicepoint(): Observable<any>{
    let url = this.link+"/gestionreporting-sen/servicepoint";
    let datas = JSON.stringify({token:this.basetoken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  public ajoutdepense(data:any): Observable<any>{
    let url = this.link+"/gestionreporting-sen/ajoutdepense";
    let datas = JSON.stringify({token:this.basetoken, libelle:data.libelle, service:data.service, montant:data.montant});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  public reclamation(data:any): Observable<any>{
    let url = this.link+"/gestionreporting-sen/reclamation";
    let datas = JSON.stringify({token:this.basetoken, sujet:data.sujet, nomservice:data.nomservice, message:data.message});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  public vente(data:any): Observable<any>{
    let url = this.link+"/gestionreporting-sen/vente";
    let datas = JSON.stringify({token:this.basetoken, servicevente:data.servicevente, designation:data.designation, quantite:data.quantite});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }


}
