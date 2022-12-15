import { Injectable } from '@nestjs/common';
import * as colors from '../colors.json';

@Injectable()
export class ColorService {
  getColorName(color: string) {
    if (colors[color]) {
      return { name: color, hexa: colors[color] };
    } else {
      return { Message: 'Color not found' };
    }
  }
}
