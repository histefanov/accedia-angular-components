import {
  moduleMetadata,
  type Meta,
  type StoryObj,
  componentWrapperDecorator,
} from '@storybook/angular';
import { InputComponent } from '../lib/components/input/input.component';
import { LabelComponent } from '../lib/components/label/label.component';
import { ValidationErrorComponent } from '../lib/components/validation-error/validation-error.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [LabelComponent, ValidationErrorComponent],
    }),
    componentWrapperDecorator(
      (story) => `
        <div style="max-width: 320px">
          ${story}
        </div>
      `
    ),
  ],
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    id: {
      name: 'id?',
      description: 'Assigns a custom identifier to the input element',
      control: 'text',
    },
    value: {
      name: 'value?',
      description: 'Specifies the value of the input element',
      control: 'text',
    },
    label: {
      name: 'label?',
      description: 'Label of the input element',
    },
    type: {
      name: 'type?',
      description: 'Sets the `type` attribute of the native HTML element',
      control: 'inline-radio',
      options: ['text', 'number', 'password'],
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
    },
    placeholder: {
      name: 'placeholder?',
      description: 'Input placeholder',
    },
    maxLength: {
      name: 'maxLength?',
      description: 'The number of allowed input characters',
      control: 'number',
      table: {
        defaultValue: {
          summary: 50,
        },
      },
    },
    numberStep: {
      name: 'numberStep?',
      description:
        'The interval between legal numbers in the input element (only affects inputs of type `number`)',
      control: 'number',
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
    withAsterisk: {
      name: 'withAsterisk?',
      description:
        'Adds an asterisk symbol to the label to mark the input element as required',
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
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    id: undefined,
    value: undefined,
    label: 'Label',
    type: 'text',
    placeholder: 'Please enter a value',
    maxLength: 50,
    numberStep: undefined,
    disabled: false,
  },
};
