import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { AnimationPosition, ExpandableArrowComponent } from '../lib/components/expandable/expandable-arrow/expandable-arrow.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ExpandableArrowComponent> = {
    title: 'Example/ExpandableArrowComponent',
    component: ExpandableArrowComponent,
    tags: ['autodocs'],
    // decorators: [
    //     moduleMetadata({
    //         declarations: [ExpandableArrowComponent],
    //         imports: [BrowserAnimationsModule],
    //     }),
    // ],
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
    ],
    argTypes: {
        startPosition: {
            options: ['right', 'bottom', 'left', 'top'],
            control: { type: 'radio' },
        },
        endPosition: {
            options: ['right', 'bottom', 'left', 'top'],
            control: { type: 'radio' },
        },
    },
};

export default meta;
type Story = StoryObj<ExpandableArrowComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
    args: {
        isExpanded: true,
        isClockwise: true,
        startPosition: 'right',
        endPosition: 'left',
    },
};


