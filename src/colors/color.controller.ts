import { Controller, Get, Query } from '@nestjs/common';
import { ColorService } from './color.service';

// va ecouter : localhost:4050/todos car a coté de controller on à mis 'todos'
@Controller('color')
export class ColorController {
  constructor(private colorService: ColorService) {}
  @Get()
  getColorName(@Query('name') name: string) {
    return this.colorService.getColorName(name);
  }
}
