import { Component, ElementRef, Renderer2, ViewChild, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'acc-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @ViewChild('thumb') thumb: ElementRef;
  @ViewChild('slider') slider: ElementRef;
  @ViewChild('track') track: ElementRef;

  @Input() label: string = 'Amount';
  @Input() thumbSize: number = 32;
  @Input() showValue: boolean = true;
  @Input() valueOnThumb: boolean = true;
  @Output() valueEmitter = new EventEmitter<number>();

  public subs = new Subscription();
  public adjustThumbMaxLeft = 100;
  public thumbAnimationName = 'thumb-animation';
  public thumbRadius = this.thumbSize / 2;
  public isDragging = false;

  @Input() set sliderValue(val: number) {
    if (val > 100) {
      val = 100;
    }
    this._sliderValue = val;
    if (this.slider && this.thumb) {
      this.setThumbValues();
    }
  }
  private _sliderValue: number = 0;

  public get sliderValue() {
    return this._sliderValue;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.handleDrag(event);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.handleDragEnd();
  }

  constructor(private renderer: Renderer2, public elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.subs.add(
      fromEvent(window, 'mousedown').subscribe((event) => {
        const isInsideClick = this.elementRef.nativeElement.contains(event.target);
        if (isInsideClick) {
          this.renderer.removeClass(this.thumb.nativeElement, this.thumbAnimationName);
          this.isDragging = true;
        }
      })
    );
    this.subs.add(
      fromEvent(window, 'click').subscribe((event) => {
        this.handleDragEnd();
        this.renderer.addClass(this.thumb.nativeElement, this.thumbAnimationName);
        this.handleClick(event as MouseEvent);
      })
    );
    this.setThumbValues();
  }

  private handleDrag(event: MouseEvent) {
    this.sliderCalcs(event);
  }

  private handleClick(event: MouseEvent) {
    const isInsideClick = this.slider.nativeElement.contains(event.target);
    if (isInsideClick) {
      this.sliderCalcs(event);
    }
  }

  private handleDragEnd() {
    this.isDragging = false;
  }

  private sliderCalcs(event: MouseEvent) {
    const rect = this.slider.nativeElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    if (offsetX >= 0) {
      const percentage = (offsetX / rect.width) * 100;
      let clampedPercentage = Math.max(0, Math.min(100, percentage));
      let calculation = 0;
      if (offsetX > rect.width) {
        calculation = rect.width - this.thumbRadius;
      } else {
        calculation = offsetX - this.thumbRadius;
      }
      this.thumb.nativeElement.style.left = `${calculation}px`;
      this._sliderValue = Math.round(clampedPercentage);
      this.valueEmitter.emit(Math.round(clampedPercentage));
    }
  }

  private setThumbValues() {
    const rect = this.slider.nativeElement.getBoundingClientRect();
    const rectWidth = rect.width;
    this.thumb.nativeElement.style.left = `${(this._sliderValue / 100) * rectWidth - this.thumbRadius}px`;
  }
}
