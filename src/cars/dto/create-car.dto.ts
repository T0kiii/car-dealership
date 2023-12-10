import { IsString } from "class-validator";

export class CreateCarDto {
    
    @IsString( { message: `Mensaje personalizado: Tiene que ser un string`} )
    readonly brand: string;
    @IsString()
    readonly model: string;
}