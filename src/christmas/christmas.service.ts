import { Injectable } from '@nestjs/common';
import * as chirstmasData from '../christmas.json';

@Injectable()
export class ChristmasService {
  getAllInLocation(arrdt: number) {
    return chirstmasData
      .filter((element) => element.fields.arrdt == arrdt)
      .map((element) => {
        return {
          garden: element.fields.jardin,
          address: element.fields.adresse,
          arrdt: element.fields.arrdt,
        };
      });
  }
}
