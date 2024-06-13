import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DatepickerComponent } from '../../lib/components/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AdditionalInfoComponent } from '../../lib/components/additional-info/additional-info.component';
import { FormsModule } from '@angular/forms';

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
                selectedDate: new Date()
            },
            template: `
            <div [ngStyle]="{ height: '405px', 'margin-left': '5px' }">
                <acc-datepicker [swapOpenDirection]="swapOpenDirection" [calendarWidth]="calendarWidth" [(ngModel)]="selectedDate">
                </acc-datepicker>

                <p>Selected date: {{ selectedDate | date }}</p>
            </div>
      `
        }
    },
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
        moduleMetadata({
            declarations: [DatepickerComponent, AdditionalInfoComponent],
            imports: [MatDatepickerModule, MatNativeDateModule, FormsModule],
        }),
    ],
    argTypes: {
        swapOpenDirection: {
            description: 'changes how the calendar opens. Useful when using it at the end of a layout since it is absolutely positioned'
        },
        isCalendarOpen: {
            description: 'toggles the calendar'
        },
        calendarWidth: {
            description: 'Changes the size of the calendar'
        },
    },
};

export default meta;
type Story = StoryObj<DatepickerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
    args: {
        swapOpenDirection: false,
        isCalendarOpen: false,
        calendarWidth: 280,
    },
};


