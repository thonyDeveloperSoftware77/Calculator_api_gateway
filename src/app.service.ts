import { ConflictException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }

  async dividir(num1: number, num2: number): Promise<number> {
    let response;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new ConflictException('Both inputs must be numbers');
    }

    try {
       response = await lastValueFrom(this.httpService.post('http://localhost:2003/divide', { num1, num2 }));
      return response.data;
    }catch (error) {
      throw new ConflictException(`Error al dividir ${num1} / ${num2}`);

    }
  }

  async multiplicar(num1: number, num2: number): Promise<number> {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new ConflictException('Both inputs must be numbers');
    }

    const response = await lastValueFrom(this.httpService.post('http://localhost:2002/multiply', { num1, num2 }));
    return response.data;
  }

  async restar(num1: number, num2: number): Promise<number> {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new ConflictException('Both inputs must be numbers');
    }
    const response = await lastValueFrom(this.httpService.post('http://localhost:2001/subtract', { num1, num2 }));
    return response.data;
  }

  async sumar(num1: number, num2: number): Promise<number> {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new ConflictException('Both inputs must be numbers');
    }
    const response = await lastValueFrom(this.httpService.post('http://localhost:2000/sum', { num1, num2 }));
    return response.data;
  }

}
