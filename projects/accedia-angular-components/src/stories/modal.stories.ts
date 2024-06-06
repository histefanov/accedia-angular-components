import { moduleMetadata, type Meta, type StoryObj, applicationConfig } from '@storybook/angular';
import { AnimationPosition, ExpandableArrowComponent } from '../lib/components/expandable/expandable-arrow/expandable-arrow.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from '../lib/components/modal/modal.component';
import { ButtonComponent } from '../lib/components/button/button.component';
import { AdditionalInfoComponent } from '../lib/components/additional-info/additional-info.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ModalComponent> = {
    title: 'Components/Modal',
    component: ModalComponent,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [provideAnimations()],
        }),
        moduleMetadata({
            declarations: [ModalComponent, ButtonComponent, AdditionalInfoComponent],
            imports: [],
        }),
    ],
    render: (args) => {
        const { ...props } = args;
        return {
            props: {
                ...props,
            },
            template: `
            <afc-modal header="Title" width='400'>
                <acc-button isOpenButton title="Open Modal"></acc-button>
                <div class="content">
                    <acc-button emitValue="isCloseModal" title="Close Modal"></acc-button>
                    <h2> Modal content </h2>
                </div>
            </afc-modal>

        <ADDITIONAL-INFO>
         @Host() @Optional() public wrapper: ExpandableWrapperComponent
        </ADDITIONAL-INFO>
      `
        }
    },
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<ModalComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
    args: {
    },
};


