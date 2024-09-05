import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MonsterService } from "./monster.service";
import { MonsterControllerBase } from "./base/monster.controller.base";

@swagger.ApiTags("monsters")
@common.Controller("monsters")
export class MonsterController extends MonsterControllerBase {
  constructor(protected readonly service: MonsterService) {
    super(service);
  }
}
