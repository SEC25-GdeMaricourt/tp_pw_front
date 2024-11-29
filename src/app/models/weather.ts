export interface ICoord {
	lon: number,
	lat: number,
}

export interface IWeather {
	id: number;
	main: string;
	description: string;
	icon: string
}

export interface IMain {
	temp: number;
}

export interface IBase {
	station: string,
}

export interface IWind {
	speed: number,
	deg: number,
	gust: number,
}

export interface ISnow {
	"1h": number,
}

export interface IClouds {
	all: number,
}

export interface ISys {
	type: number,
	id: number,
	country: string,
	sunrise: number,
	sunset: number,
}

export interface IWeatherMain {
	base: IBase,
	clouds: IClouds,
	cod: number,
	coord: ICoord,
	dt: number,
	id: number,
	main: IMain,
	name: string,
	snow: ISnow,
	sys: ISys,
	timezone: number,
	visibility: number,
	weather: IWeather,
	wind: IWind,
}