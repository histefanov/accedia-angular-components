import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { Position } from './types';

@Component({
  selector: 'acc-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() text: string;
  @Input() position: Position = 'bottomRight';
  @Input() additionalShowCondition: boolean = true;
  @Input() top: string;
  @Input() autoSize: boolean;
  @Input() zIndex: number = 10;
  @Input() tooltipWidth: number;

  public showContent = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.showContent = !this.showContent;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showContent = false;
  }

  @HostListener('click') click() {
    this.showContent = !this.showContent;
  }
}
