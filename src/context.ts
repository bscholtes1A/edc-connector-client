import { Addresses } from "./entities";

export class EdcConnectorClientContext implements Addresses {
  #apiToken: string;
  #addresses: Addresses;

  constructor(apiToken: string, addresses: Addresses) {
    this.#apiToken = apiToken;
    this.#addresses = addresses;
  }

  get default(): string {
    return this.#addresses.default;
  }

  get protocol(): string {
    return this.#addresses.protocol;
  }

  get management(): string {
    return this.#addresses.management;
  }

  get control(): string {
    return this.#addresses.control;
  }

  get public(): string {
    return this.#addresses.public;
  }

  get apiToken(): string {
    return this.#apiToken;
  }
}
