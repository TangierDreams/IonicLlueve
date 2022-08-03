import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unix2date'
})
export class Unix2datePipe implements PipeTransform {

    transform(value: number): Date {
        return new Date(value * 1000);;
    }

}
