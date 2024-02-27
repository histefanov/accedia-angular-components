import { NgModule } from '@angular/core';
import { DataFieldPipe } from './data-field.pipe';

@NgModule({
  declarations: [DataFieldPipe],
  exports: [DataFieldPipe]
})
export class SharedModule { }