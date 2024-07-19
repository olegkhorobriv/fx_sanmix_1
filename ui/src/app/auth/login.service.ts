import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginModel} from "../../../../@libs/models/login.model";
import {RegisterModel} from "../../../../@libs/models/register.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public constructor(private http: HttpClient) {}

  public login(data: LoginModel): Observable<any> {
    return this.http.post<any>(`/api/user/login`, {data});
  }

  public register(data: RegisterModel): Observable<any> {
    return this.http.post<any>(`/api/user/register`, {data});
  }
}
