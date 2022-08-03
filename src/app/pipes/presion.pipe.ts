import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'presion'
})
export class PresionPipe implements PipeTransform {

    transform(value: number): string {
        return value.toString() + " mbar";
    }

}
