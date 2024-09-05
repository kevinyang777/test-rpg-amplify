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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FieldModelService } from "../fieldModel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FieldModelCreateInput } from "./FieldModelCreateInput";
import { FieldModel } from "./FieldModel";
import { FieldModelFindManyArgs } from "./FieldModelFindManyArgs";
import { FieldModelWhereUniqueInput } from "./FieldModelWhereUniqueInput";
import { FieldModelUpdateInput } from "./FieldModelUpdateInput";
import { CharacterFindManyArgs } from "../../character/base/CharacterFindManyArgs";
import { Character } from "../../character/base/Character";
import { CharacterWhereUniqueInput } from "../../character/base/CharacterWhereUniqueInput";
import { MonsterFindManyArgs } from "../../monster/base/MonsterFindManyArgs";
import { Monster } from "../../monster/base/Monster";
import { MonsterWhereUniqueInput } from "../../monster/base/MonsterWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FieldModelControllerBase {
  constructor(
    protected readonly service: FieldModelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FieldModel })
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FieldModelCreateInput,
  })
  async createFieldModel(
    @common.Body() data: FieldModelCreateInput
  ): Promise<FieldModel> {
    return await this.service.createFieldModel({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FieldModel] })
  @ApiNestedQuery(FieldModelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fieldModels(@common.Req() request: Request): Promise<FieldModel[]> {
    const args = plainToClass(FieldModelFindManyArgs, request.query);
    return this.service.fieldModels({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FieldModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fieldModel(
    @common.Param() params: FieldModelWhereUniqueInput
  ): Promise<FieldModel | null> {
    const result = await this.service.fieldModel({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FieldModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FieldModelUpdateInput,
  })
  async updateFieldModel(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() data: FieldModelUpdateInput
  ): Promise<FieldModel | null> {
    try {
      return await this.service.updateFieldModel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: FieldModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFieldModel(
    @common.Param() params: FieldModelWhereUniqueInput
  ): Promise<FieldModel | null> {
    try {
      return await this.service.deleteFieldModel({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/characters")
  @ApiNestedQuery(CharacterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "read",
    possession: "any",
  })
  async findCharacters(
    @common.Req() request: Request,
    @common.Param() params: FieldModelWhereUniqueInput
  ): Promise<Character[]> {
    const query = plainToClass(CharacterFindManyArgs, request.query);
    const results = await this.service.findCharacters(params.id, {
      ...query,
      select: {
        createdAt: true,
        experience: true,

        fieldField: {
          select: {
            id: true,
          },
        },

        hp: true,
        id: true,
        level: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/characters")
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  async connectCharacters(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        connect: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/characters")
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  async updateCharacters(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        set: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/characters")
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  async disconnectCharacters(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        disconnect: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/monsters")
  @ApiNestedQuery(MonsterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "read",
    possession: "any",
  })
  async findMonsters(
    @common.Req() request: Request,
    @common.Param() params: FieldModelWhereUniqueInput
  ): Promise<Monster[]> {
    const query = plainToClass(MonsterFindManyArgs, request.query);
    const results = await this.service.findMonsters(params.id, {
      ...query,
      select: {
        createdAt: true,
        experienceReward: true,

        fieldField: {
          select: {
            id: true,
          },
        },

        hp: true,
        id: true,
        level: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/monsters")
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  async connectMonsters(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: MonsterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      monsters: {
        connect: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/monsters")
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  async updateMonsters(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: MonsterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      monsters: {
        set: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/monsters")
  @nestAccessControl.UseRoles({
    resource: "FieldModel",
    action: "update",
    possession: "any",
  })
  async disconnectMonsters(
    @common.Param() params: FieldModelWhereUniqueInput,
    @common.Body() body: MonsterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      monsters: {
        disconnect: body,
      },
    };
    await this.service.updateFieldModel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
