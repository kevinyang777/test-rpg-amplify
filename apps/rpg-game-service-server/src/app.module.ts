import { Module } from "@nestjs/common";
import { StatusModule } from "./status/status.module";
import { CharacterModule } from "./character/character.module";
import { MonsterModule } from "./monster/monster.module";
import { UserModule } from "./user/user.module";
import { FieldModelModule } from "./fieldModel/fieldModel.module";
import { NpcModule } from "./npc/npc.module";
import { InventoryModule } from "./inventory/inventory.module";
import { ItemModule } from "./item/item.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    StatusModule,
    CharacterModule,
    MonsterModule,
    UserModule,
    FieldModelModule,
    NpcModule,
    InventoryModule,
    ItemModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
