import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor() { }
  iv=CryptoJS.enc.Utf8.parse('7061737323313233');
  secretKey="123456$#@$^@ERF";

  Encrypt(value:string):string{
    var encrypted = CryptoJS.AES.encrypt(value, this.secretKey);

    return encrypted.toString();
  }

  Decrypt(value:string):string{

​
    var decrypted = CryptoJS.AES.decrypt(value, this.secretKey);

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
