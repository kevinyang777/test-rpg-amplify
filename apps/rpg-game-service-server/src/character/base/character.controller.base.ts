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
import { CharacterService } from "../character.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CharacterCreateInput } from "./CharacterCreateInput";
import { Character } from "./Character";
import { CharacterFindManyArgs } from "./CharacterFindManyArgs";
import { CharacterWhereUniqueInput } from "./CharacterWhereUniqueInput";
import { CharacterUpdateInput } from "./CharacterUpdateInput";
import { InventoryFindManyArgs } from "../../inventory/base/InventoryFindManyArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";
import { StatusFindManyArgs } from "../../status/base/StatusFindManyArgs";
import { Status } from "../../status/base/Status";
import { StatusWhereUniqueInput } from "../../status/base/StatusWhereUniqueInput";
import { CharacterDto } from "../CharacterDto";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CharacterControllerBase {
  constructor(
    protected readonly service: CharacterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Character })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CharacterCreateInput,
  })
  async createCharacter(
    @common.Body() data: CharacterCreateInput
  ): Promise<Character> {
    return await this.service.createCharacter({
      data: {
        ...data,

        fieldField: data.fieldField
          ? {
              connect: data.fieldField,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Character] })
  @ApiNestedQuery(CharacterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async characters(@common.Req() request: Request): Promise<Character[]> {
    const args = plainToClass(CharacterFindManyArgs, request.query);
    return this.service.characters({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async character(
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Character | null> {
    const result = await this.service.character({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CharacterUpdateInput,
  })
  async updateCharacter(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() data: CharacterUpdateInput
  ): Promise<Character | null> {
    try {
      return await this.service.updateCharacter({
        where: params,
        data: {
          ...data,

          fieldField: data.fieldField
            ? {
                connect: data.fieldField,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCharacter(
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Character | null> {
    try {
      return await this.service.deleteCharacter({
        where: params,
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
  @common.Get("/:id/inventories")
  @ApiNestedQuery(InventoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "any",
  })
  async findInventories(
    @common.Req() request: Request,
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Inventory[]> {
    const query = plainToClass(InventoryFindManyArgs, request.query);
    const results = await this.service.findInventories(params.id, {
      ...query,
      select: {
        character: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        item: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/inventories")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async connectInventories(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        connect: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventories")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async updateInventories(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        set: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventories")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async disconnectInventories(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        disconnect: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/statuses")
  @ApiNestedQuery(StatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "read",
    possession: "any",
  })
  async findStatuses(
    @common.Req() request: Request,
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Status[]> {
    const query = plainToClass(StatusFindManyArgs, request.query);
    const results = await this.service.findStatuses(params.id, {
      ...query,
      select: {
        agility: true,

        character: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        intelligence: true,
        strength: true,
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

  @common.Post("/:id/statuses")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async connectStatuses(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: StatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      statuses: {
        connect: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/statuses")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async updateStatuses(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: StatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      statuses: {
        set: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/statuses")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async disconnectStatuses(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: StatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      statuses: {
        disconnect: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/raise-level")
  @swagger.ApiOkResponse({
    type: CharacterDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async RaiseCharacterLevel(
    @common.Body()
    body: CharacterDto
  ): Promise<CharacterDto> {
    return this.service.RaiseCharacterLevel(body);
  }
}
