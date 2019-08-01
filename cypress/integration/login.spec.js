import { createUser } from 'cypress-js-lib';
const phoneNumber = '2135551234'

describe('Login using Lib', () => {
    createUser({
        driver: false,
        phone_number: phoneNumber
      });
})