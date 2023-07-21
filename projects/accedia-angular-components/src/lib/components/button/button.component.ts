import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, VARIANT_FILLED, VARIANT_OUTLINED } from '../../common/constants';

@Component({
  selector: 'acc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() backgroundColor?: string;
  @Input() disabled: boolean = false;
  @Input() size: typeof SIZE_SMALL | typeof SIZE_MEDIUM | typeof SIZE_LARGE = SIZE_MEDIUM;
  @Input() title?: string;
  @Input() variant: typeof VARIANT_FILLED | typeof VARIANT_OUTLINED = VARIANT_FILLED;
  @Output() click = new EventEmitter();

  getInputStyles(): InlineStyle {
    let style: InlineStyle = {};

    if (this.backgroundColor && !this.disabled) {
      style['border-color'] = this.backgroundColor;

      if (this.variant === VARIANT_FILLED) {
        style['background-color'] = this.backgroundColor;
      } else {
        style['color'] = this.backgroundColor;
      }
    }
    
    return style;
  }
}
