import { WeatherService } from './../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [DatePipe]
})
export class HomePage implements OnInit, OnDestroy {

    public prevision = null;
    public ahora: Date = new Date();

    constructor(
        private datePipe: DatePipe,
        private loadingController: LoadingController,
        private weatherService: WeatherService,
    ) { }

    ngOnInit(): void {
        console.log("ngOnInit()");
        this.onGetWeather();
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy()");
    }

    onGetWeather() {
        this.loadingController
            .create({ keyboardClose: true, message: "Obteniendo datos..." })
            .then(ruedecita => {
                ruedecita.present();
                this.weatherService.getWeather()
                    .then(() => {
                        ruedecita.dismiss();
                        console.log("Obtenemos un resultado...")
                        console.log(this.weatherService.weatherData);
                        this.prevision = this.weatherService.weatherData;
                    })
                    .catch(error => {
                        ruedecita.dismiss();
                        console.log("Ups... Se ha producido un error: ", error);
                    })
            });
    }

    unixTime2Date(pUnixTime: number) {
        const date = new Date(pUnixTime * 1000);
        return this.datePipe.transform(date, 'EEEE, dd-MM-yyyy');
    }

    rutaImagen(pImagen: string, size: number): string {
        if (size == 4) {
            return "http://openweathermap.org/img/wn/" + pImagen + "@4x.png"
        } else {
            return "http://openweathermap.org/img/wn/" + pImagen + "@2x.png"
        }
    }

    capitaliza(pTexto: string): string {
        const words = pTexto.split(" ");
        return words.map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(" ");
    }

    // temperatura(pTemp: number) {
    //     return Math.round(pTemp).toString() + "º";
    // }

}
