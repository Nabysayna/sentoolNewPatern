import { Injectable }    from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as sha1 from 'js-sha1';

export class AuthResponse{
  public prenom: string;
  public nom: string;
  public nometps: string;
  public telephone: string;
  public reponse: boolean ;
  public accessLevel: number ;
  public authorizedApis: string ;
  public firstuse: number ;
  public baseToken: string ;
}

@Injectable()
export class AuthService {

  public baseToken: string ;
  public email: string ;
  public prenom: string ;
  public nom: string ;
  public nometps: string ;
  public telephone: string ;
  public accessLevel: number ;
  public authorizedApis: string ;

  private link = "https://mysentool.pro/index.php";
  private headers: HttpHeaders;

  constructor(private _http: HttpClient){
    this.headers =  new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  }

  login(data:any): Observable<any>{
    let url = this.link+"/auth-sen/authentification";
    let datas = JSON.stringify({login:data.login, pwd:sha1(data.pwd)});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
      .pipe(
        map((response:string) => {
          if( response != 'false' ){
            sessionStorage.setItem('headToken', response.split("#")[1] );
            return response;
          } else {
            return "rejected";
          }
          }
        ));
  }

  inscrire(data:any): Observable<any>{
    let url = this.link+"/auth-sen/inscription";
    let datas = JSON.stringify(data);
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  loginPhase2(tokentemporaire:any): Observable<any>{
    let url = this.link+"/auth-sen/authentificationPhaseTwo";
    let datas = JSON.stringify({tokentemporaire:tokentemporaire});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
      .pipe(
        map((response:string) => {
          console.log(response)
            let resp: AuthResponse = JSON.parse(response);
            console.log("11------------");
            console.log(resp);
            console.log(resp.reponse);
            console.log(resp.reponse == true ? 'oui' : 'non')
            console.log("------------11");
            if (resp.reponse == true) {
              this.baseToken = sessionStorage.getItem('headToken') + sha1(resp.baseToken + sha1("bay3k00_f1_n10un"));
              this.email = resp.prenom;
              this.prenom = resp.prenom;
              this.nometps = resp.nometps;
              this.nom = resp.nom;
              this.telephone = resp.telephone;
              this.accessLevel = resp.accessLevel;
              this.authorizedApis = resp.authorizedApis;

              sessionStorage.setItem('currentUser', JSON.stringify({
                username: this.email,
                baseToken: this.baseToken,
                authorizedApis: this.authorizedApis,
                accessLevel: this.accessLevel,
                prenom: this.prenom,
                nom: this.nom,
                telephone: this.telephone,
                firstuse: resp.firstuse
              }));

              return this.accessLevel;
            }
            else {
              return 0;
            }
          }
        ));
  }

  modifpwdinit(data:any): Observable<any>{
    let url = this.link+"/auth-sen/modifpwdinit";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, pwdactuel:data.pwdactuel, newpwd : data.newpwd});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  deconnexion(): Observable<any>{
    let url = this.link+"/auth-sen/deconnexion";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, hdeconnexion:"345"});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  creerProfilCaissier(data:any): Observable<any>{
    let url = this.link+"/auth-sen/creerProfilCaissier";
    let datas = JSON.stringify({token:JSON.parse(sessionStorage.getItem('currentUser')).baseToken, prenom:data.prenom, nom:data.nom, email:data.email, telephone:data.telephone, nometps:data.nometps, nomshop:data.nomshop, adresse:data.adresse});
    let params = 'params='+datas;
    return this._http.post(url, params, {headers:this.headers})
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
  }


}
