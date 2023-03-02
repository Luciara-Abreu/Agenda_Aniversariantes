import AppError from '@shared/errors/AppError'
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import { create, Whatsapp } from 'venom-bot'

interface ISendWhats {
  number: string
  message: string
}

class Sender {
  private client: Whatsapp

  constructor() {
    this.initialize()
  }

  public async sendText({ number, message }: ISendWhats) {
    await this.client.sendText(number, message)

    console.log('AQUIIIIII SENDTEXT  ===>', 'phoneNumber ==>', number, 'Message for whats => ', message)
  }

  private initialize() {
    const status = (statusSession: string) => {
      console.log('status ==> ', status)
    }

    const start = (client: Whatsapp) => {
      this.client = client
    }

    create('sendMessage', status)
      .then(client => start(client))
      .catch(error => console.error(error))
  }
}

/**
 *     const start = (client: Whatsapp) => {
      this.client = client

      console.log('AQUIIIIII SENDTEXT  ===>',
      'phoneNumber ==>', number,
      'Message for whats => ', message)
    }
 */

export default Sender

/*
       if (!isValidPhoneNumber(number, 'BR')) {
      throw new AppError('This number is not valid')
    }

    let phoneNumber = parsePhoneNumber(number, 'BR')?.format('E.164').replace('+', '')
    //phoneNumber = phoneNumber.concat('+').concat('55').includes('@c.us') ? phoneNumber : `${phoneNumber}@c.us`
    phoneNumber = phoneNumber.includes('@c.us') ? phoneNumber : `${phoneNumber}@c.us`
*/
