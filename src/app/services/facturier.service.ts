import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class FacturierService {

  private link = "https://mysentool.pro/index.php";


  private headers:HttpHeaders;
  private token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;



  constructor(private http:HttpClient) {
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  public paimentsde(montant : number, reference_client : string,reference_facture :string ,service :string) : Observable<any> {
    let reEspParams = {token:this.token, reference_client:reference_client,reference_facture:reference_facture, service:service, montant : montant} ;
    let url=this.link+"/facturier-sen/reglementsde";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public detailreglementsde(reference_client:string):Observable<any>{
    let reEspParams={token:this.token,reference_client:reference_client};
    let url=this.link+"/facturier-sen/detailreglementsde";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public validerrapido(telephone:string,montant:string,badge:string):Observable<any>{
    let reEspParams={token:this.token,telephone:telephone,montant:montant,badge:badge};
    let url=this.link+"/facturier-sen/achatrapido";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public validerwoyofal(montant:string,compteur:string):Observable<any>{
    let reEspParams={token:this.token,montant:montant,compteur:compteur};
    let url=this.link+"/facturier-sen/achatcodewoyofal";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public detailfacturesenelec(police:string,numfacture:string):Observable<any>{
    let reEspParams={token:this.token,police:police,num_facture:numfacture};
    let url=this.link+"/facturier-sen/detailreglementsenelec";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public validerpaimentsenelec(montant:number,police:string,num_facture:string,service:string):Observable<any>{
    let reEspParams={token:this.token,montant:montant,police:police,num_facture:num_facture,service:service};
    let url=this.link+"/facturier-sen/reglementsenelec";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public payeroolusolar(tel:string,numcompte:string,mtt:string):Observable<string>{
    let reEspParams={token:this.token,tel:tel,numcompte:numcompte,mtt:mtt};
    let url=this.link+"/facturier-sen/paiementoolusolar";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers}).pipe(
      map((resp:string) => resp)
    )
  }

}
