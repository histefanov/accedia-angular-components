import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { RadioButtonCheckboxType, RadioButtonLabelPosition, RadioButtonVariant } from '../../common/types';
import { CHECK_SYMBOL_DOT, POSITION_AFTER, VARIANT_STANDARD } from '../../common/constants';

// Increasing integer for generating unique ids for all afc-radio-button instances.
let nextUniqueId = 0;

@Component({
  selector: 'acc-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  public variant: RadioButtonVariant = VARIANT_STANDARD;
  public labelPosition: RadioButtonLabelPosition = POSITION_AFTER;
  public checkboxType: RadioButtonCheckboxType  = CHECK_SYMBOL_DOT;

  @Input() value: string;

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(newCheckedState: boolean) {
    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;
      console.log(this);
      console.log(this.radioGroup);
      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      }
      this.markForCheck();
    }
  }

  @Input()
  get disabled(): boolean {
    return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
  }
  set disabled(newValue: boolean) {
    this._disabled = newValue;
  }

  @Input()
  get id(): string {
    return this._id || this.autoId;
  }
  set id(value: string) {
    this._id = value;
  }

  @ViewChild('input') inputElement: ElementRef<HTMLInputElement>;

  private autoId: string = `afc-radio-${++nextUniqueId}`;
  private _id: string;
  private _checked: boolean = false;
  private _disabled: boolean = false;

  constructor(private radioGroup: RadioGroupComponent, private changeDetector: ChangeDetectorRef) {}

  get inputId(): string {
    return `${this.id}-input`;
  }

  ngOnInit() {
    if (this.value) {
      this.checked = this.radioGroup.value === this.value;
    }

    this.variant = this.radioGroup.variant;
    this.labelPosition = this.radioGroup.labelPosition;
    this.checkboxType = this.radioGroup.checkboxType;
    console.log(this.checked);
  }

  markForCheck() {
    this.changeDetector.markForCheck();
  }

  onTouchTargetClick(event: Event) {
    this.onChange(event);

    // Since the click comes from the touch target, we need
    // to focus the native input element manually.
    this.inputElement.nativeElement.focus();
  }

  onBlur(): void {
    this.radioGroup.propagateTouch();
  }

  onChange(event: Event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      this.checked = true;
    }
  }
}
