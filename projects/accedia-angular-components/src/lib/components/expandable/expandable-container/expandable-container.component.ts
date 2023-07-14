import { ChangeDetectionStrategy, Component, Host, Input, Optional } from '@angular/core';
import { ExpandableWrapperComponent } from '../afc-expandable-wrapper/expandable-wrapper.component';
import { expandableContainer } from '../../../common/animation.constants';

@Component({
  selector: 'afc-expandable-container',
  templateUrl: './expandable-container.component.html',
  styleUrls: ['./expandable-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandableContainer]
})
export class ExpandableContainerComponent {
  constructor(@Host() @Optional() public wrapper: ExpandableWrapperComponent) { }

  @Input() set isExpanded(expanded: boolean) {
    if (expanded) {
      this.wrapper.toggleIsExpanded();
    }
  }
}
