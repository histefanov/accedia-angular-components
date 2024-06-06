import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TabsComponent } from '../../lib/components/tabs/tabs.component';
import { TabComponent } from '../../lib/components/tab/tab.component';
import { ButtonComponent } from '../../lib/components/button/button.component';

const meta: Meta<TabsComponent> = {
  title: 'Components/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabComponent, ButtonComponent],
    }),
  ],
  render: (args: TabsComponent) => {
    const props = {
      ...args,
    };

    return {
      props,
      template: `
        <acc-tabs [sliderColor]="sliderColor">
          <acc-tab 
            label="First tab"
            [navSideContent]="navSideContentFirst"
          >
            <span>First tab content</span>
          </acc-tab>
          <acc-tab 
            label="Second tab" 
            [navSideContent]="navSideContentSecond"
          >
            <span>Second tab content</span>
          </acc-tab>
          <acc-tab label="Third tab" [navSideContent]="navSideContentThird">
            <span>Third tab content</span>
          </acc-tab>
        </acc-tabs>

        <ng-template #navSideContentFirst>
          <span>Tip: Content can be projected here.</span>
        </ng-template>
        <ng-template #navSideContentSecond>
          <acc-button title="Action button" size="small" variant="outlined"></acc-button>
        </ng-template>
        <ng-template #navSideContentThird>
          <acc-button title="First button" size="small" variant="filled"></acc-button>
          <acc-button title="Second button" size="small" variant="outlined"></acc-button>
        </ng-template>
      `,
      styles: [
        `
          span {
            font-size: 14px;
            color: grey;
          }
        `
      ]
    };
  },
  argTypes: {
    sliderColor: {
      name: 'sliderColor?',
      description: 'Use this property to change the color of the slider which indicates the currenty active tab',
      control: 'color'
    }
  },
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Primary: Story = {
  args: {
    sliderColor: undefined
  },
};
