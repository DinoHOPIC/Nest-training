import { Controller, Get, Query } from '@nestjs/common';
import { ChristmasService } from './christmas.service';

@Controller('christmas')
export class ChristmasController {
  constructor(private christmasService: ChristmasService) {}

  @Get()
  getAllInLocation(@Query('arrdt') arrdt: number) {
    return this.christmasService.getAllInLocation(arrdt);
  }
}
