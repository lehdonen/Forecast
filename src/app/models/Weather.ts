export interface WeatherDTO {
    dt: number;
    weather: [Weather];
    main: Main;
    coord: Coord;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    temp_min: number;
    temp_max: number;
}

export interface Coord {
    lat: number;
    lon: number;
}
