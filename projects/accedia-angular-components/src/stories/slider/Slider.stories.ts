import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LabelComponent } from '../../lib/components/label/label.component';
import { SliderComponent } from '../../lib/components/slider/slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Components/Slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      declarations: [SliderComponent, LabelComponent]
    })
  ],
  render: (args: SliderComponent) => {
    const props = {
      ...args,
    };

    return {
      props,
      template: `
      <div [ngStyle]="{ display: 'flex', padding: '5px', flexDirection: 'column', 'align-items' : 'center', width: '300px', padding: '5px', }">
        <acc-slider 
          [disabled]="disabled"
          [thumbSize]="thumbSize"
          [label]="label"
          [showValue]="showValue"
          [valueOnThumb]="valueOnThumb"
          [sliderValue]="sliderValue"
        >
        </acc-slider>
      </div>
      `
    }
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      description: 'Slider disabled state',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    thumbSize: {
      name: 'thumbSize?',
      description: 'Adjusts the size of the thumb',
      control: 'inline-radio',
      options: [24, 32],
      table: {
        defaultValue: {
          summary: 32
        }
      }
    },
    showValue: {
      name: 'showValue',
      description: 'Show the current value on the right',
      control: 'inline-radio',
      options: [true, false],
      table: {
        defaultValue: {
          summary: true
        }
      }
    },
    valueOnThumb: {
      name: 'valueOnThumb',
      description: 'Show the current value on the slider thumb',
      control: 'inline-radio',
      options: [true, false],
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    label: {
      name: 'label?',
      description: 'Label element for the slider',
      table: {
        defaultValue: {
          summary: 'Amount'
        }
      }
    },
    sliderValue: {
      name: 'sliderValue',
      description: 'Slider\'s value',
      table: {
        defaultValue: {
          summary: 0
        }
      }
    }
  },
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Primary: Story = {
  args: {
    disabled: false,
    thumbSize: 24,
    label: 'Slider label',
    showValue: true,
    valueOnThumb: false,
    sliderValue: 50
  }
};
