import { ArrayMinSize, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto {
    @IsString({
        message: "Title is required"
    })
    @IsNotEmpty({
        message: "Title can`t be empty"
    })
    title: string

    @IsString({
        message: "Description is required"
    })
    @IsNotEmpty({
        message: "Description can`t be empty"
    })
    description: string 

    @IsNumber({}, {
        message: "Price should be number"
    })
    @IsNotEmpty({
        message: "Price can`t be empty"
    })
    price: number

    @IsString({
        message: "Set at least one picture",
        each: true 
    })
    @ArrayMinSize(1, {
        message: "Set at least one picture"
    })
    @IsNotEmpty({
        each: true,
        message: "Picture`s path can`t be empty"
    })
    images: string[]

    @IsString({
        message: "Category is required"
    })
    @IsNotEmpty({
        message: "Categeory`s ID can`t be empty"
    })
    categoryId: string

    @IsString({
        message: "Color is required"
    })
    @IsNotEmpty({
        message: "Color`s ID can`t be empty"
    })
    colorId: string
}