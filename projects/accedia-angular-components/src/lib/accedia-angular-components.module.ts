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
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { LabelComponent } from './components/label/label.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';


@NgModule({
  declarations: [
    AccediaAngularComponentsComponent,
    ButtonComponent,
    ExpandableArrowComponent,
    ExpandableContainerComponent,
    ExpandableWrapperComponent,
    AdditionalInfoComponent,
    DatepickerComponent,
    ModalComponent,
    InputComponent,
    LabelComponent,
    ValidationErrorComponent,
    TabComponent,
    TabsComponent,
    TooltipComponent,
    RadioButtonComponent,
    RadioGroupComponent
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
    FormsModule
  ],
  exports: [
    ProgressBarComponent,
    ExpandableArrowComponent,
    ExpandableContainerComponent,
    ExpandableWrapperComponent,
    AdditionalInfoComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    ValidationErrorComponent,
    TabComponent,
    TabsComponent,
    TooltipComponent,
    RadioButtonComponent,
    RadioGroupComponent
  ]
})
export class AccediaAngularComponentsModule { }
