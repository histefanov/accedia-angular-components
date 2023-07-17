import { NgModule } from '@angular/core';
import { AccediaAngularComponentsComponent } from './accedia-angular-components.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AccediaAngularComponentsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccediaAngularComponentsComponent
  ]
})
export class AccediaAngularComponentsModule { }
