import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        }, {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        }, {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee',
        }
    ];

    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`No existe el coche con id: ${id}`);

        return car;
    }

    create(createCarDto: CreateCarDto): Car {
        const newCar: Car = {
            id: uuid(),
            // brand: createCarDto.brand,
            // model: createCarDto.model,
            ...createCarDto
        }

        this.cars.push(newCar);

        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto): Car {
        // this.cars
        let carDb: Car = this.findById(id);

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                // ...carDb, // Esparcir los datos del coche de BD
                // ...updateCarDto, // Esparcir los nuevos datos del coche recibidos
                // id, // sobrescribir el id con el original por si acaso
                carDb = { ...carDb, ...updateCarDto, id }

                return carDb;
            }

            return car;
        });

        return carDb;
    }
}
