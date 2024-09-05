import * as graphql from "@nestjs/graphql";
import { MonsterResolverBase } from "./base/monster.resolver.base";
import { Monster } from "./base/Monster";
import { MonsterService } from "./monster.service";

@graphql.Resolver(() => Monster)
export class MonsterResolver extends MonsterResolverBase {
  constructor(protected readonly service: MonsterService) {
    super(service);
  }
}
