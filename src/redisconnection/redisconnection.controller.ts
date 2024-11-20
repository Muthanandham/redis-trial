import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { RedisconnectionService } from './redisconnection.service';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';


@Controller('redisconnection')
export class RedisconnectionController {
  constructor(private readonly service: RedisconnectionService) {}

  @UseInterceptors(CacheInterceptor) 
  @CacheKey('custom-key')
  @CacheTTL(30) 
  @Get('/:id')
  async getPokemon(@Param('id') id: number): Promise<string> {
    return await this.service.findone(+id);
  }}
