import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { LabelComponent } from '../label/label.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent, LabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for #disabled property', () => {
    expect(component.disabled).toBeFalsy();
  });

  it('should have a default value for #size property', () => {
    expect(component.size).toBe('medium');
  });

  it('should have a default value for #variant property', () => {
    expect(component.variant).toBe('filled');
  });

  it('should display #title', () => {
    const sampleTitle = 'Sample title';

    component.title = sampleTitle;
    fixture.detectChanges();

    const titleSpan = fixture.debugElement.query(By.css('.button span'));

    expect(titleSpan).toBeTruthy();
    expect(titleSpan.nativeElement.textContent).toBe(sampleTitle);
  });

  it('should emit click event', () => {
    const clickSpy = spyOn(component.click, 'emit');

    const button = fixture.debugElement.nativeElement.querySelector('button');

    button.dispatchEvent(new Event('click'));

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  describe('#getInputStyles', () => {
    it('should return an empty object when #color is undefined', () => {
      const result = component.getInputStyles();

      expect(result).toEqual({});
    });

    it('should return an empty object when #disabled is true', () => {
      component.disabled = true;
      fixture.detectChanges();

      const result = component.getInputStyles();

      expect(result).toEqual({});
    });

    it('should return correct styles object when #variant is filled', () => {
      const sampleColor = '#b6b6b6'; 

      component.variant = 'filled';
      component.color = sampleColor;
      fixture.detectChanges();

      const result = component.getInputStyles();

      expect(result).toEqual({
        'background-color': sampleColor,
        'border-color': sampleColor
      });
    });

    it('should return correct styles object when #variant is outlined', () => {
      const sampleColor = '#b6b6b6'; 

      component.variant = 'outlined';
      component.color = sampleColor;
      fixture.detectChanges();

      const result = component.getInputStyles();

      expect(result).toEqual({
        'border-color': sampleColor,
        'color': sampleColor
      });
    });
  })
});
