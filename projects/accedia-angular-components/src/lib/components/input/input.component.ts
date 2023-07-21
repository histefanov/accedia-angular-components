import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  forwardRef,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import {
  INPUT_NUMBER,
  INPUT_PASSWORD,
  INPUT_TEXT,
  STRING_EMPTY,
} from '../../common/constants';

// Increasing integer for generating unique ids for all acc-input instances.
let nextUniqueId = 0;

@Component({
  selector: 'acc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements AfterViewInit {
  public control: FormControl;

  @Input() disabled: boolean = false;
  @Input() label?: string;
  @Input() maxLength: number = 50;
  @Input() placeholder: string = STRING_EMPTY;
  @Input() numberStep?: number;
  @Input() type:
    | typeof INPUT_TEXT
    | typeof INPUT_NUMBER
    | typeof INPUT_PASSWORD = INPUT_TEXT;
  @Input() withAsterisk: boolean = false;

  @Input()
  get id(): string {
    return this._id || this.autoId;
  }
  set id(value: string) {
    this._id = value;
  }

  @Input()
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
    this.propagateChange(value);
  }

  private _id: string;
  private autoId = `acc-input-${nextUniqueId}`;
  private _value: string;

  private propagateChange: Function = (_: string) => {};
  private propagateTouch: Function = (_: string) => {};

  constructor(private injector: Injector, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const ngControl: NgControl = this.injector.get<NgControl>(NgControl);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      this.cdr.detectChanges();
    }
  }

  isInvalid(): boolean {
    return (
      !!this.control &&
      !!this.control.errors &&
      this.control.dirty &&
      this.control.touched
    );
  }

  onBlur(): void {
    this.propagateTouch();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}
