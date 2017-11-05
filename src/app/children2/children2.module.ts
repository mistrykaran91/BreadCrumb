import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Children2Component } from './children2.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "main", component: Children2Component }
    ])

  ],
  declarations: [
    Children2Component
  ],

})
export class Children2Module { }
