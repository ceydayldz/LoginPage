import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 

     if (this.authService.isLoggedIn()) {

      return true;
    } else {
      this.router.navigate(['/login']); 
      return false; 
    }
    
    
  }
  isLoggedIn(): boolean {
    // Giriş durumunu kontrol etmek için uygun kodu buraya ekleyin.
    return true; // Örnek olarak her zaman giriş yapmış gibi varsayılan değer.
  }
}

