import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PostCashService {

  private link = "https://mysentool.pro/index.php";

  private headers:HttpHeaders;
  private token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  public datas:any;


  constructor(private http:HttpClient) {
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  public rechargementespece(tel_destinataire : string, montant : string): Observable<any>  {
    var reEspParams = {token:this.token, tel_destinataire: tel_destinataire, montant: montant} ;
    let params="params="+JSON.stringify(reEspParams);
    let link=this.link+"/postcash-sen/rechargementespece";
    return this.http.post(link,params,{headers:this.headers})
  }

  public achatcodewoyofal(montant : string, compteur : string):Observable<any>{
    var reEspParams = {token:this.token, montant: montant, compteur: compteur} ;
    let params="params="+JSON.stringify(reEspParams);
    let link=this.link+"/postcash-sen/achatcodewoyofal";
    return this.http.post(link,params,{headers:this.headers})
  }

  public reglementsenelec(police : string, num_facture : string, montant : any): Observable<any>  {
    var reEspParams = {token:this.token, police: police, num_facture: num_facture,  montant : montant} ;
    let link=this.link+"/postcash-sen/reglementsenelec";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(link,params,{headers:this.headers})
  }

  public detailfacturesenelec(police : string, num_facture : string): Observable<any>  {
    var reEspParams = {token:this.token, police: police, num_facture: num_facture} ;
    let link=this.link+"/postcash-sen/detailfacturesenelec";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(link,params,{headers:this.headers})
  }

  public achatjula(mt_carte : string, nb_carte : string): Observable<any>  {
    var reEspParams = {token:this.token, mt_carte: mt_carte, nb_carte: nb_carte} ;
    let link=this.link+"/postcash-sen/achatjula";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(link,params,{headers:this.headers})
  }

  public payeroolusolar(tel_destinataire : string, numcompte : string, montant : string): Observable<any>  {
    var reEspParams = {token:this.token, tel: tel_destinataire, numcompte: numcompte, mtt: montant} ;
     let params="params="+JSON.stringify(reEspParams);
     let link=this.link+"/postcash-sen/oolusolar";
    return this.http.post(link,params,{headers:this.headers})
  }

  public retraitespece(tel_destinataire : string, montant : string): Observable<any>  {
    let links = "http://localhost/kheuteuteupeuseu/index.php";
    var reEspParams = {token:this.token, tel_destinataire: tel_destinataire, montant: montant} ;
    let params="params="+JSON.stringify(reEspParams);
    let link= links+"/postcash-sen/retraitespece";
    return this.http.post(link,params,{headers:this.headers})
  }

  public debitercarte(tel_destinataire : string, montant : string,code : string): Observable<any>  {
    let links = "http://localhost/kheuteuteupeuseu/index.php";
    var reEspParams = {token:this.token, tel_destinataire: tel_destinataire, montant: montant} ;
    let params="params="+JSON.stringify(reEspParams);
    let link= links+"/postcash-sen/debitercarte";
    return this.http.post(link,params,{headers:this.headers})
  }

  public codeValidation(tel_destinataire : string, montant : string): Observable<any>  {
    let links = "http://localhost/kheuteuteupeuseu/index.php";
    var reEspParams = {token:this.token, tel_destinataire: tel_destinataire, montant: montant} ;
    let params="params="+JSON.stringify(reEspParams);
    let link= links+"/postcash-sen/codevalidation";
    return this.http.post(link,params,{headers:this.headers})
  }


}
