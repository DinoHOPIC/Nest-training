import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorModule } from './colors/color.module';
import { CovidController } from './covid/covid.controller';
import { CovidService } from './covid/covid.service';
import { ChristmasController } from './christmas/christmas.controller';
import { ChristmasService } from './christmas/christmas.service';

@Module({
  imports: [ColorModule],
  controllers: [AppController, CovidController, ChristmasController],
  providers: [AppService, CovidService, ChristmasService],
})
export class AppModule {}
