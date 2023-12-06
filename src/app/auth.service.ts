import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLoggedIn = false;

  constructor() { }
  login(userName:string,password:string):Observable<any>{
    if(userName === 'demo' && password === 'password'){
      this.userLoggedIn = true;
      return of(this.userLoggedIn).pipe(delay(1000));

    }
    else{
      return of(false).pipe(delay(1000))
    }
  }
  logout(): void{
    this.userLoggedIn = false;
  }
  isLoggedIn():boolean{
    return this.userLoggedIn;
  }
}
