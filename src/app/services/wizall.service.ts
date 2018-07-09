import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class WizallService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private token:any;
  public datas:any;

  constructor(private http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.token = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }


  public intouchCashin(frommsisdn : string, tomsisdn : string, amount : number): Observable<any>  {
    let reEspParams = {token:this.token, receiver_phone_number: tomsisdn, amount: amount} ;
    let params="params="+JSON.stringify(reEspParams);
    let link=this.link+"/wizall-sen/intouchCashin";
    return this.http.post(link,params,{headers:this.headers})
  }

  public intouchCashout(usermsisdn : string, amount : number): Observable<any>  {
    let reEspParams = {token:this.token, customer: usermsisdn, amount: amount} ;
    let params="params="+JSON.stringify(reEspParams);
    let link=this.link+"/wizall-sen/intouchCashout";
    return this.http.post(link,params,{headers:this.headers})
  }

  public verifier_code_retraitbon(codebon:any):Observable<any>{
    let link=this.link+"/wizall-sen/verifiercodebonachat";
    let params="params="+JSON.stringify({codebon:codebon,token:this.token});
    return this.http.post(link,params,{headers:this.headers})
  }

  public getSendSecureID(codebon:any):Observable<any>{
    let link=this.link+"/wizall-sen/getSendSecureID";
    let params="params="+JSON.stringify({codebon:codebon,token:this.token});
    return this.http.post(link,params,{headers:this.headers})
  }

  public bonDebitVoucher(data:any):Observable<any>{
    let link=this.link+"/wizall-sen/bonDebitVoucher";
    let params="params="+JSON.stringify({token:this.token,nationalite:data.nationalite,num_card:data.num_card,type_carte:data.type_carte,secure_id:data.codebon,code_validation:data.code_validation, montant:data.montant});
    return this.http.post(link,params,{headers:this.headers})
  }

  public validerenvoiboncash(data:any):Observable<any>{
    let link=this.link+"/wizall-sen/validerenvoiboncash";
    let params="params="+JSON.stringify({token:this.token,model_voucher:"0",requested_value:data.data.montant,customer_phone_number:data.data.telE,customer_first_name:data.data.prenomE,customer_last_name:data.data.nomE,customer_nationality:data.data.nationalite,customer_identity_type:data.data.type_piece,customer_identity_number:data.data.num_card,recipient_phone_number:data.data.telB,recipient_first_name:data.data.prenomB,recipient_last_name:data.data.nomB});
    return this.http.post(link,params,{headers:this.headers})
  }

  public validerbonachat(data:any):Observable<any>{
    let link=this.link+"/wizall-sen/validerenvoibonachat";
    let params="params="+JSON.stringify({token:this.token,data:data});
    return this.http.post(link,params,{headers:this.headers})
  }



}
