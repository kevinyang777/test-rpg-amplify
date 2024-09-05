import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class MonsterDto {
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
    experienceReward!: number;
}

export { MonsterDto as MonsterDto };