import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('math')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/divide')
  async dividir(
    @Body('num1') num1: number,
    @Body('num2') num2: number,
  ): Promise<number> {
    return this.appService.dividir(num1, num2);
  }

  @Post('/multiply')
  async multiplicar(
    @Body('num1') num1: number,
    @Body('num2') num2: number,
  ): Promise<number> {
    return this.appService.multiplicar(num1, num2);
  }

  @Post('/subtract')
  async restar(
    @Body('num1') num1: number,
    @Body('num2') num2: number,
  ): Promise<number> {
    return this.appService.restar(num1, num2);
  }

  @Post('/add')
  async sumar(
    @Body('num1') num1: number,
    @Body('num2') num2: number,
  ): Promise<number> {
    return this.appService.sumar(num1, num2);
  }
}
