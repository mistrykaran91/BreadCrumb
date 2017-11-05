import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Children1Component } from './children1.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "main", component: Children1Component },
      { path: "main/:id", component: Children1Component }
    ]),
    FormsModule
  ],
  declarations: [
    Children1Component
  ],

})
export class Children1Module { }
