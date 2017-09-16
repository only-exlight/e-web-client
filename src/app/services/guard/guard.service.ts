import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router'

@Injectable()
export class GuardService {

  constructor(
    private router: Router
  ) { }

  public canActivate(): boolean {
    if (localStorage.getItem('key')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
