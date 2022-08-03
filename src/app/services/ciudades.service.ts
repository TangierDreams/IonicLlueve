import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
    providedIn: 'root'
})
export class CiudadesService {
    private ciudades: Ciudad[] = [
        { nombre: "Barcelona", pais: "España", longitud: 2.15899, latitud: 41.38879 },
        { nombre: "Madrid", pais: "España", longitud: -3.70256, latitud: 40.4165 },
        { nombre: "Londres", pais: "Reino Unido", longitud: -0.09184, latitud: 51.51279 },
        { nombre: "París", pais: "Francia", longitud: 2.3488, latitud: 48.85341 },
        { nombre: "Berlín", pais: "Alemania", longitud: 13.41053, latitud: 52.52437 },
        { nombre: "Viena", pais: "Austria", longitud: 16.37208, latitud: 48.20849 },
        { nombre: "Oslo", pais: "Noruega", longitud: 10.74609, latitud: 59.91273 },
        { nombre: "Tánger", pais: "Marruecos", longitud: -5.79975, latitud: 35.76727 },
        { nombre: "Moscú", pais: "Rusia", longitud: 37.61556, latitud: 55.75222 },
        { nombre: "Nueva York", pais: "Estados Unidos", longitud: -74.00597, latitud: 40.71427 },
    ]

    constructor() { }

    getCiudades(): Ciudad[] {
        return this.ciudades.slice();
    }
}
