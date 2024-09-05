import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class CharacterDto {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    level!: number;

    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    experience!: number;
}

export { CharacterDto as CharacterDto };