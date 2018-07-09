import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ExpressocashService {


  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private token:any;

  constructor(private http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.token = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }


  public cashin(destination: string, amount: string): Observable<any>  {
    let reEspParams = {token:this.token, destination: "221"+""+destination, amount: amount};
    let url=this.link+"/expressocash-sen/cashin";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public cashout(customer: string, amount: string): Observable<any>  {
    let reEspParams = {token:this.token, customer: "221"+""+customer, amount: amount};
    let url=this.link+"/expressocash-sen/cashout";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public confirmCashout(transactionReference: string, OTP: string,montant:number,tel:string): Observable<any>  {
    let reEspParams = {token:this.token,montant:montant,tel:tel, transactionReference: transactionReference, OTP: OTP};
    let url=this.link+"/expressocash-sen/confirmCashout";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public pinCashoutCheck(pin: string): Observable<any>  {
    let reEspParams = {token:this.token, pin: pin};
    let url=this.link+"/expressocash-sen/pinCashoutCheck";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }

  public pinCashout(pin: string, receiverIDNumber: string,Montant:number,Tel:string): Observable<any>  {
    let reEspParams = {token:this.token, pin: pin, receiverIDNumber: receiverIDNumber,montant:Montant,tel:Tel};
    let url=this.link+"/expressocash-sen/pinCashout";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }
  public customerRegistration(Msisdn:string,Id:string,Firstname:string,Lastname:string):Observable<any>{
    let reEspParams={token:this.token,msisdn:Msisdn,id:Id,firstname:Firstname,lastname:Lastname};
    let url="http://127.0.0.1/kheuteuteupeuseu/index.php/expressocash-sen/customerRegistration";
    let params="params="+JSON.stringify(reEspParams);
    return this.http.post(url,params,{headers:this.headers})
  }


}
