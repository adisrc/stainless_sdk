// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressesAPI from './customers/addresses';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * Create payment method
   *
   * @example
   * ```ts
   * const paymentMethod = await client.paymentMethods.create({
   *   token: 'PIuTv1UgBqESZ2KRDixPtDJt~1234567890',
   *   brand: 'visa',
   *   card_expiry: '09/25',
   *   card_type: 'debit',
   *   customer_id: '00000000-0000-0000-0000-000000000000',
   *   last_four_digits: '1111',
   *   payment_method_type: 'card',
   *   provider: 'stripe',
   *   reference_id: 'CRD_1234567890',
   * });
   * ```
   */
  create(body: PaymentMethodCreateParams, options?: RequestOptions): APIPromise<PaymentMethodCreateResponse> {
    return this._client.post('/v1/payment-methods', { body, ...options });
  }

  /**
   * List payment methods
   *
   * @example
   * ```ts
   * const paymentMethods = await client.paymentMethods.list();
   * ```
   */
  list(
    query: PaymentMethodListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentMethodListResponse> {
    return this._client.get('/v1/payment-methods', { query, ...options });
  }

  /**
   * Delete payment method
   *
   * @example
   * ```ts
   * const success = await client.paymentMethods.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AddressesAPI.Success> {
    return this._client.delete(path`/v1/payment-methods/${id}`, options);
  }
}

export interface PaymentMethod {
  /**
   * UUID
   */
  id?: string;

  token?: string;

  address_line_1?: string;

  address_line_2?: string;

  brand?: string;

  card_expiry?: string;

  card_type?: string;

  city?: string;

  country?: string;

  created_at?: string;

  customer_id?: string;

  display_name?: string;

  email?: string;

  first_name?: string;

  is_default?: boolean;

  last_four_digits?: string;

  last_name?: string;

  payment_method_type?: string;

  phone?: string;

  provider?: string;

  reference_id?: string;

  state?: string;

  status?: string;

  updated_at?: string;

  zip_code?: string;
}

export interface PaymentMethodCreateResponse extends AddressesAPI.Success {
  data?: PaymentMethod;
}

export interface PaymentMethodListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<PaymentMethod>;
}

export interface PaymentMethodCreateParams {
  token: string;

  brand: string;

  card_expiry: string;

  card_type: string;

  customer_id: string;

  last_four_digits: string;

  payment_method_type: string;

  provider: string;

  reference_id: string;

  address_line_1?: string;

  address_line_2?: string;

  city?: string;

  country?: string;

  display_name?: string;

  email?: string;

  external_customer_id?: string;

  first_name?: string;

  is_default?: boolean;

  last_name?: string;

  phone?: string;

  state?: string;

  zip_code?: string;
}

export interface PaymentMethodListParams {
  customer_id?: string;

  page?: number;

  page_size?: number;
}

export declare namespace PaymentMethods {
  export {
    type PaymentMethod as PaymentMethod,
    type PaymentMethodCreateResponse as PaymentMethodCreateResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
    type PaymentMethodListParams as PaymentMethodListParams,
  };
}
