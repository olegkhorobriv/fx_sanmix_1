import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public constructor() {}

  isLoggedIn(): boolean {
    return (this.getToken() ?? '') !== '';
  }

  isAlive(): boolean {
    try {
      const tokenExp = localStorage.getItem('tokenExp');

      if (tokenExp === null) {
        return false;
      }

      const timeNow = new Date();
      const expTime = new Date(tokenExp);
      expTime.setSeconds(expTime.getSeconds() - 60);

      return (timeNow < expTime);
    } catch (e) {
      return false;
    }
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }
}
