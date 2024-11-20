import { Test, TestingModule } from '@nestjs/testing';
import { RedisconnectionController } from './redisconnection.controller';
import { RedisconnectionService } from './redisconnection.service';

describe('RedisconnectionController', () => {
  let controller: RedisconnectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisconnectionController],
      providers: [RedisconnectionService],
    }).compile();

    controller = module.get<RedisconnectionController>(RedisconnectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
