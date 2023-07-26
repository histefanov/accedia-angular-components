import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { LabelComponent } from '../label/label.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonComponent, RadioGroupComponent, LabelComponent ],
      providers: [
        {
          provide: RadioGroupComponent,
          useValue: {
            variant: 'standard',
            propagateTouch: (() => {}) as any,
            value: 'any',
            checkboxType: 'dot'
          } as RadioGroupComponent
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call `onTouchTargetClick` on touch target click', () => {
    spyOn(component, 'onTouchTargetClick');

    const touchTarget = fixture.debugElement.nativeElement.querySelector('.touch-target');
    touchTarget.dispatchEvent(new Event('click'));
    
    expect(component.onTouchTargetClick).toHaveBeenCalled();
  })

  it('should focus input on touch target click', () => {
    spyOn(component.inputElement.nativeElement, 'focus');

    const touchTarget = fixture.debugElement.nativeElement.querySelector('.touch-target');
    touchTarget.dispatchEvent(new Event('click'));
    
    expect(component.inputElement.nativeElement.focus).toHaveBeenCalled();
  })

  it('should call `onBlur` on input blur', () => {
    spyOn(component, 'onBlur');

    const inputElement = fixture.debugElement.nativeElement.querySelector('input');
    inputElement.dispatchEvent(new Event('blur'));
    
    expect(component.onBlur).toHaveBeenCalled();
  })

  it('should set `checked` to true on change', () => {
    const inputElement = fixture.debugElement.nativeElement.querySelector('input');
    inputElement.dispatchEvent(new Event('change'));
    
    expect(component.checked).toBeTrue();
  })

  describe('checked', () => {
    it('should set radio group `selected` property to `this`', () => {
      component.checked = true;
      expect(component['radioGroup'].selected).toEqual(component);
    })
  })

  describe('disabled', () => {
    it('should set `_disabled` to the provided value', () => {
      component.disabled = true;
      expect(component['_disabled']).toBeTrue();
    })
  })

  describe('onBlur', () => {
    it('should call `propagateTouch` function of radio group', () => {
      const spy = spyOn(component['radioGroup'], 'propagateTouch');
      component.onBlur();
      expect(spy).toHaveBeenCalled();
    })
  })

  describe('onChange', () => {
    it('should set `checked` to true when it was initially false', () => {
      component.checked = false;
      component.onChange(new Event('change'));
      expect(component.checked).toBeTrue();
    })
  })
});

