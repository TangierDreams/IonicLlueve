import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperatura'
})
export class TemperaturaPipe implements PipeTransform {

    transform(value: number): string {
        return Math.round(value).toString() + "º";
    }

}
