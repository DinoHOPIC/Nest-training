import { Test, TestingModule } from '@nestjs/testing';
import { ChristmasController } from './christmas.controller';

describe('ChristmasController', () => {
  let controller: ChristmasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChristmasController],
    }).compile();

    controller = module.get<ChristmasController>(ChristmasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
