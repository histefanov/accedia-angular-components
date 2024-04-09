import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from '../../lib/components/select/select.component';

const meta: Meta<SelectComponent> = {
  title: 'Components/Select',
  component: SelectComponent,
  render: (args: SelectComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    title: {
      name: 'title?',
      description: 'Text content of the button'
    },
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Filled: Story = {
  args: {
    title: 'Filled',
  }
};
