import { Test, TestingModule } from '@nestjs/testing';
import { RedisconnectionService } from './redisconnection.service';

describe('RedisconnectionService', () => {
  let service: RedisconnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisconnectionService],
    }).compile();

    service = module.get<RedisconnectionService>(RedisconnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
