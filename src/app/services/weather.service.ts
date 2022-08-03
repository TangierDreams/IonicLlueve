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


    public getWeather(pLongitud: number, pLatitud: number) {
        const API_KEY: string = "b6f36a3894fcea73d145adf6cad063f5";
        const URL_FORECAST: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${pLatitud}&lon=${pLongitud}&exclude=minutely,alert&units=metric&lang=ES&appid=`;

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



