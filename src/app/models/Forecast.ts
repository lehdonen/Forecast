import { Main, Weather } from './Weather';

export interface ForecastDTO {
    list: Forecast[];
}

export interface Forecast {
    dt: number;
    main: Main;
    weather: Weather[];
}
