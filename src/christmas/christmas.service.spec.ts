import { Test, TestingModule } from '@nestjs/testing';
import { ChristmasService } from './christmas.service';

describe('ChristmasService', () => {
  let service: ChristmasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChristmasService],
    }).compile();

    service = module.get<ChristmasService>(ChristmasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
