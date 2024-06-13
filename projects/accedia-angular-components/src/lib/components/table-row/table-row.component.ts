import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tr[acc-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  constructor() { }

  @ContentChild('stickyColumn') public stickyColumn: TemplateRef<any>;
}
