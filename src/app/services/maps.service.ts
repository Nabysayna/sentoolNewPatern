import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MapsService {


  private link = "https://mysentool.pro/index.php";

  private headers:HttpHeaders;
  private token : string = JSON.parse(sessionStorage.getItem('currentUser')).baseToken ;
  public datas:any;


  constructor(private http:HttpClient) {
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  public listmaps(type : string): Observable<any>  {
    let params="params="+JSON.stringify({token: this.token, type: type});
    let link=this.link+"/maps-sen/listmaps";
    return this.http.post(link,params,{headers:this.headers})
  }

  public listmapsdepart(type : string): Observable<any>  {
    let params="params="+JSON.stringify({token: this.token, type: type});
    let link=this.link+"/maps-sen/listmapsdepart";
    return this.http.post(link,params,{headers:this.headers})
  }

  public listmapspardepart(type : string): Observable<any>  {
    let params="params="+JSON.stringify({token: this.token, type: type});
    let link=this.link+"/maps-sen/listmapspardepart";
    return this.http.post(link,params,{headers:this.headers})
  }

}
