import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, VARIANT_FILLED, VARIANT_OUTLINED } from '../../common/constants';
import { InlineStyle } from '../../common/types';

@Component({
  selector: 'acc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color?: string;
  @Input() disabled: boolean = false;
  @Input() size: typeof SIZE_SMALL | typeof SIZE_MEDIUM | typeof SIZE_LARGE = SIZE_MEDIUM;
  @Input() title?: string;
  @Input() variant: typeof VARIANT_FILLED | typeof VARIANT_OUTLINED = VARIANT_FILLED;
  @Output() click = new EventEmitter();

  getInputStyles(): InlineStyle {
    let style: InlineStyle = {};

    if (this.color && !this.disabled) {
      style['border-color'] = this.color;

      if (this.variant === VARIANT_FILLED) {
        style['background-color'] = this.color;
      } else {
        style['color'] = this.color;
      }
    }
    
    return style;
  }
}
