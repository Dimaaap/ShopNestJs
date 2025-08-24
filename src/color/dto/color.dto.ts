import { IsString } from "class-validator";

export class ColorDTO{
    @IsString({
        message: "Title is required"
    })
    name: string

    @IsString({
        message: "Value is required"
    })
    value: string
}