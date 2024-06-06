import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { AnimationPosition, ExpandableArrowComponent } from '../lib/components/expandable/expandable-arrow/expandable-arrow.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ExpandableContainerComponent } from '../lib/components/expandable/expandable-container/expandable-container.component';
import { ExpandableWrapperComponent } from '../lib/components/expandable/afc-expandable-wrapper/expandable-wrapper.component';
import { AdditionalInfoComponent } from '../lib/components/additional-info/additional-info.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ExpandableContainerComponent> = {
    title: 'Components/ExpandableShowcaseComponent',
    component: ExpandableContainerComponent,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
        moduleMetadata({
            declarations: [ExpandableContainerComponent, ExpandableWrapperComponent, ExpandableArrowComponent, AdditionalInfoComponent],
            imports: [BrowserAnimationsModule],
        }),

    ],
    render: (args) => {
        const { ...props } = args;
        return {
            props: {
                ...props,
            },
            template: `
            <acc-expandable-wrapper [isExpanded]="isOpen">
            <div [ngStyle]="{ display: 'flex', padding: '5px', flexDirection: 'column', 'align-items' : 'center', border: '1px solid var(--primary-color-red)', width: '200px', padding: '5px', 'border-radius' : '5px' }"><span>Click arrow to expand</span> <acc-expandable-arrow></acc-expandable-arrow>
            
            <acc-expandable-container [ngStyle]="{ padding: '5px'}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </acc-expandable-container>
            </div>
        </acc-expandable-wrapper>

        <ADDITIONAL-INFO>
         @Host() @Optional() public wrapper: ExpandableWrapperComponent
         Click arrow to expand <acc-expandable-arrow></acc-expandable-arrow>
        </ADDITIONAL-INFO>
      `
        }
    },
    argTypes: {
        // startPosition: {
        //     options: ['right', 'bottom', 'left', 'top'],
        //     control: { type: 'radio' },
        // },
        // endPosition: {
        //     options: ['right', 'bottom', 'left', 'top'],
        //     control: { type: 'radio' },
        // },
    },
};

export default meta;
type Story = StoryObj<ExpandableContainerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
    args: {
        // isExpanded: true,
        // isClockwise: true,
        // startPosition: 'right',
        // endPosition: 'left',
    },
};


