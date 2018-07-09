import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TigocashService {

  private link = "https://mysentool.pro/index.php";

  private headers:HttpHeaders;
  private token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  public datas:any;


  constructor(private http:HttpClient) {
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  public requerirControllerTC(requete:any): Observable<any>{
    let params="requestParam="+JSON.stringify({requestParam : requete, tokenParam : this.token});
    let link=this.link+"/tc-sen/requerirControllerTC";
    return this.http.post(link,params,{headers:this.headers})
  }

  public verifierReponseTC(requete:any): Observable<any>{
    let params="requestParam="+JSON.stringify({requestParam : requete, tokenParam : this.token, cacheDisabler : Date.now()});
    let link=this.link+"/tc-sen/verifierReponseTC";
    return this.http.post(link,params,{headers:this.headers})
  }

  public demanderAnnulationTC(requete:any): Observable<any>{
    let params="requestParam="+JSON.stringify({requestParam : requete, tokenParam : this.token});
    let link=this.link+"/tc-sen/demanderAnnulationTC";
    return this.http.post(link,params,{headers:this.headers})
  }

  public retraitaveccodetc(requete:any): Observable<any>{
    let params="requestParam="+JSON.stringify({requestParam : requete, tokenParam : this.token});
    let link=this.link+"/tc-sen/demanderAnnulationTC";
    return this.http.post(link,params,{headers:this.headers})
  }

}
