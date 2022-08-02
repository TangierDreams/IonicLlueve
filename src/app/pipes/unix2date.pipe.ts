import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unix2date'
})
export class Unix2datePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
