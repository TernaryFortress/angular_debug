import { Injectable } from '@angular/core';
import { p384 } from '@noble/curves/p384'

@Injectable({
  providedIn: 'root'
})

export class CryptographyService {
  constructor() { }

  /** Given a private key, extracts the public key from it. */
  async generateEccPublicKey(privateKey: Uint8Array): Promise<Uint8Array> {
    return p384.getPublicKey(privateKey)
  }

}
