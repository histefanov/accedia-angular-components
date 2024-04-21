import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../lib/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    title: {
      name: 'title?',
      description: 'Text content of the button'
    },
    variant: {
      name: 'variant?',
      description: 'General appearance',
      control: 'inline-radio',
      options: ['filled', 'outlined'],
      table: {
        defaultValue:  { 
          summary: 'filled' 
        }
      }
    },
    size: {
      name: 'size?',
      description: 'Size of the element',
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { 
          summary: 'medium' 
        }
      }
    },
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
    color: {
      name: 'color?',
      description: 'Background color. Gets applied to the border and title color when `variant` is `outlined`',
      control: 'color'
    }
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Filled: Story = {
  args: {
    title: 'Filled',
    variant: 'filled',
    size: 'medium',
    disabled: false,
    color: undefined
  }
};

export const Outlined: Story = {
  args: {
    title: 'Outlined',
    variant: 'outlined',
    size: 'medium',
    disabled: false,
    color: undefined
  }
};
