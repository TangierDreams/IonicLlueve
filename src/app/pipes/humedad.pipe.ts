import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'humedad'
})
export class HumedadPipe implements PipeTransform {

    transform(value: number): string {
        return value.toString() + "%";
    }

}
