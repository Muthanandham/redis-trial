import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RedisconnectionService{
  constructor(private readonly httpService: HttpService) {}

  async findone(id: number): Promise<string> {
    const { data } = await this.httpService.axiosRef.get(` https://jsonplaceholder.typicode.com/${id}`)
    return await `${data.name}`
  }
}
