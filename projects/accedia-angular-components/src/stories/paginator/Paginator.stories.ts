import { type Meta, type StoryObj } from '@storybook/angular';
import { PaginatorComponent } from '../../lib/components/paginator/paginator.component';

const meta: Meta<PaginatorComponent> = {
  title: 'Components/Paginator',
  component: PaginatorComponent,
  render: (args) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    disabled: {
      name: 'disabled',
      description: 'Paginator buttons disabled state',
      control: 'boolean'
    },
    hidePageButtons: {
      name: 'hidePageButtons',
      description: 'Toggles the visibility of the numeric page buttons',
      control: 'boolean'
    },
    itemsLength: {
      name: 'itemsLength',
      description: 'The total number of pages',
      control: 'number'
    },
    pageIndex: {
      name: 'pageIndex',
      description: 'Sets the current page zero-based index',
      control: 'number'
    },
    showFirstLastButtons: {
      name: 'showFirstLastButtons',
      description: 'Toggles the visibility of the first/last page buttons',
      control: 'boolean'
    },
    showPageSize: {
      name: 'showPageSize',
      description: 'Toggles the visibility of the items per page data and select menu',
      control: 'boolean'
    },
    showRange: {
      name: 'showRange',
      description: 'Toggles the visibility of the current items range',
      control: 'boolean'
    },
    pageButtonsCount: {
      name: 'pageButtonsCount',
      description: 'The maximum number of page buttons visible at once. Default is 5, minimum is 3',
      control: 'number'
    },
    pageSize: {
      name: 'pageSize',
      description: 'The items size of a single page if no page size options are specified. Default is 10',
      control: 'number'
    },
    pageSizeOptions: {
      name: 'pageSizeOptions',
      description: 'An array of numbers containing the page size options that the user can select',
      control: 'object'
    }
  },
};

export default meta;
type Story = StoryObj<PaginatorComponent>;

export const Primary: Story = {
  args: {
    disabled: false,
    hidePageButtons: false,
    itemsLength: 150,
    pageIndex: 0,
    showFirstLastButtons: true,
    showPageSize: true,
    showRange: true,
    pageButtonsCount: 5,
    pageSize: undefined,
    pageSizeOptions: [10, 20, 30]
  },
};
