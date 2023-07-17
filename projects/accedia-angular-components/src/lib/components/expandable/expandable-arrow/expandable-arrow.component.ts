import { ChangeDetectionStrategy, Component, Host, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { expandableArrow } from '../../../common/animation.constants';
import { ExpandableWrapperComponent } from '../afc-expandable-wrapper/expandable-wrapper.component';

export enum AnimationPosition {
  right = 0,
  bottom = 90,
  left = 180,
  top = 270
}

export enum AnimationSpeed {
  normal = 300,
  fast = 200
}

@Component({
  selector: 'afc-expandable-arrow',
  templateUrl: './expandable-arrow.component.html',
  styleUrls: ['./expandable-arrow.component.scss'],
  animations: [expandableArrow]
})
export class ExpandableArrowComponent implements OnInit, OnDestroy {
  _startPosition: any = 'right';
  _endPosition: any = 'right';
  public get startPosition() {
    return this._startPosition;
  }
  @Input() set startPosition(pos: 'right' | 'bottom' | 'top' | 'left') {
    this._startPosition = pos;
    this.collapsedRotation = AnimationPosition[pos];
  }

  public get endPosition() {
    return this._endPosition;
  }
  @Input() set endPosition(pos: 'right' | 'bottom' | 'top' | 'left') {
    this._endPosition = pos;
    this.expandedRotation = AnimationPosition[pos];
  }

  // @Input() endPosition: 'right' | 'bottom' | 'left' | 'top' = 'bottom';
  @Input() set animationSpeed(animationSpeed: 'normal' | 'fast') {
    this._animationSpeed = AnimationSpeed[animationSpeed || 'normal'];
  }
  @Input() isExpanded: boolean;
  @Input() size: string = '24px';
  @Input() sizeMobile: string = '24px';
  @Input() arrowColor: string;
  @Input() isClockwise = true;
  @Input() triggerArrowClick = false;

  private subs = new Subscription();
  private _animationSpeed: AnimationSpeed;
  public arrowPath = '../../../../assets/images/nextArrow.svg';

  public get getNumberSpeed() {
    return this._animationSpeed;
  }

  public collapsedRotation = AnimationPosition['right'];
  public expandedRotation = AnimationPosition['bottom'];

  constructor(
    @Host() @Optional() public wrapper: ExpandableWrapperComponent,
    // private breakpointService: BreakpointService
  ) { }

  ngOnInit(): void {
    this.collapsedRotation = AnimationPosition[this.startPosition];
    this.expandedRotation = AnimationPosition[this.endPosition];
    // this.subs.add(
    //   this.breakpointService.isMobile$.subscribe((matches) => {
    //     if (matches && this.sizeMobile) {
    //       this.size = this.sizeMobile;
    //     }
    //   })
    // );
  }

  triggerClick(e: any) {
    e && e.preventDefault();
    if (this.triggerArrowClick) {
      this.wrapper.toggleIsExpanded();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
