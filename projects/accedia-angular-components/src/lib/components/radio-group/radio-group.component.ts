import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import {
  RadioButtonCheckboxType,
  RadioButtonLabelPosition,
  RadioButtonVariant,
  RadioGroupDirection,
} from '../../common/types';
import {
  CHECK_SYMBOL_DOT,
  DIRECTION_COLUMN,
  POSITION_AFTER,
  VARIANT_STANDARD,
} from '../../common/constants';

@Component({
  selector: 'acc-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent implements ControlValueAccessor {
  @Input() checkboxType: RadioButtonCheckboxType = CHECK_SYMBOL_DOT;
  @Input() direction: RadioGroupDirection = DIRECTION_COLUMN;
  @Input() label: string;
  @Input() labelPosition: RadioButtonLabelPosition = POSITION_AFTER;
  @Input() variant: RadioButtonVariant = VARIANT_STANDARD;
  @Input() withAsterisk: boolean = false;

  @Input()
  get value(): string | null {
    return this._value;
  }
  set value(newValue: string | null) {
    if (this._value !== newValue) {
      this._value = newValue;
      this.updateRadioButtonsState();
      this.propagateChange(this._value);
    }
  }

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(newValue: boolean) {
    this._disabled = newValue;
    this.markRadiosForCheck();
  }

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter();
  
  @ContentChildren(forwardRef(() => RadioButtonComponent), {
    descendants: true,
  })
  radios: QueryList<RadioButtonComponent>;

  get selected() {
    return this._selected;
  }
  set selected(newSelected: RadioButtonComponent | null) {
    this._selected = newSelected;
    this.value = newSelected ? newSelected.value : null;
  }

  propagateChange: Function = (_: string) => {};
  propagateTouch: Function = (_: string) => {};

  private _value: string | null;
  private _selected: RadioButtonComponent | null = null;
  private _disabled: boolean = false;

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  emitChangeEvent(): void {
    this.valueChange.emit(this._value);
  }

  markRadiosForCheck() {
    if (this.radios) {
      this.radios.forEach((radio) => radio.markForCheck());
    }
  }

  private updateRadioButtonsState(): void {
    this.radios?.forEach((radio) => {
      console.log(`radio button value: ${radio.value}`);
      radio.checked = this._value === radio.value;
      if (radio.checked) {
        this._selected = radio;
      }
    });
  }
}
