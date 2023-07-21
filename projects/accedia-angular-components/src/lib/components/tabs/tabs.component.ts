import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { InlineStyle } from '../../common/types';

@Component({
  selector: 'acc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent
  implements OnInit, AfterContentChecked, AfterViewChecked, OnDestroy
{
  public activeTabIndex: number;
  public subscription = new Subscription();

  @Input() sliderColor?: string; 
  
  @ViewChild('slider', { read: ElementRef }) slider: ElementRef<HTMLSpanElement>;
  @ViewChildren('tab', { read: ElementRef }) tabsRefs: QueryList<ElementRef<HTMLLIElement>>;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  get activeTab() {
    return this.tabs.find((tab) => tab.isActive) || this.tabs.first;
  }

  ngOnInit(): void {
    this.subscription.add(
      fromEvent(window, 'resize')
        .pipe(debounceTime(50))
        .subscribe(() => {
          this.triggerSlider(this.activeTabIndex);
        })
    );
  }

  ngAfterContentChecked(): void {
    let activeTabCount = 0;

    this.tabs.forEach((tab, currentIndex) => {
      if (tab.isActive) {
        activeTabCount++;
        if (activeTabCount === 1) {
          this.activeTabIndex = currentIndex;
        } else {
          // Deactivate additional active tabs:
          tab.isActive = false;
        }
      }
    })

    if (activeTabCount === 0) {
      const firstTab = this.tabs.first;
      firstTab.isActive = true;
      this.activeTabIndex = 0;
    }
  }

  ngAfterViewChecked(): void {
    this.triggerSlider(this.activeTabIndex || 0)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  activateTab(selectedTab: TabComponent, index: number) {
    this.tabs.forEach((tab) => {
      tab.isActive = tab === selectedTab;
    });
    this.activeTabIndex = index;
    this.triggerSlider(index);
  }

  getSliderColor(): InlineStyle {
    let style: InlineStyle = {};

    if (this.sliderColor) {
      style['border-top-color'] = this.sliderColor;
    }

    return style;
  }

  private triggerSlider(index: number) {
    const activeTabRef = this.tabsRefs.get(index);
    this.slider.nativeElement.style.left = `${activeTabRef?.nativeElement.offsetLeft}px`;
    this.slider.nativeElement.style.width = `${activeTabRef?.nativeElement.offsetWidth}px`;
  }
}
