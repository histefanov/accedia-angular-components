import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { LabelComponent } from '../label/label.component';
import { ValidationErrorComponent } from '../validation-error/validation-error.component';
import { FormControl, FormsModule, NgControl, ValidationErrors } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent, LabelComponent, ValidationErrorComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: NgControl,
          useValue: { control: new FormControl() }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for #placeholder', () => {
    expect(component.placeholder).toBe('');
  });

  it('should have a default value for #withAsterisk', () => {
    expect(component.withAsterisk).toBeFalse();
  });

  it('should have a default value for #type', () => {
    expect(component.type).toBe('text');
  });

  it('should have a default value for #maxLength', () => {
    expect(component.maxLength).toBe(50);
  });

  it('should call #onBlur', () => {
    const onBlurSpy = spyOn(component, 'onBlur');

    const inputElement = fixture.debugElement.query(By.css('.input'));
    inputElement.nativeElement.dispatchEvent(new Event('blur'));

    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  })

  describe('onBlur', () => {
    it('should call #propagateTouch()', () => {
      const propagateTouchSpy = spyOn<any>(component, 'propagateTouch');

      component.onBlur();

      expect(propagateTouchSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('value', () => {
    it('should set #value field with provided parameter on setter call', () => {
      const newValue = 'newValue';
      component.value = newValue;
      expect(component['_value']).toBe(newValue);
    })

    it('should set call #ropagateChange with value parameter on setter call', () => {
      const spy = spyOn<any>(component, 'propagateChange');
      const newValue = 'newValue';
      component.value = newValue;
      expect(spy).toHaveBeenCalledWith(newValue);
    })
  });

  describe('id', () => {
    it('should set #_id field with provided parameter on setter call', () => {
      const id = 'id';
      component.id = id;
      expect(component['_id']).toBe(id);
    })

    it('should get the auto generated id when no id attribute was provided', () => {
      const id = component.id;
      expect(id).toBe(component['autoId']);
    })
  });

  describe('isInvalid', () => {
    it('should return true when control has errors and is touched and dirty', () => {
      component.control.markAsDirty();
      component.control.markAsTouched();
      component.control.setErrors({});
      
      fixture.detectChanges();

      const validationResult = component.isInvalid();

      expect(validationResult).toBeTrue();
    });

    it('should return false when control has errors but is not dirty', () => {
      component.control.markAsTouched();
      component.control.setErrors({});
      
      fixture.detectChanges();

      const validationResult = component.isInvalid();

      expect(validationResult).toBeFalse();
    });

    it('should return false when control has errors but is not touched', () => {
      component.control.markAsDirty();
      component.control.setErrors({});
      
      fixture.detectChanges();

      const validationResult = component.isInvalid();

      expect(validationResult).toBeFalse();
    });
  });
});
