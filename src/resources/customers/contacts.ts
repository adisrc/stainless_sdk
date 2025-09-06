// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AddressesAPI from './addresses';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contacts extends APIResource {
  /**
   * Create Contact
   *
   * @example
   * ```ts
   * const contact = await client.customers.contacts.create(
   *   'customer_id',
   *   {
   *     email: 'john.doe@example.com',
   *     first_name: 'John',
   *     reference_id: 'CUS123',
   *   },
   * );
   * ```
   */
  create(
    customerID: string,
    body: ContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<ContactCreateResponse> {
    return this._client.post(path`/v1/customers/${customerID}/contacts`, { body, ...options });
  }

  /**
   * Get Contact By ID
   *
   * @example
   * ```ts
   * const contact = await client.customers.contacts.retrieve(
   *   'contact_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  retrieve(
    contactID: string,
    params: ContactRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ContactRetrieveResponse> {
    const { customer_id } = params;
    return this._client.get(path`/v1/customers/${customer_id}/contacts/${contactID}`, options);
  }

  /**
   * Update Contact
   *
   * @example
   * ```ts
   * const contact = await client.customers.contacts.update(
   *   'contact_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  update(
    contactID: string,
    params: ContactUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ContactUpdateResponse> {
    const { customer_id, ...body } = params;
    return this._client.put(path`/v1/customers/${customer_id}/contacts/${contactID}`, { body, ...options });
  }

  /**
   * List Contacts
   *
   * @example
   * ```ts
   * const contacts = await client.customers.contacts.list(
   *   'customer_id',
   * );
   * ```
   */
  list(
    customerID: string,
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContactListResponse> {
    return this._client.get(path`/v1/customers/${customerID}/contacts`, { query, ...options });
  }

  /**
   * Delete Contact
   *
   * @example
   * ```ts
   * const success = await client.customers.contacts.delete(
   *   'contact_id',
   *   { customer_id: 'customer_id' },
   * );
   * ```
   */
  delete(
    contactID: string,
    params: ContactDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AddressesAPI.Success> {
    const { customer_id } = params;
    return this._client.delete(path`/v1/customers/${customer_id}/contacts/${contactID}`, options);
  }
}

export interface ContactCreate {
  email: string;

  first_name: string;

  reference_id: string;

  attributes?: Array<CustomersAPI.AttributeRequest>;

  designation?: string;

  /**
   * Default contact for the customer
   */
  is_default?: boolean;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;
}

export interface ContactDetails {
  /**
   * UUID
   */
  id?: string;

  attributes?: Array<CustomersAPI.AttributeValue>;

  created_at?: string;

  designation?: string;

  email?: string;

  first_name?: string;

  is_default?: boolean;

  last_name?: string;

  phone?: string;

  reference_id?: string;

  status?: 'active' | 'inactive';

  updated_at?: string;
}

export interface ContactCreateResponse extends AddressesAPI.Success {
  data?: ContactDetails;
}

export interface ContactRetrieveResponse extends AddressesAPI.Success {
  data?: ContactDetails;
}

export interface ContactUpdateResponse extends AddressesAPI.Success {
  data?: ContactDetails;
}

export interface ContactListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<ContactListResponse.Data>;
}

export namespace ContactListResponse {
  export interface Data {
    /**
     * UUID
     */
    id?: string;

    created_at?: string;

    designation?: string;

    email?: string;

    first_name?: string;

    is_default?: boolean;

    last_name?: string;

    phone?: string;

    reference_id?: string;

    status?: 'active' | 'inactive';

    updated_at?: string;
  }
}

export interface ContactCreateParams {
  email: string;

  first_name: string;

  reference_id: string;

  attributes?: Array<CustomersAPI.AttributeRequest>;

  designation?: string;

  /**
   * Default contact for the customer
   */
  is_default?: boolean;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;
}

export interface ContactRetrieveParams {
  /**
   * customer_id
   */
  customer_id: string;
}

export interface ContactUpdateParams {
  /**
   * Path param: customer_id
   */
  customer_id: string;

  /**
   * Body param:
   */
  attributes?: Array<CustomersAPI.AttributeRequest>;

  /**
   * Body param:
   */
  designation?: string;

  /**
   * Body param:
   */
  email?: string;

  /**
   * Body param:
   */
  first_name?: string;

  /**
   * Body param: Default contact for the customer
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
}

export interface ContactListParams {
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

export interface ContactDeleteParams {
  /**
   * customer_id
   */
  customer_id: string;
}

export declare namespace Contacts {
  export {
    type ContactCreate as ContactCreate,
    type ContactDetails as ContactDetails,
    type ContactCreateResponse as ContactCreateResponse,
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactUpdateResponse as ContactUpdateResponse,
    type ContactListResponse as ContactListResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactRetrieveParams as ContactRetrieveParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
    type ContactDeleteParams as ContactDeleteParams,
  };
}
