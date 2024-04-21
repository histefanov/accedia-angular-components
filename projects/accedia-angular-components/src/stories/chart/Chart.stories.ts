import type { Meta, StoryObj } from '@storybook/angular';
import { ChartComponent } from '../../lib/components/chart/chart.component';
import * as d3 from 'd3';

const meta: Meta<ChartComponent> = {
  title: 'Components/Chart',
  component: ChartComponent,
  render: (args: ChartComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    data: {
      name: 'data?',
      description: 'Data that the `chart` is populated with',
      control: 'object',
    },
    colors: {
      name: 'colors?',
      description:
        'Array of colors to be used in sequence for visulization in the `chart`',
      control: 'object',
    },
    text: {
      name: 'text?',
      description: 'Text placed and centered inside the `chart`',
      control: 'text',
    },
    subtext: {
      name: 'subtext?',
      description:
        'Given as an extra clarification to `text` if provided (placed below the main `text`)',
      control: 'text',
    },
    hasLegend: {
      name: 'hasLegend?',
      desription: 'Toggle legend on and off (default is `true`)',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ChartComponent>;

export const Basic: Story = {
  args: {
    data: [
      {
        value: 20,
        chartText: '20%',
        legendText: 'Item 1',
      },
      {
        value: 40,
        chartText: '40%',
        legendText: 'Item 2',
      },
      {
        value: 40,
        chartText: '40%',
        legendText: 'Item 3',
      },
    ],
    colors: ['Crimson', 'DeepSkyBlue', 'MediumVioletRed'],
    text: 'Text',
    hasLegend: true
  },
};

export const Complex: Story = {
  args: {
    data: [
      {
        value: 15,
        chartText: '15%',
        legendText: 'Item 1',
      },
      {
        value: 5,
        chartText: '5%',
        legendText: 'Item 2',
      },
      {
        value: 10,
        chartText: '10%',
        legendText: 'Item 3',
      },
      {
        value: 10,
        chartText: '10%',
        legendText: 'Item 4',
      },
      {
        value: 18,
        chartText: '18%',
        legendText: 'Item 5',
      },
      {
        value: 2,
        chartText: '2%',
        legendText: 'Item 6',
      },
      {
        value: 10,
        chartText: '10%',
        legendText: 'Item 7',
      },
      {
        value: 10,
        chartText: '10%',
        legendText: 'Item 8',
      },
      {
        value: 10,
        chartText: '10%',
        legendText: 'Item 9',
      },
      {
        value: 1,
        chartText: '1%',
        legendText: 'Item 10',
      },
      {
        value: 2,
        chartText: '2%',
        legendText: 'Item 11',
      },
      {
        value: 2,
        chartText: '2%',
        legendText: 'Item 12',
      },
      {
        value: 1,
        chartText: '1%',
        legendText: 'Item 13',
      },
      {
        value: 1,
        chartText: '1%',
        legendText: 'Item 14',
      },
      {
        value: 1,
        chartText: '1%',
        legendText: 'Item 15',
      },
      {
        value: 1,
        chartText: '1%',
        legendText: 'Item 16',
      },
      {
        value: 1,
        chartText: '1%',
        legendText: 'Item 17',
      },
    ],
    colors: [
      '#A5242F',
      '#15808D',
      '#FF4940',
      '#103240',
      '#124E57',
      '#F15A22',
      '#A3A580',
      '#F69521',
      '#3D7369',
      '#7AC643',
      '#F2B81A',
      '#2DBED9',
      '#F19C52',
      '#006FB7',
    ],
    text: '100%',
    subtext: 'allocation',
    hasLegend: true
  },
};
