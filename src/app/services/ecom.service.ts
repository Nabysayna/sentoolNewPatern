import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class Article {
  public id:number;
  public nomImg:string;
  public designation:string;
  public description:string;
  public prix:number;
  public stock:number;
}

export class Commande {
  public id:number;
  public orderedArticles:string;
  public montant:number ;
  public tel:number;
  public pointderecuperation : string ;
  public fullName:string;
  public dateCommande:string;
}

export class Vente {
  public id:number;
  public quantite:number;
  public designation:string;
  public prixUnitaire:number ;
  public tel:number;
  public fullName:string;
  public dateVente:string;
}

export class Coursier{
  public id:number;
  public prenom:string;
  public nom:string;
}


@Injectable()
export class EcomService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private basetoken:any;
  public responseJsoFWS :  Article[];

  constructor(private http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }

  public listeArticles(token : string, type:string) : Observable<Article[]> {
    let reEspParams = {token:token, type:type} ;
    let url=this.link+"/ecom-sen/listerarticle";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:Article[]) =>res)
    )
  }

  public ajouterArticle(requestedValue:{}) : Observable<string> {
    let reEspParams = requestedValue;
    let url=this.link+"/ecom-sen/ajoutarticle";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public commander(requestedValue:{}) : Observable<string> {
    let reEspParams = requestedValue;
    let url=this.link+"/ecom-sen/ajoutcommande";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public receptionnerCommandes(requestParams:{}) : Observable<string> {
    let reEspParams = requestParams;
    let url=this.link+"/ecom-sen/receptionnerCommandes";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public supprimerArticle(requestParams:{}) : Observable<string> {
    let reEspParams = requestParams;
    let url=this.link+"/ecom-sen/supprimerArticle";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public modifierArticle(requestParams:{}) : Observable<string> {
    let reEspParams = requestParams;
    let url=this.link+"/ecom-sen/modifierArticle";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public assignerCourse(requestedValue:{}) : Observable<string> {
    let reEspParams = requestedValue;
    let url=this.link+"/ecom-sen/assignerCourse";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public prendreCommande(requestParams:{}) : Observable<string> {
    let reEspParams = requestParams;
    let url=this.link+"/ecom-sen/prendreCommande";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public fournirCommandes(requestParams:{}) : Observable<string> {
    let reEspParams = requestParams;
    let url=this.link+"/ecom-sen/fournirCommandes";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string) =>res)
    )
  }

  public listerCategorie(token : string) : Observable<string[]> {
    let reEspParams = {token:token};
    let url=this.link+"/ecom-sen/listerCategorie";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:string[]) =>res)
    )
  }

  public listerCommandes(token : string, typeListe : string) : Observable<any> {
    let reEspParams = { token:token, typeListe:typeListe };
    let url=this.link+"/ecom-sen/listercommande";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public listerCoursier(token : string) : Observable<Coursier[]> {
    let reEspParams = {token:token};
    let url=this.link+"/ecom-sen/listerCoursier";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:Coursier[]) =>res)
    )
  }

  public listerVentes(token : string) : Observable<any[]> {
    let reEspParams = {token:token};
    let url=this.link+"/ecom-sen/listervente";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((res:any[]) =>res)
    )
  }

}
