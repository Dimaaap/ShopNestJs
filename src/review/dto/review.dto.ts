import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class ReviewDto {
    @IsString({
        message: "Review`s text should be string"
    })
    @IsNotEmpty({
        message: "Review`s text is required"
    })
    text: string 

    @IsNumber({}, {
        message: "Rating should be a number"
    })
    @Min(1, {
        message: "Minimal rating - 1"
    })
    @Max(5, {
        message: "Maximum rating - 5"
    })
    @IsNotEmpty({
        message: "Rating is required"
    })
    rating: number
}