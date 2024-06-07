import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageChangeEvent } from '../../common/interfaces';

const NO_ITEMS_LABEL: string = '0 of 0';
const MIN_EFFECTIVE_PAGE_BUTTONS_COUNT = 3;
const DEFAULT_PAGE_BUTTONS_COUNT = 5;
const DEFAULT_PAGE_SIZE = 10;
const MIN_PAGE_SIZE = 1;

@Component({
  selector: 'acc-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() disabled: boolean = false;
  @Input() hidePageButtons: boolean = false;
  @Input() itemsLength: number = 0;
  @Input() pageIndex = 0;
  @Input() showFirstLastButtons: boolean = true;
  @Input() showPageSize: boolean = true;
  @Input() showRange: boolean = true;

  @Input()
  get pageButtonsCount(): number {
    return this._pageButtonsCount;
  }
  set pageButtonsCount(count: number) {
    this._pageButtonsCount = Math.max(count, MIN_EFFECTIVE_PAGE_BUTTONS_COUNT);
  }

  @Input() 
  get pageSize(): number {
    return this._pageSize;
  }
  set pageSize(size: number) {
    this._pageSize = Math.max(size, MIN_PAGE_SIZE);
  }
  
  @Input()
  get pageSizeOptions(): number[] | undefined {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(pagesArray: number[] | undefined) {
    this._pageSizeOptions = pagesArray?.filter(n => n >= MIN_PAGE_SIZE);
  }

  @Output() pageChange = new EventEmitter<PageChangeEvent>();

  get numberOfPages(): number {
    return Math.ceil(this.itemsLength / this.pageSize);
  }

  get hasPrevious(): boolean {
    return this.pageIndex > 0;
  }

  get hasNext(): boolean {
    return (this.pageIndex + 1) < this.numberOfPages;
  }

  private _pageButtonsCount: number = DEFAULT_PAGE_BUTTONS_COUNT;
  private _pageSize: number;
  private _pageSizeOptions?: number[];
  
  ngOnInit(): void {
    if (this.pageSizeOptions && this.pageSizeOptions.length > 0) {
      this._pageSize = this.pageSizeOptions[0];
      this._emitChanges();
    }
  }

  changePageSize(changeEvent: any) {
    const newPageSize = changeEvent.target.value ?? DEFAULT_PAGE_SIZE;
    const currentFirstItemIndex = this.pageIndex * this.pageSize;
    this.pageIndex = Math.floor(currentFirstItemIndex / newPageSize);
    this.pageSize = newPageSize;
    this._emitChanges();
  }

  getRangeLabel(): string {
    if (this.itemsLength <= 0) {
      return NO_ITEMS_LABEL;
    }

    const firstOfPage = this.pageIndex * this.pageSize + 1;
    const lastOfPage = Math.min((this.pageIndex + 1) * this.pageSize, this.itemsLength);

    return `${firstOfPage} – ${lastOfPage} of ${this.itemsLength}`;
  }

  goToNext() {
    if (this.hasNext) {
      this.pageIndex++;
      this._emitChanges();
    }
  }

  goToPrevious() {
    if (this.hasPrevious) {
      this.pageIndex--;
      this._emitChanges();
    }
  }

  goToFirst() {
    if (this.hasPrevious) {
      this.pageIndex = 0;
      this._emitChanges();
    }
  }

  goToLast() {
    if (this.hasNext) {
      this.pageIndex = this.numberOfPages - 1;
      this._emitChanges();
    }
  }

  goTo(page: number) {
    if (page > 0 && page <= this.numberOfPages) {
      this.pageIndex = page - 1;
      this._emitChanges();
    }
  }

  getPageNumbersInRange(): number[] {
    const currentPage = this.pageIndex + 1;
    const pagesArray: number[] = [this.pageIndex + 1];

    let precedingMargin = 1;
    let succeedingMargin = 1;

    for (let i = 1; i <= Math.floor(this.pageButtonsCount / 2); i++) {
      if (currentPage - precedingMargin > 0) {
        pagesArray.unshift(currentPage - precedingMargin);
        precedingMargin++;
      } else if (currentPage + succeedingMargin <= this.numberOfPages) {
        pagesArray.push(currentPage + succeedingMargin);
        succeedingMargin++;
      }
      if (currentPage + succeedingMargin <= this.numberOfPages) {
        pagesArray.push(currentPage + succeedingMargin);
        succeedingMargin++;
      } else if (currentPage - precedingMargin > 0) {
        pagesArray.unshift(currentPage - precedingMargin);
        precedingMargin++;
      }
    }

    if (this.pageButtonsCount % 2 === 0) {
      if (pagesArray[pagesArray.length - 1] < this.numberOfPages && this.pageButtonsCount > MIN_EFFECTIVE_PAGE_BUTTONS_COUNT) {
        pagesArray.pop();
      } else if (pagesArray.length > this.pageButtonsCount) {
        pagesArray.shift();
      }
    }

    return pagesArray;
  }

  private _emitChanges() {
    this.pageChange.emit({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      itemsLength: this.itemsLength
    });
  }
}
