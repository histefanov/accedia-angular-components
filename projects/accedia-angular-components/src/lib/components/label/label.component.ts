import { Component, Input } from '@angular/core';

@Component({
  selector: 'acc-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() formElementId?: string;
  @Input() withAsterisk: boolean = false;
}
