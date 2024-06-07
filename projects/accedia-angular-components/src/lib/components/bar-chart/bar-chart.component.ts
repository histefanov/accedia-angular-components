import { Component, Input } from '@angular/core';
import { barChartComponentIn } from '../../common/animation.constants';
import { roundToTwoDecimalPlaces } from '../../common/number.util';
import { ComponentDetails } from '../../common/interfaces';

const COMPONENT_MIN_WIDTH = 1;
const DEFAULT_GAP = 5;

export const DEFAULT_COLORS: string[] = [
  '#f2b540', '#f2d14e', '#b3cc3b', '#e9485a',
  '#7cc7c0', '#ebb9d2', '#f1ccc4', '#c99fc7',
  '#82659d', '#60849e', '#52bfde', '#d75b42',
  '#a3d7da', '#f18c5e', '#a8c163', '#839946'
];

@Component({
  selector: 'acc-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  animations: [barChartComponentIn]
})
export class BarChartComponent {
  @Input() componentLabelType: 'amount' | 'percentage' = 'amount';

  @Input() 
  get components(): ComponentDetails[] {
    return this._components;
  }
  set components(inputArray: ComponentDetails[]) {
    this._components = inputArray.filter(c => c.value >= 0);
    this._componentsSum = this._components.reduce((sum, c) => sum + c.value, 0);
  }

  @Input() disableAnimations: boolean = false;
  @Input() gap: number = DEFAULT_GAP;
  @Input() displayComponentLabels: boolean = true;
  @Input() displayLegend: boolean = true;
  @Input() legendDirection: 'horizontal' | 'vertical' = 'horizontal';
  
  public readonly defaultColors = DEFAULT_COLORS;
  
  private _components: ComponentDetails[];
  private _componentsSum: number;

  calculateWidth(amount: number, total: number = this._componentsSum) {
    const widthPercentage = this.calculatePercentage(amount, total);
    return Math.max(widthPercentage, COMPONENT_MIN_WIDTH);
  }

  calculatePercentage(amount: number, total: number = this._componentsSum) {
    const percentage = (amount / total) * 100;
    return roundToTwoDecimalPlaces(percentage);
  }
}
