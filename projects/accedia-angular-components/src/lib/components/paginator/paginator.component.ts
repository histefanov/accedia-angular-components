import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';
import { staggerFadeIn } from '../../common/animation.constants';

@Component({
  selector: 'acc-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  animations: [staggerFadeIn]
})
export class PaginatorComponent {
  @Input() pageNumber: number = 1;
  @Input() totalPages: number;
  @Output() pageNumberChange = new EventEmitter<number>();

  constructor(public breakpointService: BreakpointService) {}

  get hasPrevious(): boolean {
    return this.pageNumber > 1;
  }

  get hasNext(): boolean {
    return this.pageNumber < this.totalPages;
  }

  previous() {
    if (this.hasPrevious) {
      this.pageNumberChange.emit(--this.pageNumber);
    }
  }

  next() {
    if (this.hasNext) {
      this.pageNumberChange.emit(++this.pageNumber);
    }
  }
}
