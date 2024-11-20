import { Module } from '@nestjs/common';
import { RedisconnectionService } from './redisconnection.service';
import { RedisconnectionController } from './redisconnection.controller';
import { HttpService } from '@nestjs/axios';
import { Axios } from 'axios';

@Module({
  controllers: [RedisconnectionController],
  providers: [RedisconnectionService,HttpService,Axios],
})
export class RedisconnectionModule {}
