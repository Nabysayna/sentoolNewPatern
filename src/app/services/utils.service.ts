import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UtilsService {

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  getRegion(): Observable<any>{
    let url = this.link+"/utils-crm/region";
    let datas = JSON.stringify({});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  getZoneByRegion(region:string): Observable<any>{
    let url = this.link+"/utils-crm/zone";
    let datas = JSON.stringify({region:region});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  getSouszoneByZoneByRegion(data:any): Observable<any>{
    let url = this.link+"/utils-crm/souszonebyzonebyregion";
    let datas = JSON.stringify(data);
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  getOnePointSuivicc(data:any): Observable<any>{
    let url = this.link+"/utils-sen/getdetailonepointsuivisentool";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, data:data});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  recupererInfosCC(): Observable<any>{
    let url = this.link+"/utils-sen/initajoutdeposit";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  demandedeposit(data:any): Observable<any>{
    let url = this.link+"/utils-sen/demndedeposit";
    let datas = JSON.stringify(data);
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  consulterLanceurDalerte(): Observable<any>{
    let url = this.link+"/utils-sen/consulterLanceurDalerte";
    let datas = JSON.stringify({});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  isDepotCheckAuthorized(): Observable<any>{
    let url = this.link+"/utils-sen/isDepotCheckAuthorized";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken});
    let params = 'requestParam='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  checkCaution(): Observable<any>{
    let url = this.link+"/utils-sen/checkCaution";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken});
    let params = 'requestParam='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  getDetailOnePointSuivicc(data:any): Observable<any>{
    let url = this.link+"/apiplatform/getdetailonepointsuivicc";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, data:data});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  recordGeospatialCoords(data:any): Observable<any>{
    let url = this.link+"/utils-sen/geolocationRegistration";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, geoposition:data});
    let params = 'params='+datas;
    return this._http.post(url,params,{headers:this.headers})
  }


}
