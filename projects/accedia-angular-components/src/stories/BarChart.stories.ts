import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { BarChartComponent } from '../lib/components/bar-chart/bar-chart.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SharedModule } from '../lib/common/shared.module';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<BarChartComponent> = {
  title: 'Components/Bar chart',
  component: BarChartComponent,
  
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
    moduleMetadata({
      declarations: [BarChartComponent],
      imports: [SharedModule]
    })
  ],
  render: (args: BarChartComponent) => {
    const props = {
      ...args,
    };

    return {
      props,
      template: `
        <div>
          <acc-bar-chart
            [componentLabelType]="componentLabelType"
            [components]="components"
            [gap]="gap"
            [disableAnimations]="disableAnimations"
            [displayComponentLabels]="displayComponentLabels"
            [displayLegend]="displayLegend"
            [legendDirection]="legendDirection"
          >
          </acc-bar-chart>
        </div>
      `,
      styles: [
        `
          div {
            max-width: 600px
          }
        `
      ]
    }
  },
  argTypes: {
    componentLabelType: {
      name: 'componentLabelType?',
      description: 'Can be presented as precentage or the raw input value',
      control: 'inline-radio',
      options: ['amount', 'percentage'],
      table: {
        defaultValue: {
          summary: 'amount'
        }
      }
    },
    components: {
      name: 'components',
      description: 'Array of numbers representing the bar chart components',
      control: 'object',
      table: {
        defaultValue: {
          summary: '[]'
        },
      },
    },
    gap: {
      name: 'gap',
      description: 'Size of the gap between the chart components',
      control: 'number',
      table: {
        defaultValue: {
          summary: '5'
        },
      },
    },
    disableAnimations: {
      name: 'disableAnimations?',
      description: 'Disables the bar chart animations',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    displayComponentLabels: {
      name: 'displayComponentLabel?',
      description: 'Sets visibility of the inset labels of individual components',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    displayLegend: {
      name: 'displayLegend?',
      description: 'Sets visibility of the chart legend',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    legendDirection: {
      name: 'legendDirection?',
      description: 'Controls the layout of the legend items',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: {
          summary: 'horizontal'
        }
      }
    },
  },
};

export default meta;
type Story = StoryObj<BarChartComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Medium: Story = {
  args: {
    componentLabelType: 'amount',
    components: [
      {
        value: 15,
        description: 'Carrots'
      },
      {
        value: 30,
        description: 'Lemons'
      },
      {
        value: 40,
        description: 'Kiwis'
      },
      {
        value: 25,
        description: 'Apples'
      }
    ],
    gap: 5,
    disableAnimations: false,
    displayComponentLabels: true,
    displayLegend: true,
    legendDirection: 'horizontal'
  },
};
