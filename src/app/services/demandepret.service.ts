import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


export class Demandepret{
  plafond:number;
}

@Injectable()
export class DemandepretService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;
  private basetoken:any;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
    this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).baseToken;
  }


  demandepret(): Observable<any> {
    let url = this.link+"/demandepret-sen/demandepret";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  consulterpret(): Observable<any> {
    let url = this.link+"/demandepret-sen/consulterpret";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  envoyerDemandeDepretCofina(data:any): Observable<any> {
    let url = this.link+"/demandepret-sen/envoyerDemandeDepretCofina";
    let datas = JSON.stringify({requestParam : data, tokenParam : JSON.parse(sessionStorage.getItem('currentUser')).baseToken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  ajoutdemandepret(data:any): Observable<any> {
    let url = this.link+"/demandepret-sen/ajoutdemandepret";
    let datas = JSON.stringify({ token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, montantdemande: data.montantdemande});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

}
