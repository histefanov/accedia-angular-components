import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'acc-expandable-wrapper',
  templateUrl: './expandable-wrapper.component.html',
  styleUrls: ['./expandable-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandableWrapperComponent {

  @Input() set isExpanded(expanded: boolean) {
    this.isExpanded$.next(expanded);
  }

  public isExpanded$ = new BehaviorSubject<boolean | null>(null);

  toggleIsExpanded() {
    this.isExpanded$
      .pipe(take(1))
      .subscribe((current) => {
        this.isExpanded$.next(!current);
      })
      .unsubscribe();
  }
}
