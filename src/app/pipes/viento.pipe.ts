import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'viento'
})
export class VientoPipe implements PipeTransform {

    transform(value: number): string {
        return value.toString() + " km/h";
    }

}
