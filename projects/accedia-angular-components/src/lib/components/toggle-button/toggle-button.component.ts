import {
  ChangeDetectorRef,
  Component,
  Input,
  forwardRef,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  toggleBackgroundAnimation,
  toggleButtonAnimation,
} from '../../common/animation.constants';
import {
  ToggleButtonLabelPosition,
  ToggleButtonState,
} from '../../common/types';
import {
  POSITION_ABOVE,
  PRIMARY_COLOR_RED,
  STATE_OFF,
  STATE_ON,
} from '../../common/constants';

@Component({
  selector: 'acc-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  animations: [toggleButtonAnimation, toggleBackgroundAnimation],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true,
    },
  ],
})
export class ToggleButtonComponent {
  @Input() disabled: boolean = false;
  @Input() insideForm = false;
  @Input() label: string;
  @Input() labelPosition: ToggleButtonLabelPosition = POSITION_ABOVE;
  @Input() onStateColor: string = PRIMARY_COLOR_RED;
  @Input() state: ToggleButtonState = STATE_OFF;
  @Input() withAsterisk: boolean = false;

  @Output() toggle = new EventEmitter<ToggleButtonState>();

  public control: FormControl;

  constructor(private injector: Injector, private cdr: ChangeDetectorRef) {}

  public toggleState() {
    this.state = this.state === STATE_ON 
      ? STATE_OFF 
      : STATE_ON;

    this.toggle.emit(this.state);
    this.propagateChange(this.state === STATE_ON);
  }

  public ngAfterViewInit(): void {
    if (this.insideForm) {
      const ngControl: NgControl = this.injector.get<NgControl>(NgControl);
      if (ngControl) {
        this.control = ngControl.control as FormControl;
        this.cdr.detectChanges();
      }
    }
  }

  private propagateChange: Function = (_: string) => {};
  private propagateTouch: Function = (_: string) => {};

  public writeValue(): void {}

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  public onBlur(): void {
    this.propagateTouch();
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }
}
