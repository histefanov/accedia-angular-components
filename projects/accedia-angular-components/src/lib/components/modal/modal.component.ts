import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

/**
   Example usage
     <afc-modal>
     <afc-button isOpenButton title="Open Modal"></afc-button>
      <div class="content">
      <afc-button emitValue="isCloseModal" title="Close Modal"></afc-button>
      <h1> This is test modal </h1>
      </div>
     </afc-modal>
     
  isOpenButton tag specifies which element triggers the modal (usually a button), and it is always shown.
  Pass [isCloseButton]="true" to a button to specify which buttons in the modal should be used
  for closing the modal.Everything that does not have isOpenButton tag is the content of the modal.

  No additional event handling required for open/close of the modal.
  
          
*/

@Component({
  selector: 'afc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() disableOutsideClickClose: boolean = false;
  @Input() withCloseButton: boolean = true;
  @Input() variant: 'standard' | 'error' | 'info' = 'standard';
  @Input() header: string;
  @Input() content: string;
  @Input() width: number;
  @Input() noScrollbarContentContainer: boolean;
  @Input() reversedPadding: boolean; // sets inner-container to 0 padding, sets 24px to header-container
  @Output() onClose = new EventEmitter<boolean>();
  @ContentChildren(ButtonComponent, { descendants: true }) buttons: QueryList<ButtonComponent>;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  public ngAfterViewInit() {
    this.buttons.forEach((buttons: ButtonComponent) =>
      buttons.click.subscribe((emitValue: string) => {
        if (!this.disableOutsideClickClose) {
          this.closeFromModal(emitValue);
        }
      })
    );
  }
  public nativeElement: HTMLElement;

  public toggleModal() {
    this.isOpen = !this.isOpen;
    this.onClose.emit(this.isOpen);
  }

  public externalClickClose(e: Event) {
    if (!this.disableOutsideClickClose) {
      const target = e.target as HTMLElement;
      if (target.classList.contains('content-container') || target.classList.contains('background-container')) {
        this.isOpen = false;
        this.onClose.emit(this.isOpen);
      }
    }
  }

  public ngOnDestroy(): void { }

  private closeFromModal(emitValue: string) {
    if (true) {
      this.isOpen = false;
      this.onClose.emit(this.isOpen);
    }
  }
}
