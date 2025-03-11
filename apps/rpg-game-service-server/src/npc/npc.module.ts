import { Module } from "@nestjs/common";
import { NpcModuleBase } from "./base/npc.module.base";
import { NpcService } from "./npc.service";
import { NpcController } from "./npc.controller";

@Module({
  imports: [NpcModuleBase],
  controllers: [NpcController],
  providers: [NpcService],
  exports: [NpcService],
})
export class NpcModule {}
