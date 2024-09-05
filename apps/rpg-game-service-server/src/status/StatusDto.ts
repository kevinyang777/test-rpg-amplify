import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class StatusDto {
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    strength!: number;

    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    agility!: number;

    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    intelligence!: number;
}

export { StatusDto as StatusDto };