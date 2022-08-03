import { WeatherService } from './../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Ciudad } from '../models/ciudad';
import { CiudadesService } from '../services/ciudades.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [DatePipe]
})
export class HomePage implements OnInit, OnDestroy {

    public prevision = null;
    public ahora: Date = new Date();
    public ciudades: Ciudad[];
    public ciudadActual: Ciudad;

    constructor(
        private datePipe: DatePipe,
        private loadingController: LoadingController,
        private weatherService: WeatherService,
        private ciudadesService: CiudadesService
    ) { }

    ngOnInit(): void {
        console.log("ngOnInit()");
        this.ciudades = this.ciudadesService.getCiudades();
        this.ciudadActual = this.ciudades[0];
        this.onGetWeather(this.ciudades[0]);
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy()");
    }

    onGetWeather(pCiudad: Ciudad) {
        this.ciudadActual = pCiudad;
        this.loadingController
            .create({ keyboardClose: true, message: "Obteniendo datos de " + pCiudad.nombre })
            .then(ruedecita => {
                ruedecita.present();
                this.weatherService.getWeather(pCiudad.longitud, pCiudad.latitud)
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

    rutaImagen(pImagen: string, size: number): string {
        if (size == 4) {
            return "http://openweathermap.org/img/wn/" + pImagen + "@4x.png"
        } else {
            return "http://openweathermap.org/img/wn/" + pImagen + "@2x.png"
        }
    }

}
