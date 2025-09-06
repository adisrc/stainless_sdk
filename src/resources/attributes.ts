// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressesAPI from './customers/addresses';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Attributes extends APIResource {
  /**
   * List Attributes
   */
  list(query: AttributeListParams, options?: RequestOptions): APIPromise<AttributeListResponse> {
    return this._client.get('/v1/attributes', { query, ...options });
  }
}

export interface AttributeListResponse extends AddressesAPI.Success {
  data?: Array<AttributeListResponse.Data>;
}

export namespace AttributeListResponse {
  export interface Data {
    /**
     * UUID
     */
    id?: string;

    created_at?: string;

    data_type?: string;

    entity?: string;

    name?: string;

    /**
     * Only for select and multiple select attributes
     */
    options?: Array<string>;

    updated_at?: string;
  }
}

export interface AttributeListParams {
  entity: 'customer' | 'address' | 'contact' | 'order' | 'product';

  page?: number;

  page_size?: number;
}

export declare namespace Attributes {
  export {
    type AttributeListResponse as AttributeListResponse,
    type AttributeListParams as AttributeListParams,
  };
}
