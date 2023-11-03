import { Component, Input } from '@angular/core';
import { InlineStyle } from '../../common/types';

@Component({
  selector: 'acc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableHeaders: string[] = [];
  @Input() theadColor?: string;
  @Input() theadBackgroundColor?: string;

  getInputStyles(): InlineStyle {
    let style: InlineStyle = {};

    if (this.theadColor) {
      style['color'] = this.theadColor;
    }

    if (this.theadBackgroundColor) {
      style['background-color'] = this.theadBackgroundColor;
    }

    return style;
  }
}
