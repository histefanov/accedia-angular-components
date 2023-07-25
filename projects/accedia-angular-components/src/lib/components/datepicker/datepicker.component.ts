import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Injector,
  Input,
  ViewChild,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'acc-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent implements ControlValueAccessor {
  public _swapOpenDirection = false;
  @Input() label: string = 'From: ';
  @Input() isDisabled: boolean = false;
  @Input() withAsterisk: boolean = false;


  @Input() set swapOpenDirection(val: boolean) {
    console.log(val)
    if (val) {
      this._swapOpenDirection = true;
      this.offsetCalendarOpenPosition = -(this.calendarWidth - this.dateWidth) + 'px';
    } else {
      this._swapOpenDirection = false;
      this.offsetCalendarOpenPosition = (this.calendarWidth - this.dateWidth) + 'px';
    }
  }
  public get swapOpenDirection() {
    return this._swapOpenDirection;
  }
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() calendarWidth: number = 320;
  @Input() dateWidth: number = 200;
  public control: FormControl;
  public subs = new Subscription();
  public isCalendarOpen = false;
  private _value: Date;
  public windowWidth: number;
  public paddingSizes: 32;
  public offsetCalendarOpenPosition: string;


  @ViewChild('dateContainer') dateContainer: ElementRef;

  public get value(): Date {
    return this._value || new Date();
  }

  @Input() public set value(value: Date) {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMins = currentDate.getMinutes();
    value.setHours(currentHours);
    value.setMinutes(currentMins);
    this._value = value;
    this.propagateChange(value);
    this.isCalendarOpen = false;
  }

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) { }

  toggleCalendar() {
    const tabletWidth = 720;
    this.windowWidth = window.innerWidth > tabletWidth ? tabletWidth : window.innerWidth;
    if (!this.isDisabled) {
      this.isCalendarOpen = !this.isCalendarOpen;
    }
  }

  @HostListener('document:click', ['$event']) click(event: any) {
    const target = event.target as HTMLElement;
    const calendarClick = target.classList.contains('mat-calendar-body-cell-content');
    const isInsideClick = this.elementRef.nativeElement.contains(event.target);
    if (this.isCalendarOpen) {
      this.isCalendarOpen = isInsideClick || calendarClick ? this.isCalendarOpen : false;
    }
  }

  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }

  private propagateChange: Function = (_: string) => { };
  private propagateTouch: Function = (_: string) => { };

  public writeValue(obj: any): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public onBlur(): void {
    this.propagateTouch();
  }
}
