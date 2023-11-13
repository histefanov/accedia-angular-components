import { type Meta, type StoryObj } from '@storybook/angular';
import { PaginatorComponent } from '../lib/components/paginator/paginator.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<PaginatorComponent> = {
  title: 'Components/Paginator',
  component: PaginatorComponent,
  render: (args) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    pageNumber: {
      name: 'pageNumber?',
      description: 'Sets the current page number',
      control: 'number'
    },
    totalPages: {
      name: 'totalPages',
      description: 'The total number of pages',
      control: 'number'
    }
  },
};

export default meta;
type Story = StoryObj<PaginatorComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    pageNumber: 1,
    totalPages: 5
  },
};
