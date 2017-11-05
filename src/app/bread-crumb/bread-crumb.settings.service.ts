import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadCrumbSettingsService {

  settings: any = {};

  getBreadCumbSettings(routeName: string) {

    switch (routeName) {
      case "main": {
        this.settings = {
          "businessProcess": "Supplier",
          "currentName" : ""
        };

        break;
      }
      case "main:id": {
        this.settings = {
          "businessProcess": "Supplier"
        };

        break;
      }
    }

    return this.settings;

  }
}
