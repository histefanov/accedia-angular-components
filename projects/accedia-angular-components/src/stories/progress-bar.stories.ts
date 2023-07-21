import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from '../lib/components/progress-bar/progress-bar.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction

type StoryType = ProgressBarComponent & { label?: string };

const meta: Meta<ProgressBarComponent> = {
    title: 'Example/ProgressBarComponent',
    component: ProgressBarComponent,
    tags: [''],
    render: (args) => {
        const { label, ...props } = args;
        return {
            props: {
                ...props,
            },
            template: `
        <afc-progress-bar [progress]="progress" [animationDelayMs]="animationDelayMs" [withProgressAnimation]="withProgressAnimation">
          ${label ? label : ''}
        </afc-progress-bar>
      `
        }
    },
    argTypes: {
        label: {
            control: 'text',
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
        animationDelayMs: 50
    },

};