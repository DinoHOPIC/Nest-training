import { Test, TestingModule } from '@nestjs/testing';
import { ColorController } from './color.controller';

describe('TodosController', () => {
  let controller: ColorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorController],
    }).compile();

    controller = module.get<ColorController>(ColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
