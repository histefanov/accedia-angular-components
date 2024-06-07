import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, debounceTime, fromEvent, map, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'acc-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  @Input() disabled: boolean = false;
  @Input() label: string = 'Amount';
  @Input() showValue: boolean = true;
  @Input() valueOnThumb: boolean = false;

  @Input()
  get thumbSize(): number {
    return this._thumbSize;
  }
  set thumbSize(value: number) {
    this._thumbSize = value;
    this.thumbRadius = this._thumbSize / 2;
  }

  @Input()
  get sliderValue() {
    return this._sliderValue;
  }
  set sliderValue(value: number) {
    this._sliderValue = Math.min(Math.max(value ?? 0, 0), 100);
    if (this.slider && this.thumb) {
      this.setThumbValues();
    }
  }

  @Output() valueChange = new EventEmitter<number>();

  @ViewChild('thumb') thumb: ElementRef;
  @ViewChild('slider') slider: ElementRef;

  public isDragging = false;
  public thumbRadius: number = this.thumbSize / 2;

  private _thumbSize: number = 32;
  private _sliderValue: number;
  private _subs = new Subscription();

  ngAfterViewInit() {
    const pointerMove$ =
      fromEvent<PointerEvent>(window, 'pointermove')
        .pipe(
          map(e => e.clientX),
          takeUntil(fromEvent<PointerEvent>(document, 'pointerup'))
        );

    this._subs.add(
      fromEvent<PointerEvent>(this.thumb.nativeElement, 'pointerdown')
        .pipe(
          map(e => e.preventDefault()),
          tap(() => this.isDragging = true),
          switchMap(() => pointerMove$)
        )
        .subscribe((clientX) => {
          this.calculateSliderProps(clientX);
        })
    );

    this._subs.add(
      fromEvent<PointerEvent>(this.slider.nativeElement, 'click')
        .pipe(map(e => e.clientX))
        .subscribe((event) => {
          this.isDragging = false;
          this.calculateSliderProps(event);
        })
    );

    this._subs.add(
      fromEvent<Event>(window, 'resize')
        .pipe(debounceTime(100))
        .subscribe(() => {
          this.isDragging = false;
          this.setThumbValues()
        })
    );

    this.setThumbValues();
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }

  private calculateSliderProps(clientX: number) {
    const rect = this.slider.nativeElement.getBoundingClientRect();
    const offsetX = clientX - rect.left;

    if (offsetX >= 0) {
      const percentage = (offsetX / rect.width) * 100;
      const clampedPercentage = Math.max(0, Math.min(100, percentage));
      this._sliderValue = Math.round(clampedPercentage);
      this.valueChange.emit(this._sliderValue);
      const thumbPosition = Math.min(offsetX, rect.width) - this.thumbRadius;
      this.thumb.nativeElement.style.left = `${thumbPosition}px`;
    }
  }

  private setThumbValues() {
    const rect = this.slider.nativeElement.getBoundingClientRect();
    const rectWidth = rect.width;
    this.thumb.nativeElement.style.left = `${(this._sliderValue / 100) * rectWidth - this.thumbRadius}px`;
  }
}
