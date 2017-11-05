import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateChildGuard implements CanActivateChild {

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

  //   debugger;

  //   return true;
  // }

  private routeChange: Subject<string> = new Subject<string>();
  aapRouteChange = this.routeChange.asObservable();
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    debugger;

    this.routeChange.next(childRoute.routeConfig.path);

    return true;
  }

}
