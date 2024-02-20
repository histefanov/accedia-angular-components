import { Component, EventEmitter, Input, Output } from '@angular/core';
import { POSITION_BEFORE, SIZE_MEDIUM, VARIANT_FILLED } from '../../common/constants';
import { ButtonIconPosition, ButtonSize, ButtonVariant, InlineStyle } from '../../common/types';

@Component({
  selector: 'acc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color?: string;
  @Input() disabled: boolean = false;
  @Input() iconPosition: ButtonIconPosition = POSITION_BEFORE;
  @Input() iconSize: number = 14;
  @Input() iconSrc: string;
  @Input() size: ButtonSize = SIZE_MEDIUM;
  @Input() title?: string;
  @Input() variant: ButtonVariant = VARIANT_FILLED;
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
