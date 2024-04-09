import { Component, Input } from '@angular/core';

@Component({
  selector: 'acc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() title?: string;
}
