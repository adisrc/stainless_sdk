// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TestWiz } from '../client';

export abstract class APIResource {
  protected _client: TestWiz;

  constructor(client: TestWiz) {
    this._client = client;
  }
}
