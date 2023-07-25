import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'afc-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  constructor(private cdr: ChangeDetectorRef) { }
  @Input() minimumProgressAnimation = 55;
  public progressCounter = 0;
  @Input() animationDelayMs = 25;
  public minimumProgress: number;
  @Input() withProgressAnimation = true;
  public subscription = new Subscription();
  _progress: number;

  @Input() set progress(value: number) {
    if (value > 100) {
      value = 100;
    }
    this.progressCounter = 0;
    this._progress = value;
    this.minimumProgress = this.progress < this.minimumProgressAnimation ? this.minimumProgressAnimation : this.progress;
    interval(this.animationDelayMs)
      .pipe(take(this.minimumProgress || 100))
      .subscribe(() => {
        if (!this.withProgressAnimation) {
          this.progressCounter = this.progress;
        } else {
          if (this.progressCounter < this.minimumProgress) {

            this.progressCounter++;
          }
        }
        this.cdr.detectChanges();
      });
  }

  public get progress() {
    return this._progress;
  }
  @Input() secondaryColor = 'grey';

  public ngAfterViewInit(): void {

  }
}
