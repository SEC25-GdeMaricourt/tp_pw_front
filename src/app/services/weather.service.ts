import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { regions } from '../data/regions';
import { Region } from '../models/region';
import { from, map, mergeMap, Observable } from 'rxjs';
import { IWeatherMain } from '../models/weather';

export interface TempPerCoordinates {
	temperature: number;
	coordonnees: { lat: string, lon: string }
}


@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) { }

	private _getweather(lat: string, lon: string): Observable<TempPerCoordinates> {
		return this.http.get<IWeatherMain>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=7a8f8d7be4a8cb23909fd214db63f598`).pipe(map((meteo) => {
			return {
				temperature: meteo.main.temp,
				coordonnees: {
					lat: lat,
					lon: lon
				}
			} as TempPerCoordinates
		}));
	}

	fetchRegionData$(): Observable<TempPerCoordinates> {
		return from(regions).pipe(
			mergeMap((region) => this._getweather(region.lat, region.lon), 5)
		)
	}
}