// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressesAPI from './customers/addresses';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PriceLists extends APIResource {
  /**
   * Create Price List
   *
   * @example
   * ```ts
   * const priceList = await client.priceLists.create({
   *   name: 'Price List Name',
   *   reference_id: '1234567890',
   * });
   * ```
   */
  create(body: PriceListCreateParams, options?: RequestOptions): APIPromise<PriceListCreateResponse> {
    return this._client.post('/v1/price-lists', { body, ...options });
  }

  /**
   * Get Price List By ID
   *
   * @example
   * ```ts
   * const priceList = await client.priceLists.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PriceListRetrieveResponse> {
    return this._client.get(path`/v1/price-lists/${id}`, options);
  }

  /**
   * Update Price List
   *
   * @example
   * ```ts
   * const priceList = await client.priceLists.update('id');
   * ```
   */
  update(
    id: string,
    body: PriceListUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PriceListUpdateResponse> {
    return this._client.patch(path`/v1/price-lists/${id}`, { body, ...options });
  }

  /**
   * List Price Lists
   *
   * @example
   * ```ts
   * const priceLists = await client.priceLists.list();
   * ```
   */
  list(
    query: PriceListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PriceListListResponse> {
    return this._client.get('/v1/price-lists', { query, ...options });
  }

  /**
   * Delete Price List
   *
   * @example
   * ```ts
   * const success = await client.priceLists.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AddressesAPI.Success> {
    return this._client.delete(path`/v1/price-lists/${id}`, options);
  }
}

export interface PriceList {
  id?: string;

  created_at?: string;

  currency?: string;

  description?: string;

  name?: string;

  reference_id?: string;

  status?: string;

  updated_at?: string;
}

export interface PriceListCreateResponse extends AddressesAPI.Success {
  data?: PriceList;
}

export interface PriceListRetrieveResponse extends AddressesAPI.Success {
  data?: PriceList;
}

export interface PriceListUpdateResponse extends AddressesAPI.Success {
  data?: PriceList;
}

export interface PriceListListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<PriceList>;
}

export interface PriceListCreateParams {
  name: string;

  reference_id: string;

  description?: string;

  is_default?: boolean;

  priority?: number;

  status?: 'active' | 'inactive';
}

export interface PriceListUpdateParams {
  description?: string;

  is_default?: boolean;

  name?: string;

  priority?: number;

  status?: 'active' | 'inactive';
}

export interface PriceListListParams {
  page?: number;

  page_size?: number;

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at' | 'name';

  status?: 'active' | 'inactive';
}

export declare namespace PriceLists {
  export {
    type PriceList as PriceList,
    type PriceListCreateResponse as PriceListCreateResponse,
    type PriceListRetrieveResponse as PriceListRetrieveResponse,
    type PriceListUpdateResponse as PriceListUpdateResponse,
    type PriceListListResponse as PriceListListResponse,
    type PriceListCreateParams as PriceListCreateParams,
    type PriceListUpdateParams as PriceListUpdateParams,
    type PriceListListParams as PriceListListParams,
  };
}
