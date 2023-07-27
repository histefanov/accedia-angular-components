import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { LoadingSpinnerComponent } from '../lib/components/loading-spinner/loading-spinner.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<LoadingSpinnerComponent> = {
  title: 'Components/Loading spinner',
  component: LoadingSpinnerComponent,
  render: (args) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    size: {
      name: 'size?',
      description: 'Size of the loading spinner',
      control: 'radio',
      options: ['extra-small', 'small', 'medium', 'large'],
      table: {
        defaultValue: {
          summary: 'medium'
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<LoadingSpinnerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Medium: Story = {
  args: {
    size: 'medium'
  },
};
