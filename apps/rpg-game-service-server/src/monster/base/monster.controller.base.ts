/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MonsterService } from "../monster.service";
import { MonsterCreateInput } from "./MonsterCreateInput";
import { Monster } from "./Monster";
import { MonsterFindManyArgs } from "./MonsterFindManyArgs";
import { MonsterWhereUniqueInput } from "./MonsterWhereUniqueInput";
import { MonsterUpdateInput } from "./MonsterUpdateInput";
import { MonsterDto } from "../MonsterDto";

export class MonsterControllerBase {
  constructor(protected readonly service: MonsterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Monster })
  async createMonster(
    @common.Body() data: MonsterCreateInput
  ): Promise<Monster> {
    return await this.service.createMonster({
      data: data,
      select: {
        createdAt: true,
        experienceReward: true,
        id: true,
        level: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Monster] })
  @ApiNestedQuery(MonsterFindManyArgs)
  async monsters(@common.Req() request: Request): Promise<Monster[]> {
    const args = plainToClass(MonsterFindManyArgs, request.query);
    return this.service.monsters({
      ...args,
      select: {
        createdAt: true,
        experienceReward: true,
        id: true,
        level: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Monster })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async monster(
    @common.Param() params: MonsterWhereUniqueInput
  ): Promise<Monster | null> {
    const result = await this.service.monster({
      where: params,
      select: {
        createdAt: true,
        experienceReward: true,
        id: true,
        level: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Monster })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMonster(
    @common.Param() params: MonsterWhereUniqueInput,
    @common.Body() data: MonsterUpdateInput
  ): Promise<Monster | null> {
    try {
      return await this.service.updateMonster({
        where: params,
        data: data,
        select: {
          createdAt: true,
          experienceReward: true,
          id: true,
          level: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Monster })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMonster(
    @common.Param() params: MonsterWhereUniqueInput
  ): Promise<Monster | null> {
    try {
      return await this.service.deleteMonster({
        where: params,
        select: {
          createdAt: true,
          experienceReward: true,
          id: true,
          level: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/fight-monster")
  @swagger.ApiOkResponse({
    type: MonsterDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async FightMonster(
    @common.Body()
    body: MonsterDto
  ): Promise<MonsterDto> {
    return this.service.FightMonster(body);
  }
}
