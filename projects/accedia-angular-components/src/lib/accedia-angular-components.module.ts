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
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AccediaAngularComponentsComponent,
    ButtonComponent,
    ExpandableArrowComponent,
    ExpandableContainerComponent,
    ExpandableWrapperComponent,
    AdditionalInfoComponent,
    DatepickerComponent,
    ModalComponent
  ],
  imports: [
    ProgressBarComponent,
    ExpandableArrowComponent,
    ExpandableContainerComponent,
    ExpandableWrapperComponent,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AdditionalInfoComponent,
    BrowserAnimationsModule,
    MatNativeDateModule,
  ],
  exports: [
    ProgressBarComponent,
    ExpandableArrowComponent,
    ExpandableContainerComponent,
    ExpandableWrapperComponent,
    AdditionalInfoComponent,
    ButtonComponent
  ]
})
export class AccediaAngularComponentsModule { }
