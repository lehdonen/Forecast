export interface WeatherDTO {
    dt: number;
    weather: [Weather];
    main: Main;
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
