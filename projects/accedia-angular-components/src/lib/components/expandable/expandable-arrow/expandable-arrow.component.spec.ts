import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationSpeed, ExpandableArrowComponent } from './expandable-arrow.component';
import { ExpandableWrapperComponent } from '../afc-expandable-wrapper/expandable-wrapper.component';

describe('ExpandableArrowComponent', () => {
  let component: ExpandableArrowComponent;
  let fixture: ComponentFixture<ExpandableArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableArrowComponent ],
      imports: [ NoopAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for `startPosition`', () => {
    expect(component.startPosition).toBe('right');
  })

  it('should have a default value for `endPosition`', () => {
    expect(component.endPosition).toBe('bottom');
  })

  it('should have a default value for `size`', () => {
    expect(component.size).toBe('24px');
  })

  it('should have a default value for `sizeMobile`', () => {
    expect(component.sizeMobile).toBe('24px');
  })

  it('should have a default value for `isClockwise`', () => {
    expect(component.isClockwise).toBeTrue();
  })

  it('should have a default value for `triggerArrowClick`', () => {
    expect(component.triggerArrowClick).toBeFalse();
  })

  it('should call `triggerClick` function on click', () => {
    spyOn(component, 'triggerClick');

    const arrowElement = fixture.debugElement.nativeElement.querySelector('.expandable-arrow');
    arrowElement.dispatchEvent(new Event('click'));

    expect(component.triggerClick).toHaveBeenCalled();
  })

  it('should set `size` to equal `mobileSize` on mobile screens', () => {
    component.size = '20px';
    component.sizeMobile = '10px';
    // component['breakpointService'].isMobile$ = of(true);
    component.ngOnInit();

    expect(component.size).toBe(component.sizeMobile);
  })

  describe('animationSpeed', () => {
    it('should set `_animationSpeed` field to provided setter value', () => {
      component.animationSpeed = 'fast';
      expect(component['_animationSpeed']).toEqual(AnimationSpeed.fast);
    })

    it('should set `_animationSpeed` field to normal by default', () => {
      component.animationSpeed = undefined as any;
      expect(component['_animationSpeed']).toEqual(AnimationSpeed.normal);
    })
  })

  describe('triggerClick', () => {
    it('should call `toggleIsExpanded` function of wrapper when `triggerArrowClick` is true', () => {
      component.wrapper = new ExpandableWrapperComponent();
      component.triggerArrowClick = true;
      fixture.detectChanges();

      spyOn(component.wrapper, 'toggleIsExpanded');
  
      const arrowElement = fixture.debugElement.nativeElement.querySelector('.expandable-arrow');
      arrowElement.dispatchEvent(new Event('click'));
  
      expect(component.wrapper.toggleIsExpanded).toHaveBeenCalled();
    })
  })

  describe('ngOnDestroy', () => {
    it('should unsubscribe from `subs` on ngOnDestroy invokation', () => {
      component.ngOnDestroy();
      expect(component['subs'].closed).toBeTrue();
    })
  })
});
