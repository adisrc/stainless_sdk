// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressesAPI from './customers/addresses';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Create Invoice
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.create({
   *   due_date: '2025-01-01T00:00:00Z',
   *   invoice_number: 'INV-20250101',
   *   items: [
   *     {
   *       amount: 1000000,
   *       name: 'Item Name',
   *       quantity: 1000000,
   *       reference_id: 'ITEM-20250101',
   *       sku: 'SKU-20250101',
   *     },
   *   ],
   *   order_id: 'ORD-20250101',
   *   paid_amount: 1000000,
   *   reference_id: 'INV-20250101',
   *   total_amount: 1000000,
   * });
   * ```
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse> {
    return this._client.post('/v1/invoices', { body, ...options });
  }

  /**
   * Get Invoice
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<InvoiceRetrieveResponse> {
    return this._client.get(path`/v1/invoices/${id}`, options);
  }

  /**
   * Update Invoice
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.update('id', {
   *   due_date: '2025-01-01T00:00:00Z',
   *   invoice_number: 'INV-20250101',
   *   items: [
   *     {
   *       amount: 1000000,
   *       name: 'Item Name',
   *       quantity: 1000000,
   *       reference_id: 'ITEM-20250101',
   *       sku: 'SKU-20250101',
   *     },
   *   ],
   *   order_id: 'ORD-20250101',
   *   paid_amount: 1000000,
   *   reference_id: 'INV-20250101',
   *   total_amount: 1000000,
   * });
   * ```
   */
  update(id: string, body: InvoiceUpdateParams, options?: RequestOptions): APIPromise<InvoiceUpdateResponse> {
    return this._client.put(path`/v1/invoices/${id}`, { body, ...options });
  }

  /**
   * List Invoices
   *
   * @example
   * ```ts
   * const invoices = await client.invoices.list();
   * ```
   */
  list(
    query: InvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceListResponse> {
    return this._client.get('/v1/invoices', { query, ...options });
  }

  /**
   * Delete Invoice
   *
   * @example
   * ```ts
   * const success = await client.invoices.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AddressesAPI.Success> {
    return this._client.delete(path`/v1/invoices/${id}`, options);
  }
}

export interface Invoice {
  /**
   * UUID
   */
  id?: string;

  created_at?: string;

  due_date?: string;

  invoice_number?: string;

  items?: Array<Invoice.Item>;

  order_id?: string;

  paid_amount?: number;

  reference_id?: string;

  remarks?: string;

  status?: string;

  total_amount?: number;

  updated_at?: string;

  url?: string;
}

export namespace Invoice {
  export interface Item {
    /**
     * UUID
     */
    id?: string;

    amount?: number;

    item_total?: number;

    name?: string;

    product_id?: string;

    quantity?: number;

    reference_id?: string;
  }
}

export interface InvoiceCreateResponse extends AddressesAPI.Success {
  data?: Invoice;
}

export interface InvoiceRetrieveResponse extends AddressesAPI.Success {
  data?: Invoice;
}

export interface InvoiceUpdateResponse extends AddressesAPI.Success {
  data?: Invoice;
}

export interface InvoiceListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<Invoice>;
}

export interface InvoiceCreateParams {
  due_date: string;

  invoice_number: string;

  items: Array<InvoiceCreateParams.Item>;

  order_id: string;

  paid_amount: number;

  reference_id: string;

  total_amount: number;

  created_at?: string;

  remarks?: string;

  status?: 'PAID' | 'UNPAID';

  /**
   * Updated at must be later than the order creation date
   */
  updated_at?: string;

  url?: string;
}

export namespace InvoiceCreateParams {
  export interface Item {
    /**
     * Amount per unit
     */
    amount: number;

    name: string;

    quantity: number;

    reference_id: string;

    sku: string;
  }
}

export interface InvoiceUpdateParams {
  due_date: string;

  invoice_number: string;

  items: Array<InvoiceUpdateParams.Item>;

  order_id: string;

  paid_amount: number;

  reference_id: string;

  total_amount: number;

  created_at?: string;

  remarks?: string;

  status?: 'PAID' | 'UNPAID';

  /**
   * Updated at must be later than the order creation date
   */
  updated_at?: string;

  url?: string;
}

export namespace InvoiceUpdateParams {
  export interface Item {
    /**
     * Amount per unit
     */
    amount: number;

    name: string;

    quantity: number;

    reference_id: string;

    sku: string;
  }
}

export interface InvoiceListParams {
  page?: number;

  page_size?: number;

  reference_ids?: Array<string>;

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';

  status?: 'PAID' | 'UNPAID';
}

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
