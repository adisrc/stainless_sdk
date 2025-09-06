// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Addresses extends APIResource {
  /**
   * Create Address
   *
   * @example
   * ```ts
   * const address = await client.customers.addresses.create(
   *   'customer_id',
   *   {
   *     address_line_1: '123 Main St',
   *     city: 'Anytown',
   *     reference_id: 'ADDR123',
   *     type: 'billing',
   *   },
   * );
   * ```
   */
  create(
    customerID: string,
    body: AddressCreateParams,
    options?: RequestOptions,
  ): APIPromise<AddressCreateResponse> {
    return this._client.post(path`/v1/customers/${customerID}/addresses`, { body, ...options });
  }

  /**
   * Get Address By ID
   *
   * @example
   * ```ts
   * const address = await client.customers.addresses.retrieve(
   *   'address_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  retrieve(
    addressID: string,
    params: AddressRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AddressRetrieveResponse> {
    const { customer_id } = params;
    return this._client.get(path`/v1/customers/${customer_id}/addresses/${addressID}`, options);
  }

  /**
   * Update Address
   *
   * @example
   * ```ts
   * const address = await client.customers.addresses.update(
   *   'address_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  update(
    addressID: string,
    params: AddressUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AddressUpdateResponse> {
    const { customer_id, ...body } = params;
    return this._client.put(path`/v1/customers/${customer_id}/addresses/${addressID}`, { body, ...options });
  }

  /**
   * List Addresses
   *
   * @example
   * ```ts
   * const addresses = await client.customers.addresses.list(
   *   'customer_id',
   * );
   * ```
   */
  list(
    customerID: string,
    query: AddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AddressListResponse> {
    return this._client.get(path`/v1/customers/${customerID}/addresses`, { query, ...options });
  }

  /**
   * Delete Address
   *
   * @example
   * ```ts
   * const success = await client.customers.addresses.delete(
   *   'address_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  delete(addressID: string, params: AddressDeleteParams, options?: RequestOptions): APIPromise<Success> {
    const { customer_id } = params;
    return this._client.delete(path`/v1/customers/${customer_id}/addresses/${addressID}`, options);
  }
}

export interface AddressCreate {
  address_line_1: string;

  city: string;

  reference_id: string;

  type: 'billing' | 'shipping';

  address_line_2?: string;

  attributes?: Array<CustomersAPI.AttributeRequest>;

  /**
   * Country code in ISO 3166-1 alpha-2 format, e.g. US, IN, etc.
   */
  country?: string;

  email?: string;

  first_name?: string;

  /**
   * Default address for the customer
   */
  is_default?: boolean;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;

  state?: string;

  zip_code?: string;
}

export interface AddressDetails {
  id?: string;

  address_line_1?: string;

  address_line_2?: string;

  attributes?: Array<CustomersAPI.AttributeValue>;

  city?: string;

  /**
   * Country code in ISO 3166-1 alpha-2 format, e.g. US, IN, etc.
   */
  country?: string;

  created_at?: string;

  customer_id?: string;

  email?: string;

  first_name?: string;

  is_default?: boolean;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;

  reference_id?: string;

  state?: string;

  status?: 'active' | 'inactive';

  type?: 'billing' | 'shipping';

  updated_at?: string;

  zip_code?: string;
}

export interface Success {
  data?: unknown;
}

export interface AddressCreateResponse extends Success {
  data?: AddressDetails;
}

export interface AddressRetrieveResponse extends Success {
  data?: AddressDetails;
}

export interface AddressUpdateResponse extends Success {
  data?: AddressDetails;
}

export interface AddressListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<AddressListResponse.Data>;
}

export namespace AddressListResponse {
  export interface Data {
    id?: string;

    address_line_1?: string;

    address_line_2?: string;

    city?: string;

    /**
     * Country code in ISO 3166-1 alpha-2 format, e.g. US, IN, etc.
     */
    country?: string;

    created_at?: string;

    email?: string;

    first_name?: string;

    is_default?: boolean;

    last_name?: string;

    /**
     * Phone number in E.164 format
     */
    phone?: string;

    reference_id?: string;

    state?: string;

    status?: 'active' | 'inactive';

    type?: 'billing' | 'shipping';

    updated_at?: string;

    zip_code?: string;
  }
}

export interface AddressCreateParams {
  address_line_1: string;

  city: string;

  reference_id: string;

  type: 'billing' | 'shipping';

  address_line_2?: string;

  attributes?: Array<CustomersAPI.AttributeRequest>;

  /**
   * Country code in ISO 3166-1 alpha-2 format, e.g. US, IN, etc.
   */
  country?: string;

  email?: string;

  first_name?: string;

  /**
   * Default address for the customer
   */
  is_default?: boolean;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;

  state?: string;

  zip_code?: string;
}

export interface AddressRetrieveParams {
  /**
   * customer_id
   */
  customer_id: string;
}

export interface AddressUpdateParams {
  /**
   * Path param: customer_id
   */
  customer_id: string;

  /**
   * Body param:
   */
  address_line_1?: string;

  /**
   * Body param:
   */
  address_line_2?: string;

  /**
   * Body param:
   */
  attributes?: Array<CustomersAPI.AttributeRequest>;

  /**
   * Body param:
   */
  city?: string;

  /**
   * Body param: Country code in ISO 3166-1 alpha-2 format, e.g. US, IN, etc.
   */
  country?: string;

  /**
   * Body param:
   */
  email?: string;

  /**
   * Body param:
   */
  first_name?: string;

  /**
   * Body param: Default address for the customer
   */
  is_default?: boolean;

  /**
   * Body param:
   */
  last_name?: string;

  /**
   * Body param: Phone number in E.164 format
   */
  phone?: string;

  /**
   * Body param:
   */
  reference_id?: string;

  /**
   * Body param:
   */
  state?: string;

  /**
   * Body param:
   */
  type?: 'billing' | 'shipping';

  /**
   * Body param:
   */
  zip_code?: string;
}

export interface AddressListParams {
  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  created_after?: string;

  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  created_before?: string;

  page?: number;

  page_size?: number;

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';

  status?: 'active' | 'inactive';

  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  updated_after?: string;

  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  updated_before?: string;
}

export interface AddressDeleteParams {
  /**
   * customer_id
   */
  customer_id: string;
}

export declare namespace Addresses {
  export {
    type AddressCreate as AddressCreate,
    type AddressDetails as AddressDetails,
    type Success as Success,
    type AddressCreateResponse as AddressCreateResponse,
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressUpdateResponse as AddressUpdateResponse,
    type AddressListResponse as AddressListResponse,
    type AddressCreateParams as AddressCreateParams,
    type AddressRetrieveParams as AddressRetrieveParams,
    type AddressUpdateParams as AddressUpdateParams,
    type AddressListParams as AddressListParams,
    type AddressDeleteParams as AddressDeleteParams,
  };
}
