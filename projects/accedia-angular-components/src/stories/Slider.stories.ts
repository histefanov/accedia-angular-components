import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LabelComponent } from '../lib/components/label/label.component';
import { SliderComponent } from '../lib/components/slider/slider.component';

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
    thumbSize: {
      name: 'thumbSize?',
      description: 'Adjusts the size of the thumb',
      control: 'inline-radio',
      options: [24, 32],
      table: {
        defaultValue: {
          summary: 24
        }
      }
    },

    showValue: {
      name: 'showValue',
      description: 'show value on the right',
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
      description: 'show value on thumb',
      control: 'inline-radio',
      options: [true, false],
      table: {
        defaultValue: {
          summary: true
        }
      }
    },

    label: {
      name: 'label?',
      description: 'Label of the radio group element',
    },
  },
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Primary: Story = {
  args: {
    thumbSize: 24,
    label: 'Slider label',
    showValue: false,
    valueOnThumb: true,
    sliderValue: 50
  }
};
