import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupComponent } from './radio-group.component';
import { ChangeDetectorRef, QueryList } from '@angular/core';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { LabelComponent } from '../label/label.component';

describe('RadioGroupComponent', () => {
  let component: RadioGroupComponent;
  let fixture: ComponentFixture<RadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioGroupComponent, LabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for `direction`', () => {
    expect(component.direction).toBe('column');
  });

  it('should have a default value for `withAsterisk`', () => {
    expect(component.withAsterisk).toBeFalse();
  });

  it('should have a default value for `checkboxType`', () => {
    expect(component.checkboxType).toBe('dot');
  });

  it('should have a default value for `labelPosition`', () => {
    expect(component.labelPosition).toBe('after');
  });

  it('should have a default value for `variant`', () => {
    expect(component.variant).toBe('standard');
  });

  it('should call `updateRadioButtonState` on value setter invokation', () => {
    const spy = spyOn<any>(component, 'updateRadioButtonsState');

    component.value = 'value';

    expect(spy).toHaveBeenCalled();
  });

  it('should call `propagateChange` on value setter invokation', () => {
    spyOn(component, 'propagateChange');

    component.value = 'value';

    expect(component.propagateChange).toHaveBeenCalled();
  });

  it('should call `markRadiosForCheck` on disabled setter invokation', () => {
    spyOn(component, 'markRadiosForCheck');

    component.disabled = true;

    expect(component.markRadiosForCheck).toHaveBeenCalled();
  });

  it('should call `markForCheck` on all radio buttons when `markRadiosForCheck` invokation', () => {
    component.radios = new QueryList<RadioButtonComponent>();
    const mockRadioButton = new RadioButtonComponent(
      component,
      {} as ChangeDetectorRef
    );
    component.radios.reset([mockRadioButton]);

    spyOn(mockRadioButton, 'markForCheck');

    component.markRadiosForCheck();

    expect(mockRadioButton.markForCheck).toHaveBeenCalled();
  });

  it('should set `checked` property of radio on `updateRadioButtonsState`', () => {
    const mockValue = 'test';

    component.radios = new QueryList<RadioButtonComponent>();
    const mockRadioButton = new RadioButtonComponent(component, {
      markForCheck: () => {},
    } as ChangeDetectorRef);
    mockRadioButton.value = mockValue;

    component.radios.reset([mockRadioButton]);
    component.value = mockValue;

    expect(mockRadioButton.checked).toBeTrue();
  });

  it('should set `selected` to reference checked radio on `updateRadioButtonsState`', () => {
    const mockValue = 'test';

    component.radios = new QueryList<RadioButtonComponent>();
    const mockRadioButton = new RadioButtonComponent(component, {
      markForCheck: () => {},
    } as ChangeDetectorRef);
    mockRadioButton.value = mockValue;

    component.radios.reset([mockRadioButton]);
    component.value = mockValue;

    expect(component.selected).toEqual(mockRadioButton);
  });

  describe('selected', () => {
    it('should set `_selected` to the passed radio button component', () => {
      const radioButton = jasmine.createSpyObj<RadioButtonComponent>(
        'radioBtn',
        ['id']
      );
      component.selected = radioButton;
      expect(component['_selected']).toEqual(radioButton);
    });

    it('should set `value` to the selected radio button value', () => {
      const testValue = 'testVal';
      const radioButton = jasmine.createSpyObj<RadioButtonComponent>(
        'radioBtn',
        ['value']
      );
      radioButton.value = testValue;
      component.selected = radioButton;
      expect(component.value).toBe(testValue);
    });

    it('should set `value` to null when radio button parameter is null', () => {
      component.selected = null;
      expect(component.value).toBeNull();
    });
  });

  describe('disabled', () => {
    it('should return the `_disabled` field value', () => {
      expect(component.disabled).toBeFalse();
    });
  });

  describe('emitChangeEvent', () => {
    it('should emit the value from `valueChange` emitter', () => {
      const emitterSpy = spyOn(component.valueChange, 'emit');
      component.emitChangeEvent();
      expect(emitterSpy).toHaveBeenCalledWith(component['_value']);
    });
  });
});
