import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { AnimationPosition, ExpandableArrowComponent } from '../lib/components/expandable/expandable-arrow/expandable-arrow.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { DatepickerComponent } from '../lib/components/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<DatepickerComponent> = {
    title: 'Example/DatePicker',
    component: DatepickerComponent,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
        moduleMetadata({
            declarations: [DatepickerComponent],
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
    },
};


