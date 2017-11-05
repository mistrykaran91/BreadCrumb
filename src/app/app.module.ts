import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from "./index/index.component";
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { CanActivateChildGuard } from './guards/can-activate.child.guards';
import { BreadCrumbSettingsService } from './bread-crumb/bread-crumb.settings.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BreadCrumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "app",
        component: IndexComponent,
        children: [
          {
            path: "children1",
            loadChildren: "./children1/children1.module#Children1Module"
          },
          {
            path: "children2",
            loadChildren: "./children2/children2.module#Children2Module"
          }
        ],
        canActivateChild: [CanActivateChildGuard]
      },
      {
        path: "",
        redirectTo: "/app",
        pathMatch: "full"
      }
    ])
  ],
  providers: [
    CanActivateChildGuard,
    BreadCrumbSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
