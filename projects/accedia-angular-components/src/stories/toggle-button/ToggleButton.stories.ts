import {
  moduleMetadata,
  type Meta,
  type StoryObj,
  applicationConfig,
} from '@storybook/angular';
import { ToggleButtonComponent } from '../../lib/components/toggle-button/toggle-button.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LabelComponent } from '../../lib/components/label/label.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ToggleButtonComponent> = {
  title: 'Components/Toggle button',
  component: ToggleButtonComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
    moduleMetadata({
      declarations: [LabelComponent],
    }),
  ],
  render: (args) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    disabled: {
      name: 'disabled?',
      description: 'Disabled state',
      control: 'boolean',
      table: {
        defaultValue: { 
          summary: false 
        }
      }
    },
    insideForm: {
      name: 'insideForm?',
      description: 'Indicates whether the component instance is used within an Angular form',
      control: 'boolean',
      table: {
        defaultValue: { 
          summary: false 
        }
      }
    },
    label: {
      name: 'label?',
      description: 'Label of the toggle button element',
    },
    labelPosition: {
      name: 'labelPosition?',
      description: 'Adjusts the position of the label relative to the toggle button',
      control: 'inline-radio',
      options: ['above', 'below', 'before', 'after'],
      table: {
        defaultValue: {
          summary: 'above'
        }
      }
    },
    onStateColor: {
      name: 'onStateColor?',
      description: 'Sets the background color of the toggle button\'s `on` state',
      control: 'color',
      table: {
        defaultValue: {
          summary: '#CC1F17'
        }
      }
    },
    state: {
      name: 'state?',
      description: 'Sets the initial `on`/`off` state of the toggle button',
      control: 'inline-radio',
      options: ['on', 'off'],
      table: {
        defaultValue: {
          summary: 'off',
        },
      },
    },
    withAsterisk: {
      name: 'withAsterisk?',
      description:
        'Adds an asterisk symbol to the toggle button label to mark it as required',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ToggleButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    insideForm: false,
    label: 'Toggle button label',
    labelPosition: 'above',
    onStateColor: '#CC1F17',
    state: 'off',
    withAsterisk: false
  },
};
