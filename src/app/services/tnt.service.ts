
import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class TntResponse{
  id_abonnement: number ;
  prenom: string ;
  nom: string ;
  tel: string ;
  adresse: string ;
  region: string ;
  city: string ;
  cni: string ;
  n_chip : string ;
  n_carte : string ;
  date_abonnement: string ;
  duree : string ;
  id_typeabonnement : string ;
  montant : number ;
  id_operateur : number;
  etat : number ;
  id_activateur: number ;
  date_activation: string;
  etat_reclamation : string;
  datefinactivation : string ;
}




@Injectable()
export class TntService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private token:any;

  constructor(private http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.token = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }

  public listAbonnement(token : string) : Observable<TntResponse[]> {
      let reEspParams = {token:token} ;
      let link=this.link+"/apitnt/listabonnement";
      console.log(link);
      let params="params="+JSON.stringify(reEspParams);
      return this.http.post(link,params,{headers:this.headers}).pipe(
        map((res:TntResponse[]) =>res)
      )
  }

  public listeVenteDecods(token : string) : Observable<{}[]> {
      let reEspParams = {token:token} ;
      let link=this.link+"/apitnt/listeventedecodeur";
      console.log(link);
      let params="params="+JSON.stringify(reEspParams);
      return this.http.post(link,params,{headers:this.headers}).pipe(
        map((res:{}[]) =>res)
      )
  }

  public listerVenteCartes(token : string) : Observable<{}[]> {
      let reEspParams = {token:token} ;
      let link=this.link+"/apitnt/listeventecarte";
      console.log(link);
      let params="params="+JSON.stringify(reEspParams);
      return this.http.post(link,params,{headers:this.headers}).pipe(
        map((res:{}[]) =>res)
      )
  }

  public checkNumber(token : string, chipOrCardNum: string) : Observable<TntResponse> {
    let params="params="+JSON.stringify({token:token,numeroCarteChip:chipOrCardNum});
    let link=this.link+"/apitnt/checkNumber";
    console.log(link);
    return this.http.post(link,params,{headers:this.headers}).pipe(
      map((res:TntResponse) =>res)
    )
  }

  public abonner(token:string, prenom:string, nom:string, tel:string, cni:string, numerochip:string, numerocarte:string, duree:number, typedebouquet:number) : Observable<any> {
      let montant : number = 0 ;
      if(typedebouquet==1) montant = 5000;
      if(typedebouquet==2) montant = 3000;
      if(typedebouquet==3) montant = 8000;
      montant = duree*montant ;

      let reEspParams = {token:token, prenom:prenom, nom:nom, tel:tel, adresse:'', region:'', city:'', cni:cni, numerochip:numerochip, numerocarte:numerocarte, duree:duree, typedebouquet:typedebouquet, montant:montant} ;
      let link=this.link+"/apitnt/abonner";
      console.log(link);
      let params="params="+JSON.stringify(reEspParams);
      return this.http.post(link,params,{headers:this.headers})
  }

  public vendreDecodeur(token, prenomNewClient, nomNewClient, telNewClient, adresseNewClient, regionNewClient, cniNewClient, nchipNewClient, ncarteNewClient, nbmNewClient, typedebouquet, prix) : Observable<String> {
      let reEspParams = {token:token, prenom:prenomNewClient, nom:nomNewClient, tel:telNewClient, adresse:adresseNewClient, region:regionNewClient, cni:cniNewClient, numerochip:nchipNewClient, numerocarte:ncarteNewClient, typedebouquet:typedebouquet, prix:prix} ;
      let link=this.link+"/apitnt/ventedecodeur";
      console.log(link);
      let params="params="+JSON.stringify(reEspParams);
      return this.http.post(link,params,{headers:this.headers}).pipe(
        map((res:String) =>res)
      )
  }

  public vendreCarte(token, prenomNewClient, nomNewClient, telNewClient, adresseNewClient, regionNewClient, cniNewClient, ncarteNewClient, prix) : Observable<String> {
      let reEspParams = {token:token, prenom:prenomNewClient, nom:nomNewClient, tel:telNewClient, adresse:adresseNewClient, region:regionNewClient, cni:cniNewClient, numerocarte:ncarteNewClient, prix:prix} ;
      let params:{}[] = [] ;
      params["params"] = reEspParams ;
      return this.http.post('http://127.0.0.1/test/listtnt.php',reEspParams).pipe(
        map((res:String) =>res)
      )
  }

}
