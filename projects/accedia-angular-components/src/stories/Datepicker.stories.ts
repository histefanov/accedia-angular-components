import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { AnimationPosition, ExpandableArrowComponent } from '../lib/components/expandable/expandable-arrow/expandable-arrow.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { DatepickerComponent } from '../lib/components/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AdditionalInfoComponent } from '../lib/components/additional-info/additional-info.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<DatepickerComponent> = {
    title: 'Components/DatePicker',
    component: DatepickerComponent,
    tags: [''],
    render: (args) => {
        const { ...props } = args;
        return {
            props: {
                ...props,
            },
            template: `
            <div [ngStyle]="{ height: '405px', 'margin-left': '110px' }">
                <acc-datepicker [swapOpenDirection]="swapOpenDirection">
                </acc-datepicker>
            </div>

            <ADDITIONAL-INFO>
            <form [formGroup]="dateForm">
                <acc-datepicker formControlName="startDate"></acc-datepicker>
                <acc-datepicker formControlName="endDate"></acc-datepicker>
            </form>
        </ADDITIONAL-INFO>
      `
        }
    },
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
        moduleMetadata({
            declarations: [DatepickerComponent, AdditionalInfoComponent],
            imports: [MatDatepickerModule, MatNativeDateModule],
        }),
    ],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<DatepickerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
    args: {
        swapOpenDirection: false,
        isCalendarOpen: false
    },
};


