import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'afc-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  constructor(private cdr: ChangeDetectorRef) { }
  public progressBarTreshold = 30;
  public progressCounter = 0;
  @Input() animationDelayMs = 25;
  public minimumProgressAnimation = 30;
  @Input() withProgressAnimation = true;
  public subscription = new Subscription();
  _progress: number;

  @Input() set progress(value: number) {
    if (value > 100) {
      value = 100;
    }
    this.progressCounter = 0;
    this._progress = value;
    this.minimumProgressAnimation = this.progress < this.progressBarTreshold ? this.progressBarTreshold : this.progress;
    interval(this.animationDelayMs)
      .pipe(take(this.minimumProgressAnimation || 100))
      .subscribe(() => {
        if (!this.withProgressAnimation) {
          this.progressCounter = this.progress;
        } else {
          if (this.progressCounter < this.minimumProgressAnimation) {

            this.progressCounter++;
          }
        }
        this.cdr.detectChanges();
      });
  }

  public get progress() {
    return this._progress;
  }

  @Input() primaryColor: 'primary-green' | 'primary-orange' = 'primary-green';
  @Input() secondaryColor: 'orange' | 'transparent' | 'grey' = 'grey';

  public ngAfterViewInit(): void {

  }
}
