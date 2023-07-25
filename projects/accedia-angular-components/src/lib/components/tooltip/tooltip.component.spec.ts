import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show tooltip when showContent is true', () => {
    component.showContent = true;
    fixture.detectChanges();

    const tooltip = fixture.debugElement.query(By.css('.tooltip__text'));
    expect(tooltip).toBeTruthy();
  });

  it('should NOT show tooltip when showContent is false', () => {
    const tooltip = fixture.debugElement.query(By.css('.tooltip__text'));
    expect(tooltip).toBeFalsy();
  });

  it('position class is defined within wrapper classes', () => {
    component.showContent = true;
    component.position = 'topLeft';
    fixture.detectChanges();

    const tooltipWrapper = fixture.debugElement.query(By.css('.tooltip__text__box'));
    const compiled = tooltipWrapper.nativeElement;
    expect(compiled).toHaveClass('topLeft');
  });

  it('no position class is defined THEN bottomRight is defined within wrapper classes', () => {
    component.showContent = true;
    fixture.detectChanges();

    const tooltipWrapper = fixture.debugElement.query(By.css('.tooltip__text__box'));
    const compiled = tooltipWrapper.nativeElement;
    expect(compiled).toHaveClass('bottomRight');
  });

  it('tooltip text is equal to user given text', () => {
    component.showContent = true;
    component.text = 'Sample Text';
    fixture.detectChanges();

    const tooltipWrapper = fixture.debugElement.query(By.css('.tooltip__text'));
    const compiled = tooltipWrapper.nativeElement;
    expect(compiled.innerHTML).toContain('Sample Text');
  });
});
