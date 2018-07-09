import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class OrangemoneyService {

  private link = "https://mysentool.pro/index.php";

  private headers:HttpHeaders;
  private token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  public datas:any;


  constructor(private http:HttpClient) {
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  public requerirControllerOM(requete:any): Observable<any>{
    let params="requestParam="+JSON.stringify({requestParam : requete, tokenParam : this.token});
    let link=this.link+"/om-sen/requerirControllerOM";
    return this.http.post(link,params,{headers:this.headers})
  }

  public verifierReponseOM(requete:any): Observable<any>{
    let params="requestParam="+JSON.stringify({requestParam : requete, tokenParam : this.token, cacheDisabler : Date.now()});

    let link=this.link+"/om-sen/verifierReponseOM";
    return this.http.post(link,params,{headers:this.headers})
  }

  public demanderAnnulationOM(requete:any): Observable<any>{
    let params="requestParam="+JSON.stringify({requestParam : requete, tokenParam : this.token});
    let link=this.link+"/om-sen/demanderAnnulationOM";
    return this.http.post(link,params,{headers:this.headers})
  }

  public isDepotCheckAuthorized(): Observable<any>{
    let params="requestParam="+JSON.stringify({token : this.token});
    let link=this.link+"/om-sen/isDepotCheckAuthorized";
    return this.http.post(link,params,{headers:this.headers})
  }


}
