import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { RadioGroupComponent } from '../../lib/components/radio-group/radio-group.component';
import { RadioButtonComponent } from '../../lib/components/radio-button/radio-button.component';
import { LabelComponent } from '../../lib/components/label/label.component';

const meta: Meta<RadioGroupComponent> = {
  title: 'Components/Radio',
  component: RadioGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [RadioButtonComponent, LabelComponent]
    })
  ],
  render: (args: RadioGroupComponent) => {
    const props = {
      ...args,
    };

    return {
      props,
      template: `
        <acc-radio-group 
          [checkboxType]="checkboxType"
          [direction]="direction"
          [disabled]="disabled"
          [label]="label"
          [labelPosition]="labelPosition"
          [selected]="selected"
          [value]="value"
          [variant]="variant"
          [withAsterisk]="withAsterisk"
        >
          <acc-radio-button value="1">Option 1</acc-radio-button>
          <acc-radio-button value="2">Option 2</acc-radio-button>
          <acc-radio-button value="3">Option 3</acc-radio-button>
        </acc-radio-group>
      `
    }
  },
  argTypes: {
    checkboxType: {
      name: 'checkboxType?',
      description: 'Adjusts the visual appearance of the radio button',
      control: 'inline-radio',
      options: ['dot', 'tick'],
      table: {
        defaultValue: {
          summary: 'dot'
        }
      }
    },
    direction: {
      name: 'direction?',
      description: 'Determines the direction of the radio button fields',
      control: 'inline-radio',
      options: ['column', 'row'],
      table: {
        defaultValue: {
          summary: 'column'
        }
      }
    },
    disabled: {
      name: 'disabled?',
      description: 'Disabled state',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    label: {
      name: 'label?',
      description: 'Label of the radio group element',
    },
    labelPosition: {
      name: 'labelPosition?',
      description: 'Adjusts the position of the radio button labels relative to the checkbox',
      control: 'inline-radio',
      options: ['before', 'after'],
      table: {
        defaultValue: {
          summary: 'after'
        }
      }
    },
    value: {
      name: 'value?',
      description: 'Specifies the value of the radio group element',
      control: 'text',
    },
    variant: {
      name: 'variant?',
      description: 'Represents the visual appearance of the radio button container',
      control: 'inline-radio',
      options: ['standard', 'box'],
      table: {
        defaultValue: {
          summary: 'standard'
        }
      }
    },
    withAsterisk: {
      name: 'withAsterisk?',
      description:
        'Adds an asterisk symbol to the radio group label to mark it as required',
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
type Story = StoryObj<RadioGroupComponent>;

export const Primary: Story = {
  args: {
    checkboxType: 'dot',
    direction: 'column',
    disabled: false,
    label: 'Radio group label',
    labelPosition: 'after',
    variant: 'standard',
    withAsterisk: false,
    value: undefined
  }
};
