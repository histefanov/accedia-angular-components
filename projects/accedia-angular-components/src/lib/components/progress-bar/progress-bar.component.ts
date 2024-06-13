import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'acc-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  @Input() minimumProgressAnimation = 55;
  @Input() animationDelayMs = 25;
  @Input() withProgressAnimation = true;

  public progressCounter = 0;
  public minimumProgress: number;

  private subscription = new Subscription();
  private _progress: number;

  @Input() set progress(value: number) {
    if (value > 100) {
      value = 100;
    }
    this._progress = value;
    this.updateProgress();
  }

  public get progress() {
    return this._progress;
  }

  private updateProgress() {
    if (this.withProgressAnimation) {
      this.minimumProgress = Math.min(this.progress, this.minimumProgressAnimation);
      this.progressCounter = this.minimumProgress; // Start from minimumProgress
      this.subscription.unsubscribe();
      this.subscription = interval(this.animationDelayMs)
        .pipe(
          take(this.progress - this.minimumProgress)
        )
        .subscribe(() => {
          this.progressCounter++;
          this.cdr.detectChanges();
        });
    } else {
      this.progressCounter = this.progress;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
