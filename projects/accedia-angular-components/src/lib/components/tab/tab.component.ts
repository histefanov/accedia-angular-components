import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'acc-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input() isActive: boolean = false;
  @Input() label?: string;
  @Input() navSideContent?: TemplateRef<any>;
}
