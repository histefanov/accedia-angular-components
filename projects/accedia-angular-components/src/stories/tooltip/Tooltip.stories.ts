import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ButtonComponent } from '../../lib/components/button/button.component';
import { AdditionalInfoComponent } from '../../lib/components/additional-info/additional-info.component';
import { TooltipComponent } from '../../lib/components/tooltip/tooltip.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TooltipComponent> = {
    title: 'Components/Tooltip',
    component: TooltipComponent,
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
        moduleMetadata({
            declarations: [TooltipComponent, ButtonComponent, AdditionalInfoComponent],
            imports: [],
        }),
    ],
    render: (args) => {
        const { ...props } = args;
        return {
            props: {
                ...props,
            },
            template: `

            <div [ngStyle]="{ height: '405px', 'display': 'flex', width: 'min-content', 'margin-left' : '200px', 'margin-top': '50px' }">
            <acc-tooltip [text]="text" [tooltipWidth]="tooltipWidth" [position]="position">
                <acc-button isOpenButton title="Hover to show tooltip"></acc-button>
            </acc-tooltip>
            </div>
      `
        }
    },
    argTypes: {
        position: {
            name: 'position',
            description: 'position to hover',
            control: 'inline-radio',
            options: ['topLeft', 'topRight', 'topCenter', 'bottomCenter', 'bottomLeft', 'bottomRight'],
        },
        text: {
            name: 'text',
            description: 'tooltip text',
        },
    },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consect...',
        position: 'topLeft',
        tooltipWidth: NaN
    },
};


