import { Component, Input, ChangeDetectorRef } from '@angular/core';
import {
  ChartData,
  Legend,
} from 'projects/accedia-angular-components/src/assets/interface/Id3Chart';
import d3Chart from 'projects/accedia-angular-components/src/assets/library/d3Chart';

@Component({
  selector: 'acc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() data: ChartData[];
  @Input() colors: string[];
  @Input() text: string;
  @Input() subtext: string;
  @Input() hasLegend: boolean;

  public legendData: Legend[] = [];
  private colorRange: string[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.data = d3Chart.groupDataByValues(this.data);
    this.colorRange = d3Chart.createColorRange(this.data, this.colors);
    this.legendData = d3Chart.createLegend(this.data, this.colorRange);

    d3Chart.createSvg();
    d3Chart.drawChart(this.data, this.colorRange, this.text, this.subtext);
    this.cdr.detectChanges();
  }
}
