import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { TabComponent } from '../tab/tab.component';
import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'test-cmp',
  template: `
    <acc-tabs>
      <acc-tab></acc-tab>
      <acc-tab></acc-tab>
    </acc-tabs>
  `
})
class WrapperComponent {
  @ViewChild(TabsComponent) tabsComponent: TabsComponent;
}

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let mockSubscription: jasmine.SpyObj<Subscription>;

  beforeEach(async () => {
    mockSubscription = jasmine.createSpyObj('Subscription', ['add']);
    
    await TestBed.configureTestingModule({
      declarations: [WrapperComponent, TabsComponent, TabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
    component = fixture.componentInstance.tabsComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call `triggerSlider` on window resize', fakeAsync(() => {
    const triggerSliderSpy = spyOn<any>(component, 'triggerSlider');
    const mockWindowResizeEvent = new Event('resize');
    window.dispatchEvent(mockWindowResizeEvent);

    component.ngOnInit();
    fixture.detectChanges();
    tick(50);

    expect(triggerSliderSpy).toHaveBeenCalledWith(component.activeTabIndex);
  }));

  it('should call `activateTab` on tab click', () => {
    spyOn(component, 'activateTab');

    const tabButton = fixture.debugElement.nativeElement.querySelector('.nav-item:nth-child(2) .nav-button');
    tabButton.dispatchEvent(new Event('click'));

    expect(component.activateTab).toHaveBeenCalled();
  });

  it('should call `triggerSlider` on window resize', () => {
    const triggerSliderSpy = spyOn<any>(component, 'triggerSlider');
    window.resizeBy(10, 10);
    fixture.detectChanges();

    expect(triggerSliderSpy).toHaveBeenCalled();
  });

  describe('activeTab', () => {
    it('should return the first tab when no active tab was specified', () => {
      component.tabs.forEach((tab) => {
        tab.isActive = false;
      });

      expect(component.activeTab).toEqual(component.tabs.first);
    })
  });

  describe('ngAfterContentChecked', () => {
    it('should set `activeTabIndex` to 0 if there is no active tab', () => {
      component.ngAfterContentChecked();
      expect(component.activeTabIndex).toBe(0);
    })

    it('should not set `activeTabIndex` to 0 if there is an active tab', () => {
      component.activateTab(component.tabs.get(1)!, 1);
      component.ngAfterContentChecked();

      expect(component.activeTabIndex).toBe(1);
    })

    it('should leave only one active tab when multiple tabs were explicitly set as active', () => {
      component.tabs.forEach((tab) => {
        tab.isActive = true;
      });

      component.ngAfterContentChecked();

      expect(component.tabs.filter((tab) => tab.isActive).length).toBe(1);
    })
  })

  describe('ngAfterViewChecked', () => {
    it('should call `triggerSlider` with index 0 if there is no active tab', () => {
      const triggerSliderSpy = spyOn<any>(component, 'triggerSlider');
      component.ngAfterViewChecked();

      expect(triggerSliderSpy).toHaveBeenCalledWith(0);
    })

    it('should not call `triggerSlider` if there is an active tab', () => {
      const triggerSliderSpy = spyOn<any>(component, 'triggerSlider');
      component.activeTabIndex = 1;

      expect(triggerSliderSpy).not.toHaveBeenCalled();
    })
  })

  describe('ngOnDestroy', () => {
    it('should unsubscribe from subscriptions', () => {
      component.ngOnDestroy();
      expect(component.subscription.closed).toBeTrue();
    })
  })

  describe('getSliderColor', () => {
    it('should return the correct styles object when a #sliderColor property was initialized', () => {
      const sampleColor = '#ffffff';
      component.sliderColor = sampleColor;

      const result = component.getSliderColor();

      expect(result).toEqual({
        'border-top-color': sampleColor
      });
    });

    it('should return an empty styles object a #sliderColor property is undefined', () => {
      const result = component.getSliderColor();
      expect(result).toEqual({});
    })
  })
});
