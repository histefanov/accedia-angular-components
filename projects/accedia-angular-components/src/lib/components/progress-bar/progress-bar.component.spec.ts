import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for `progressBarTreshold`', () => {
    expect(component.progressBarTreshold).toBe(30);
  })

  it('should have a default value for `progressCounter`', () => {
    expect(component.progressCounter).toBe(0);
  })

  it('should have a default value for `minimumProgressAnimation`', () => {
    expect(component.minimumProgressAnimation).toBe(30);
  })

  it('should have a default value for `withProgressAnimation`', () => {
    expect(component.withProgressAnimation).toBeFalse();
  })

  it('should have a default value for `primaryColor`', () => {
    expect(component.primaryColor).toBe('primary-green');
  })

  it('should have a default value for `secondaryColor`', () => {
    expect(component.secondaryColor).toBe('grey');
  })

  it('should fill progress bar appropriate to given percentage', async () => {
    component.progress = 40;
    fixture.detectChanges();
    await fixture.whenStable();

    const element = fixture.debugElement.query(By.css('.progress-bar')).nativeElement;
    expect(element.style.width).toBe('40%');
  });

  it('should work when `minimumProgressAnimation` is falsy', () => {
    component.minimumProgressAnimation = 0;
    component.ngAfterViewInit();
    expect(component).toBeTruthy();
  })

  it('should increase `progressCounter` when `withProgressAnimation` is true', fakeAsync(() => {
    component.withProgressAnimation = true;
    component.ngAfterViewInit();
    tick(3000);
    expect(component.progressCounter).toBeGreaterThan(0);
  }))

  describe('ngAfterViewInit', () => {
    it('should set `minimumProgressAnimation` to `progressBarTreshold` when `progress` is less than or equal to `progressBarTreshold`', () => {
      component.progress = 50;
      component.progressBarTreshold = 60;
      component.ngAfterViewInit();
      expect(component.minimumProgressAnimation).toBe(component.progressBarTreshold);
    })

    it('should set `minimumProgressAnimation` to `progress` when `progress` is less than `progressBarTreshold` it more than `progress`', () => {
      component.progress = 60;
      component.progressBarTreshold = 50;
      component.ngAfterViewInit();
      expect(component.minimumProgressAnimation).toBe(component.progress);
    })
  })
});