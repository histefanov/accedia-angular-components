import { NgModule } from '@angular/core';
import { AccediaAngularComponentsComponent } from './accedia-angular-components.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ExpandableArrowComponent } from './components/expandable/expandable-arrow/expandable-arrow.component';
import { ExpandableContainerComponent } from './components/expandable/expandable-container/expandable-container.component';
import { ExpandableWrapperComponent } from './components/expandable/afc-expandable-wrapper/expandable-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { LabelComponent } from './components/label/label.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';


@NgModule({
  declarations: [
    AccediaAngularComponentsComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    ValidationErrorComponent
  ],
  imports: [
    ProgressBarComponent,
    ExpandableArrowComponent,
    ExpandableContainerComponent,
    ExpandableWrapperComponent,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    ProgressBarComponent,
    ExpandableArrowComponent,
    ExpandableContainerComponent,
    ExpandableWrapperComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    ValidationErrorComponent
  ]
})
export class AccediaAngularComponentsModule { }
