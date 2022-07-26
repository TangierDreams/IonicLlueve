import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

    public subscription: Subscription;
    public prevision$: Observable<any>;
    public prevision;


    constructor(
        public navController: NavController,
        public httpClient: HttpClient
    ) { }

    ngOnInit(): void {
        console.log("ngOnInit()");

        const API_KEY: string = "b6f36a3894fcea73d145adf6cad063f5";
        const RUTA_FORECAST: string = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,alert&units=metric&lang=ES&appid=";

        this.prevision$ = this.httpClient.get(RUTA_FORECAST + API_KEY);
        this.subscription = this.prevision$
            .subscribe(datos => {
                this.prevision = datos;
                console.log(datos);
            })
    }


    ngOnDestroy(): void {
        console.log("ngOnDestroy()");
        this.subscription.unsubscribe();

    }

}
