// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers';
import * as SalesRepsAPI from '../sales-reps';
import * as AddressesAPI from './addresses';
import {
  AddressCreate,
  AddressCreateParams,
  AddressCreateResponse,
  AddressDeleteParams,
  AddressDetails,
  AddressListParams,
  AddressListResponse,
  AddressRetrieveParams,
  AddressRetrieveResponse,
  AddressUpdateParams,
  AddressUpdateResponse,
  Addresses,
  Success,
} from './addresses';
import * as ContactsAPI from './contacts';
import {
  ContactCreate,
  ContactCreateParams,
  ContactCreateResponse,
  ContactDeleteParams,
  ContactDetails,
  ContactListParams,
  ContactListResponse,
  ContactRetrieveParams,
  ContactRetrieveResponse,
  ContactUpdateParams,
  ContactUpdateResponse,
  Contacts,
} from './contacts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customers extends APIResource {
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);

  /**
   * Create Customer
   *
   * @example
   * ```ts
   * const customer = await client.customers.create({
   *   assigned_price_list_id: 'assigned_price_list_id',
   *   assigned_sales_rep_ids: ['string'],
   *   reference_id: 'CUS123',
   * });
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerCreateResponse> {
    return this._client.post('/v1/customers', { body, ...options });
  }

  /**
   * Get Customer
   *
   * @example
   * ```ts
   * const customer = await client.customers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/v1/customers/${id}`, options);
  }

  /**
   * Update Customer
   *
   * @example
   * ```ts
   * const customer = await client.customers.update('id');
   * ```
   */
  update(
    id: string,
    body: CustomerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateResponse> {
    return this._client.patch(path`/v1/customers/${id}`, { body, ...options });
  }

  /**
   * List Customers with pagination
   *
   * @example
   * ```ts
   * const customers = await client.customers.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/v1/customers', { query, ...options });
  }

  /**
   * Delete Customer
   *
   * @example
   * ```ts
   * const success = await client.customers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AddressesAPI.Success> {
    return this._client.delete(path`/v1/customers/${id}`, options);
  }
}

export interface AttributeRequest {
  name: string;

  value: string;
}

export interface AttributeValue {
  id?: string;

  created_at?: string;

  created_by?: string;

  name?: string;

  updated_at?: string;

  updated_by?: string;

  value?: string;
}

export interface CustomerDetails {
  /**
   * UUID
   */
  id?: string;

  addresses?: Array<AddressesAPI.AddressDetails>;

  assigned_price_list?: CustomerDetails.AssignedPriceList;

  assigned_sales_reps?: Array<SalesRepsAPI.User>;

  attributes?: Array<AttributeValue>;

  contacts?: Array<ContactsAPI.ContactDetails>;

  created_at?: string;

  display_id?: string;

  display_name?: string;

  email?: string;

  first_name?: string;

  freight_term?: string;

  last_name?: string;

  name?: string;

  payment_mode?: string;

  payment_term?: string;

  phone?: string;

  reference_id?: string;

  shipping_method?: string;

  status?: string;

  updated_at?: string;
}

export namespace CustomerDetails {
  export interface AssignedPriceList {
    id?: string;

    created_at?: string;

    description?: string;

    name?: string;

    reference_id?: string;

    status?: string;

    updated_at?: string;
  }
}

export interface SuccessPagination {
  data?: unknown;

  pagination?: SuccessPagination.Pagination;
}

export namespace SuccessPagination {
  export interface Pagination {
    current_page?: number;

    next_page?: number;

    page_size?: number;

    prev_page?: number;

    total_pages?: number;

    total_records?: number;
  }
}

export interface CustomerCreateResponse extends AddressesAPI.Success {
  data?: CustomerDetails;
}

export interface CustomerRetrieveResponse extends AddressesAPI.Success {
  data?: CustomerDetails;
}

export interface CustomerUpdateResponse extends AddressesAPI.Success {
  data?: CustomerDetails;
}

export interface CustomerListResponse extends SuccessPagination {
  data?: Array<CustomerListResponse.Data>;
}

export namespace CustomerListResponse {
  export interface Data {
    /**
     * UUID
     */
    id?: string;

    created_at?: string;

    display_id?: string;

    display_name?: string;

    email?: string;

    first_name?: string;

    freight_term?: string;

    last_name?: string;

    name?: string;

    payment_mode?: string;

    payment_term?: string;

    phone?: string;

    reference_id?: string;

    shipping_method?: string;

    status?: string;

    updated_at?: string;
  }
}

export interface CustomerCreateParams {
  /**
   * Price list id is a uuid can be queried from price list api
   */
  assigned_price_list_id: string;

  /**
   * List of sales rep ids, sales rep id is a uuid can be queried from sales rep api
   */
  assigned_sales_rep_ids: Array<string>;

  reference_id: string;

  addresses?: Array<AddressesAPI.AddressCreate>;

  attributes?: Array<AttributeRequest>;

  company_name?: string;

  contacts?: Array<ContactsAPI.ContactCreate>;

  /**
   * This is the display ID of the customer, it is generated by the system if not
   * provided.
   */
  display_id?: string;

  display_name?: string;

  email?: string;

  first_name?: string;

  freight_term?: string;

  last_name?: string;

  payment_mode?: string;

  payment_term?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;

  shipping_method?: string;
}

export interface CustomerUpdateParams {
  addresses?: Array<CustomerUpdateParams.Address>;

  /**
   * Price list id is a uuid can be queried from price list api
   */
  assigned_price_list_id?: string;

  /**
   * List of sales rep ids, sales rep id is a uuid can be queried from sales rep api
   */
  assigned_sales_rep_ids?: Array<string>;

  attributes?: Array<AttributeRequest>;

  company_name?: string;

  contacts?: Array<CustomerUpdateParams.Contact>;

  default_billing_address_id?: string;

  default_shipping_address_id?: string;

  /**
   * This is the display ID of the customer, it is generated by the system if not
   * provided.
   */
  display_id?: string;

  display_name?: string;

  email?: string;

  first_name?: string;

  freight_term?: string;

  last_name?: string;

  payment_mode?: string;

  payment_term?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;

  primary_contact_id?: string;

  reference_id?: string;

  shipping_method?: string;
}

export namespace CustomerUpdateParams {
  export interface Address {
    id: string;

    address_line_1?: string;

    address_line_2?: string;

    attributes?: Array<CustomersAPI.AttributeRequest>;

    city?: string;

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

    reference_id?: string;

    state?: string;

    type?: 'billing' | 'shipping';

    zip_code?: string;
  }

  export interface Contact {
    id: string;

    attributes?: Array<CustomersAPI.AttributeRequest>;

    designation?: string;

    email?: string;

    first_name?: string;

    /**
     * Default contact for the customer
     */
    is_default?: boolean;

    last_name?: string;

    /**
     * Phone number in E.164 format
     */
    phone?: string;

    reference_id?: string;
  }
}

export interface CustomerListParams {
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

  /**
   * List of customer reference ids separated by comma
   */
  reference_ids?: Array<string>;

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at' | 'company_name' | 'display_name';

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

Customers.Addresses = Addresses;
Customers.Contacts = Contacts;

export declare namespace Customers {
  export {
    type AttributeRequest as AttributeRequest,
    type AttributeValue as AttributeValue,
    type CustomerDetails as CustomerDetails,
    type SuccessPagination as SuccessPagination,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    Addresses as Addresses,
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

  export {
    Contacts as Contacts,
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
