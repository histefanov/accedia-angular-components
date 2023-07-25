import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';
import { AfcDatePipe } from '../../pipes/date-pipe';
import { FormControl, NgControl } from '@angular/forms';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerComponent, AfcDatePipe ],
      providers: [
        {
          provide: NgControl,
          useValue: { control: new FormControl() }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle calendar on click', () => {
    spyOn(component, 'toggleCalendar');

    const dateCalendarElement = fixture.debugElement.nativeElement.querySelector('.date-container');
    dateCalendarElement.dispatchEvent(new Event('click'));

    expect(component.toggleCalendar).toHaveBeenCalled();
  })

  it('should set `windowWidth` when `isInModal` is true', () => {
    component.isInModal = true;
    fixture.detectChanges();

    expect(component.windowWidth).toBeTruthy();
  })

  it('should set `windowWidth` when `isInModal` is false', () => {
    component.isInModal = false;
    fixture.detectChanges();

    expect(component.windowWidth).toBeTruthy();
  })

  describe('value setter', () => {
    it('should set `_value` field to the new value', () => {
      const dateValue = new Date();
      component.value = dateValue;
      expect(component['_value']).toBe(dateValue);
    })

    it('should set `isCalendarOpen` to false', () => {
      component.isCalendarOpen = true;
      component.value = new Date();
      expect(component.isCalendarOpen).toBeFalse();
    })

    it('should call `propagateChange` with the new value', () => {
      spyOn<any>(component, 'propagateChange').and.callThrough();

      const dateValue = new Date();
      component.value = dateValue;

      expect(component['propagateChange']).toHaveBeenCalledWith(dateValue);
    })
  })

  describe('toggleCalendar', () => {
    it('should instantiate `windowWidth` when in modal', () => {
      component.isInModal = true;
      component.toggleCalendar();

      expect(component.windowWidth).toBeTruthy();
    })

    it('should instantiate `windowWidth` when not in modal', () => {
      component.isInModal = false;
      component.toggleCalendar();

      expect(component.windowWidth).toBeTruthy();
    })

    it('should set `isCalendarOpen` to false when not disabled and control has been instantiated', () => {
      component.isDisabled = false;
      component.isCalendarOpen = true;
      component.control = new FormControl();
      component.toggleCalendar();
      expect(component.isCalendarOpen).toBeFalse();
    })
  })

  describe('click', () => {
    it('should not update `isCalendarOpen` when click is inside', () => {
      component.isCalendarOpen = true;
      const mockEvent = {
        target: {
          classList: {
            contains: (className: string) => className === 'mat-calendar-body-cell-content',
          },
        },
      };

      spyOn(component['elementRef'].nativeElement, 'contains').and.returnValue(true);
  
      component.click(mockEvent);
  
      expect(component.isCalendarOpen).toBeTrue();
    });

    it('should not update `isCalendarOpen` when click is on mat-calendar-body-cell-content', () => {
      component.isCalendarOpen = true;
      const mockEvent = {
        target: {
          classList: {
            contains: (className: string) => className === 'mat-calendar-body-cell-content',
          },
        },
      };

      spyOn(component['elementRef'].nativeElement, 'contains').and.returnValue(false);
      spyOn(mockEvent.target.classList, 'contains').and.returnValue(true);
  
      component.click(mockEvent);
  
      expect(component.isCalendarOpen).toBeTrue();
    });

    it('should update `isCalendarOpen` to false when `isInsideClick` and `calendarClick` are both false', () => {
      component.isCalendarOpen = true;
      const mockEvent = {
        target: {
          classList: {
            contains: (className: string) => className === 'mat-calendar-body-cell-content',
          },
        },
      };

      spyOn(component['elementRef'].nativeElement, 'contains').and.returnValue(false);
      spyOn(mockEvent.target.classList, 'contains').and.returnValue(false);
  
      component.click(mockEvent);
  
      expect(component.isCalendarOpen).toBeFalse();
    });

    describe('ngAfterViewInit', () => {
      it('should set `offsetCalendarOpenPosition` when `swapOpenDirection` is true', () => {
        component.swapOpenDirection = true;
        component.ngAfterViewInit();
        expect(component.offsetCalendarOpenPosition).toBeTruthy();
      })
    })
  })
});
