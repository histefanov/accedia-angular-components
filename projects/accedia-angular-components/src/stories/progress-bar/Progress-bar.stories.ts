import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from '../../lib/components/progress-bar/progress-bar.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction

type StoryType = ProgressBarComponent & { label?: string };

const meta: Meta<ProgressBarComponent> = {
    title: 'Components/ProgressBar',
    component: ProgressBarComponent,
    tags: [''],
    render: (args) => {
        const { label, ...props } = args;
        return {
            props: {
                ...props,
            },
            template: `
        <afc-progress-bar [progress]="progress" [minimumProgressAnimation]="minimumProgressAnimation" [animationDelayMs]="animationDelayMs" [withProgressAnimation]="withProgressAnimation">
          ${label ? label : ''}
        </afc-progress-bar>
        progress: {{progress}}%
      `
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Sets the title of the progress bar'
        },
        progress: {
            description: 'Sets the progress of the bar from 0 to 100 in percentage'
        },
        withProgressAnimation: {
            description: 'Enables/Disabled animation for the progress bar'
        },
        animationDelayMs: {
            description: 'Can set how much slower/faster the progress bar animation can be'
        },
        minimumProgressAnimation: {
            description: 'Sets a minimum progress to the bar so the label can be shown even at low %'
        },
    },
} as Meta<StoryType>;

export default meta;
type Story = StoryObj<StoryType>;

export const Primary: Story = {
    args: {
        progress: 50,
        label: 'Label',
        withProgressAnimation: true,
        animationDelayMs: 50,
        minimumProgressAnimation: 30
    },

};