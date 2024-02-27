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
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SharedModule } from './common/shared.module';


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
    LoadingSpinnerComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    TableComponent,
    TableRowComponent,
    ToggleButtonComponent,
    PaginatorComponent,
    BarChartComponent,
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
    FormsModule,
    SharedModule
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
    LoadingSpinnerComponent,
    RadioButtonComponent,
    RadioGroupComponent,
    ToggleButtonComponent,
    PaginatorComponent,
    BarChartComponent,
  ]
})
export class AccediaAngularComponentsModule { }
