import { Car } from "src/cars/interfaces/car.interface";
import { v4 } from "uuid";

export const CARS_SEED: Car[] = [
    {
        id: v4(),
        brand: 'Toyota',
        model: 'Corolla',
    }, {
        id: v4(),
        brand: 'Honda',
        model: 'Civic',
    }, {
        id: v4(),
        brand: 'Jeep',
        model: 'Cherokee',
    }
];