import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TableRowComponent } from '../table-row/table-row.component';

export interface TableHeaders {
  title: string;
  dataKey: string;
  hasFilter?: boolean;
  keyword?: string;
  sortable?: boolean;
}

@Component({
  selector: 'acc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, OnDestroy, AfterViewInit {
  @ContentChildren(TableRowComponent) row: QueryList<TableRowComponent>;
  @Input() tableHeaders: TableHeaders[];
  @Input() mobileStickyLastColumn: boolean = false;
  public iconSrc = '../../../../assets/images/sort4.svg';
  @Input() variant: 'normal' | 'card' = 'normal';
  @Input() data: T[];
  @Output() filteredData = new EventEmitter<T[]>();
  public lastSort = false;
  public activeSortIndex: number;
  public unfilteredData: T[];
  public tableHeadersPresentation: TableHeaders[];
  private subscriptions = new Subscription();

  constructor() { }
  ngAfterViewInit(): void { }

  ngOnInit() {
    this.unfilteredData = this.data;
    this.tableHeadersPresentation = [...this.tableHeaders];
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private moveLastHeaderToFirstPosition() {
    const lastHeader = this.tableHeadersPresentation.pop();
    if (lastHeader !== undefined) {
      this.tableHeadersPresentation.unshift(lastHeader);
    }
  }

  private restoreInitialHeaders() {
    this.tableHeadersPresentation = [...this.tableHeaders];
  }

  public sort(index: number, header: TableHeaders) {
    if (header.sortable) {
      this.activeSortIndex = index;
      const sortByKey = (arr: any, key: any, sortOrder = 'asc') => {
        arr.sort((a: any, b: any) => {
          const modifier = sortOrder === 'desc' ? -1 : 1;
          if (a[key] < b[key]) return -1 * modifier;
          if (a[key] > b[key]) return 1 * modifier;
          return 0;
        });
      };

      const key = this.tableHeaders[index].dataKey;
      sortByKey(this.data, key, this.lastSort ? 'asc' : 'desc');
      this.lastSort = !this.lastSort;
    }
  }

  onFilterChange(column: any, eventTarget?: any) {
    console.log(column, eventTarget.value);
  }

  applyFilters() {
    let filtered = [...this.unfilteredData];
    this.tableHeaders.forEach((header) => {
      if (header.keyword) {
        const key = header.dataKey as keyof T;
        filtered = filtered.filter(
          (item) => item[key] && (item[key] as string).toLowerCase().includes(header.keyword!.toLowerCase())
        );
      }
    });

    this.filteredData.emit(filtered);
  }
}
