// Tab.stories.ts
import {
  Meta,
  StoryObj,
  moduleMetadata,
} from '@storybook/angular';
import { TabComponent } from '../lib/components/tab/tab.component';
import { TabsComponent } from '../lib/components/tabs/tabs.component';

const meta: Meta<TabComponent> = {
  title: 'Components/Tab',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent],
    }),
  ],
  render: (args: TabComponent) => {
    const props = {
      ...args,
    };

    return {
      props,
      template: `
        <acc-tabs>
          <acc-tab label="Sample tab" [isActive]="false">
            Content 1
          </acc-tab>
          <acc-tab [label]="label" [isActive]="isActive">
            Content 2
          </acc-tab>
        </acc-tabs>
      `,
    };
  },
  argTypes: {
    isActive: {
      name: 'isActive?',
      description:
        'Determines if the tab is active or not. If no tab is explicitly set as being active the first one gets activated automatically',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    label: {
      name: 'label?',
      description: 'The label text of the tab',
    },
    navSideContent: {
      name: 'navSideContent?',
      description:
        'A template reference for the side content of the tab (if any)',
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<TabComponent>;

export const Primary: Story = {
  args: {
    isActive: false,
    label: 'Control tab',
    navSideContent: undefined,
  },
};
