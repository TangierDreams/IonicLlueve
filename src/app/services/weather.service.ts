import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    public weatherData;

    constructor(
        private httpClient: HttpClient
    ) { }


    public getWeather2 = new Promise<any>((resolve, reject) => {
        console.log("getWeather()");
        const API_KEY: string = "b6f36a3894fcea73d145adf6cad063f5";
        const RUTA_FORECAST: string = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,alert&units=metric&lang=ES&appid=";
        const datos = this.httpClient.get(RUTA_FORECAST + API_KEY);
        console.log("datos...");
        console.log(datos);
        const aux: string = JSON.stringify(datos);
        const prevision = JSON.parse(aux);
        resolve(prevision);
    });


    public getWeather() {
        const API_KEY: string = "b6f36a3894fcea73d145adf6cad063f5";
        const URL_FORECAST: string = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,alert&units=metric&lang=ES&appid=";

        let promise = new Promise<void>((resolve, reject) => {
            this.httpClient.get(URL_FORECAST + API_KEY)
                .toPromise()
                .then(
                    res => { // Success
                        const aux: string = JSON.stringify(res);
                        this.weatherData = JSON.parse(aux);
                        resolve();
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }
}



