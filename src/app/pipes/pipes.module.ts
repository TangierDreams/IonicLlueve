import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturaPipe } from './temperatura.pipe';
import { Unix2datePipe } from './unix2date.pipe';
import { CapitalizaPipe } from './capitaliza.pipe';
import { PresionPipe } from './presion.pipe';
import { VientoPipe } from './viento.pipe';
import { HumedadPipe } from './humedad.pipe';



@NgModule({
    declarations: [
        TemperaturaPipe,
        Unix2datePipe,
        CapitalizaPipe,
        PresionPipe,
        VientoPipe,
        HumedadPipe
    ],
    imports: [
        CommonModule
    ],
    entryComponents: [
        TemperaturaPipe,
        Unix2datePipe,
        CapitalizaPipe,
        PresionPipe,
        VientoPipe,
        HumedadPipe,
    ],
    exports: [
        TemperaturaPipe,
        Unix2datePipe,
        CapitalizaPipe,
        PresionPipe,
        VientoPipe,
        HumedadPipe
    ]
})
export class PipesModule { }
