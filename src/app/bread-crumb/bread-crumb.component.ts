import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanActivateChildGuard } from '../guards/can-activate.child.guards';
import { BreadCrumbSettingsService } from './bread-crumb.settings.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html'
})
export class BreadCrumbComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  currentRoute: any;
  currentSettings: any;

  constructor(
    private canActivateChildGuard: CanActivateChildGuard,
    private breadCrumbSettings: BreadCrumbSettingsService) { }

  ngOnInit() {
    this.subscription = this.canActivateChildGuard.aapRouteChange
      .subscribe((data) => {
        debugger;
        this.currentRoute = data;
        this.currentSettings = this.breadCrumbSettings.getBreadCumbSettings(this.currentRoute);
      });
  }

  ngOnDestroy(): void {
    debugger;
    this.subscription.unsubscribe();
  }

}
