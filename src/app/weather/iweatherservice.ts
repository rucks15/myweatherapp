import { Observable } from 'rxjs';
import { ICurrentWeather } from '../icurrent-weather';

export interface IWeatherService {
    getCurrentWeatherData(city: string, country: string):
    Observable<ICurrentWeather>
}