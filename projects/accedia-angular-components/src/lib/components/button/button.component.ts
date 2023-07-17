import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'acc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() backgroundColor?: string;
  @Input() disabled: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() title?: string;
  @Input() variant: 'filled' | 'outlined' = 'filled';
  @Output() click = new EventEmitter();

  getInputStyles(): { [key: string]: string } | null {
    if (this.backgroundColor && !this.disabled) {
      return this.variant === 'filled'
        ? {
            'background-color': this.backgroundColor,
            'border-color': this.backgroundColor,
          }
        : {
            'border-color': this.backgroundColor,
            'color': this.backgroundColor,
          };
    }
    return null;
  }
}
