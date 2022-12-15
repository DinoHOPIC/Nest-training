import { Controller, Get, Post, Query } from '@nestjs/common';
import { CovidService } from './covid.service';

@Controller('covid')
export class CovidController {
  constructor(private covidService: CovidService) {}
  @Get('statistics')
  getStatistics() {
    return this.covidService.getStatistics();
  }

  @Post('getCountrystats')
  getStatiticsCountry(@Query('name') name: string) {
    return this.covidService.addStatitics(name);
  }
}
