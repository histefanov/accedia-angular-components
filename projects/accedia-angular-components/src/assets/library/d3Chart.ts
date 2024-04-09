import { ChartData, Legend } from '../interface/Id3Chart';
import * as d3 from 'd3';

const MAX_DATA_LENGTH = 14;

export default class d3Chart {
  private static degree135 = ((-90 * Math.PI) / 180 + 0.75 * Math.PI).toFixed(1);
  private static degree225 = ((-90 * Math.PI) / 180 + 1.25 * Math.PI).toFixed(1);
  private static degree270 = ((-90 * Math.PI) / 180 + 1.5 * Math.PI).toFixed(1);
  private static degree180 = ((-90 * Math.PI) / 180 + Math.PI).toFixed(1);
  private static degree45 = ((-90 * Math.PI) / 180 + 0.25 * Math.PI).toFixed(1);
  private static degree90 = ((-90 * Math.PI) / 180 + 0.5 * Math.PI).toFixed(1);

  private static svg: any;
  private static chartSvg: any;
  private static screenWidth = window.innerWidth;
  private static width = Math.min(this.screenWidth, 250);
  private static height = Math.min(this.screenWidth, 250);

  static groupDataByValues(data: ChartData[]): ChartData[] {
    const smallValues = data.filter((item) => item.value <= 2);
    const sumSmallValues = smallValues.reduce(
      (sum, item) => sum + item.value,
      0
    );
    data = data.filter((item) => item.value > 2);

    if (data.length <= MAX_DATA_LENGTH) {
      const obj = {
        value: sumSmallValues,
        chartText: `${sumSmallValues}%`,
        legendText: 'Others',
      };
      if (sumSmallValues > 0) {
        data.push(obj);
      }
    } else {
      data.sort((a, b) => a.value - b.value);
      const extraValues = data.splice(0, data.length - MAX_DATA_LENGTH);
      const sumExtraValues = extraValues.reduce(
        (sum, item) => sum + item.value,
        0
      );
      const sumOthersValues = sumSmallValues + sumExtraValues;

      const obj = {
        value: sumOthersValues,
        chartText: 'Others',
        legendText: `${sumOthersValues}%`,
      };
      if (sumSmallValues + sumExtraValues > 0) {
        data.push(obj);
      }
    }

    return data;
  }

  static createColorRange(data: ChartData[], colors: string[]): string[] {
    const resultingColorArray = colors.slice(0, data.length);
    return resultingColorArray;
  }

  static createLegend(data: ChartData[], colors: string[]): Legend[] {
    const legendData = data.map((item, index) => {
      return {
        name: item.legendText,
        color: item.legendText === 'Others' ? '#CCCCCC' : colors[index],
      };
    });

    return legendData;
  }

  static flipTextAndArcCondition(d: any): boolean {
    const startAngle = d.startAngle.toFixed(1);
    const endAngle = d.endAngle.toFixed(1);

    if (startAngle >= this.degree180) {
      return true;
    }

    if (startAngle >= this.degree135 && endAngle <= this.degree225) {
      return false;
    }

    if (startAngle >= this.degree135) {
      return true;
    }

    if (startAngle >= this.degree90 && endAngle > this.degree270) {
      return true;
    }

    if (startAngle >= this.degree45) {
      return false;
    }

    return false;
  }

  static createSvg(): void {
    this.svg = d3
      .select('figure#chart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    this.chartSvg = this.svg
      .append('g')
      .attr('class', 'wrapper')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      );
  }

  static drawChart(
    data: any,
    colorRange: string[],
    text?: string,
    subtext?: string
  ): void {
    const scope = this;
    const arc = d3
      .arc()
      .innerRadius((this.width * 0.75) / 2)
      .outerRadius((this.width * 0.75) / 2 + 30);

    const pie = d3
      .pie()
      .startAngle((-90 * Math.PI) / 180)
      .endAngle((-90 * Math.PI) / 180 + 2 * Math.PI)
      .value((d: any) => d.value)
      .padAngle(0.01)
      .sort(null);

    const colorScale = d3.scaleOrdinal().domain(data).range(colorRange);

    this.chartSvg
      .selectAll('.donutArcs')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('class', 'donutArcs')
      .attr('d', arc)
      .style('fill', (d: any, i: any) => {
        if (d.data.legendText === 'Others') return '#CCCCCC';
        else return colorScale(i);
      })
      .each(function (this: any, d: any, i: any) {
        let firstArcSection = /(^.+?)L/;

        let newArc = firstArcSection.exec(d3.select(this).attr('d'))?.[1];
        newArc = newArc?.replace(/,/g, ' ');

        if (scope.flipTextAndArcCondition(d)) {
          let startLoc = /M(.*?)A/,
            middleLoc = /A(.*?)0 0 1/,
            endLoc = /0 0 1 (.*?)$/;

          let middleLoc2 = /A(.*?)0 1 1/,
            endLoc2 = /0 1 1 (.*?)$/;

          let newStart =
            endLoc.exec(newArc!)?.[1] || endLoc2.exec(newArc!)?.[1];
          let newEnd = startLoc.exec(newArc!)?.[1];
          let middleSec =
            middleLoc.exec(newArc!)?.[1] || middleLoc2.exec(newArc!)?.[1];

          // Build up the new arc notation, set the sweep-flag to 0
          if (endLoc.exec(newArc!)?.[1] && middleLoc.exec(newArc!)?.[1]) {
            newArc = 'M' + newStart + 'A' + middleSec + '0 0 0 ' + newEnd;
          } else {
            newArc = 'M' + newStart + 'A' + middleSec + '1 1 0 ' + newEnd;
          }
        }

        scope.chartSvg
          .append('path')
          .attr('class', 'hiddenDonutArcs')
          .attr('id', 'donutArc' + i)
          .attr('d', newArc)
          .style('fill', 'none');
      });

    this.chartSvg
      .selectAll('.donutText')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('class', 'donutText')
      .attr('font-size', '0.75rem')
      .attr('font-family', 'var(--standard-font-family-open-sans-bold)')
      .attr('dy', (d: any, i: any) => {
        return scope.flipTextAndArcCondition(d) ? -11 : 18;
      })
      .append('textPath')
      .attr('startOffset', '50%')
      .style('text-anchor', 'middle')
      .attr('xlink:href', (d: any, i: any) => '#donutArc' + i)
      .text((d: any) => d.data.chartText)
      .style('fill', '#FFF');

    this.chartSvg
      .append('svg:text')
      .attr('text-anchor', 'middle')
      .attr('y', () => (text && !subtext ? 10 : 0))
      .attr('font-size', '2rem')
      .attr('font-family', 'var(--standard-font-family-open-sans-bold)')
      .text(text)
      .append('tspan')
      .attr('font-size', '1.1rem')
      .attr('x', '0')
      .attr('dy', '1.5rem')
      .text(subtext);
  }
}
