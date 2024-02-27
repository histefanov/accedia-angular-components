import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataField' })
export class DataFieldPipe implements PipeTransform {
  transform(value: any): string | number | null {
    if (!value && value !== 0)
      return '—';

    if (typeof value === 'string' || typeof value === 'number')
      return value;
    
    return null;
  }
}