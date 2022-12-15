import { Injectable } from '@nestjs/common';
import * as countryStats from '../covid.json';

@Injectable()
export class CovidService {
  getStatistics() {
    return countryStats.map((element) => {
      return {
        name: element.name,
        cases: element.latest_data.confirmed,
        deaths: element.latest_data.deaths,
        recovered: element.latest_data.recovered,
      };
    });
  }
  addStatitics(name: string) {
    const {
      latest_data: { confirmed: cases, deaths, recovered },
    } = countryStats.find((element) => {
      return element.name == name;
    });

    return { name, cases, deaths, recovered };
  }
}
