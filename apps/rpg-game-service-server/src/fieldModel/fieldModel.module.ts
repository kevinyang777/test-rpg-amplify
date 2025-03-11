import { Module } from "@nestjs/common";
import { FieldModelModuleBase } from "./base/fieldModel.module.base";
import { FieldModelService } from "./fieldModel.service";
import { FieldModelController } from "./fieldModel.controller";

@Module({
  imports: [FieldModelModuleBase],
  controllers: [FieldModelController],
  providers: [FieldModelService],
  exports: [FieldModelService],
})
export class FieldModelModule {}
