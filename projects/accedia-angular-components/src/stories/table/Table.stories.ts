import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from '../../lib/components/table/table.component';
import { TableRowComponent } from '../../lib/components/table-row/table-row.component';
import { cars } from '../data/cars.dataset';

const meta: Meta<TableComponent> = {
  title: 'Components/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableRowComponent],
    }),
  ],
  render: (args: TableComponent) => {
    const props = {
      ...args,
    };

    const carRows = cars.map((car) => `
      <tr acc-table-row>
        <td>${car.manufacturer}</td>
        <td>${car.model}</td>
        <td>${car.year}</td>
        <td>${car.color}</td>
        <td>${car.engine}</td>
        <td>${car.transmission}</td>
        <td>${car.fuel}</td>
      </tr>
    `).join('');

    return {
      props,
      template: `
        <acc-table 
          [tableHeaders]="tableHeaders"
          [theadColor]="theadColor"
          [theadBackgroundColor]="theadBackgroundColor"
        >
          ${carRows}
        </acc-table>
      `
    };
  },
  argTypes: {
    tableHeaders: {
      name: 'tableHeaders?',
      description: 'Use this property to pass down the table headers array',
      control: 'object'
    },
    theadColor: {
      name: 'theadColor?',
      description: 'Table headers text color',
      control: 'color'
    },
    theadBackgroundColor: {
      name: 'theadBackgroundColor?',
      description: 'Table headers background color',
      control: 'color'
    },
  },
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {
    tableHeaders: Object.keys(cars[0]).map(k => k
      .charAt(0).toUpperCase() + k.slice(1)),
    theadColor: undefined,
    theadBackgroundColor: undefined
  },
};
