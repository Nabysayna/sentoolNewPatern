import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TarifsService {

  private link = "https://mysentool.pro/index.php";


  private headers:HttpHeaders;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  getTarifTntAbon(data:any): Observable<any>{
    let url = this.link+"/tf-sen/tntAbon";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, data:data});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers});
  }


}
