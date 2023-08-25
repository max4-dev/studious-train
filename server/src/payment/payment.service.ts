import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
  async makePayment (makePaymentDto: MakePaymentDto) {
    try {
      const {data} = await axios({
        method: 'POST',
        url: 'https://api.yookassa.ru/v3/payments',
        headers:  {
          "Content-Type": "application/json",
          "Idempotence-Key": Date.now()
        },
        auth: {
          username: '226168',
          password: 'test_EjV2bFT-8EL8Y7GRDxXduzIH34zofqzDI5lZq12JqMs'
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: "RUB"
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3001/order'
          },
          description: 'Заказ №1'
        }
      })

      return data;
    } catch (err) {
      throw new HttpException("message", 400, { cause: new Error(err) })
    }
  }
}
