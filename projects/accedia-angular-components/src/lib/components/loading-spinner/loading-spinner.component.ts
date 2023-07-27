import { Component, Input } from '@angular/core';
import { SIZE_MEDIUM } from '../../common/constants';
import { LoadingSpinnerSize } from '../../common/types';

@Component({
  selector: 'acc-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  @Input() size: LoadingSpinnerSize = SIZE_MEDIUM;
}
