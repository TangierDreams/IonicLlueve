import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturaPipe } from './temperatura.pipe';
import { Unix2datePipe } from './unix2date.pipe';



@NgModule({
    declarations: [
        TemperaturaPipe,
        Unix2datePipe
    ],
    imports: [
        CommonModule
    ],
    entryComponents: [
        TemperaturaPipe
    ],
    exports: [
        TemperaturaPipe
    ]
})
export class PipesModule { }
