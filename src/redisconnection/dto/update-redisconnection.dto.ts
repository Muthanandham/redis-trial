import { PartialType } from '@nestjs/swagger';
import { CreateRedisconnectionDto } from './create-redisconnection.dto';

export class UpdateRedisconnectionDto extends PartialType(CreateRedisconnectionDto) {}
