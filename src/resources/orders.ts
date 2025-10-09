// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrdersAPI from './orders';
import * as AddressesAPI from './customers/addresses';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Create order
   *
   * @example
   * ```ts
   * const order = await client.orders.create({
   *   created_at: '2025-01-01T00:00:00Z',
   *   customer_id: '12345678-90ab-cdef-1234-567890abcdef',
   *   fulfillment_status: 'PARTIALLY_DELIVERED',
   *   line_items: [{ sku: 'RUG14754' }],
   *   payment_status: 'PAID',
   *   reference_id: '1234567890',
   *   updated_at: '2025-01-01T00:00:00Z',
   * });
   * ```
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    return this._client.post('/v2/orders', { body, ...options });
  }

  /**
   * Get order
   *
   * @example
   * ```ts
   * const order = await client.orders.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/v2/orders/${id}`, options);
  }

  /**
   * Update order
   *
   * @example
   * ```ts
   * const order = await client.orders.update('id', {
   *   created_at: '2025-01-01T00:00:00Z',
   *   customer_id: '12345678-90ab-cdef-1234-567890abcdef',
   *   fulfillment_status: 'PARTIALLY_DELIVERED',
   *   line_items: [{ sku: 'RUG14754' }],
   *   payment_status: 'PAID',
   *   reference_id: '1234567890',
   *   updated_at: '2025-01-01T00:00:00Z',
   * });
   * ```
   */
  update(id: string, body: OrderUpdateParams, options?: RequestOptions): APIPromise<OrderUpdateResponse> {
    return this._client.put(path`/v2/orders/${id}`, { body, ...options });
  }

  /**
   * List orders
   *
   * @example
   * ```ts
   * const orderListResponse = await client.orders.list();
   * ```
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get('/v2/orders', { query, ...options });
  }

  /**
   * Update order status
   *
   * @example
   * ```ts
   * const response = await client.orders.updateStatus('draft', {
   *   id: 'id',
   * });
   * ```
   */
  updateStatus(
    status: 'draft' | 'confirmed' | 'cancelled',
    params: OrderUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<OrderUpdateStatusResponse> {
    const { id } = params;
    return this._client.patch(path`/v2/orders/${id}/${status}`, options);
  }
}

export interface ContainerInfoRequest {
  key: string;

  unit: 'CFT' | 'CBM';

  volume: number;

  name?: string;
}

export interface ContainerInfoRequestV2 {
  key: string;

  unit: 'CFT' | 'CBM';

  volume: number;

  name?: string;
}

export interface CustomerConsentRequest {
  consent_file_id: string;

  has_consent: boolean;
}

export interface CustomerConsentRequestV2 {
  consent_file_id: string;

  has_consent: boolean;
}

export interface OrderAddressDetailResponseV2 {
  id?: string;

  address_line_1?: string;

  address_line_2?: string;

  attributes?: Array<OrderAddressDetailResponseV2.Attribute>;

  city?: string;

  country?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  phone?: string;

  reference_id?: string;

  state?: string;

  zip_code?: string;
}

export namespace OrderAddressDetailResponseV2 {
  export interface Attribute {
    id?: string;

    created_at?: string;

    name?: string;

    updated_at?: string;

    value?: string;
  }
}

export interface OrderAddressRequest {
  id?: string;

  address_line_1?: string;

  address_line_2?: string;

  city?: string;

  /**
   * Country code in ISO 3166-1 alpha-2 format, e.g. US, IN, etc.
   */
  country?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;

  state?: string;

  zip_code?: string;
}

export interface OrderAddressRequestV2 {
  id?: string;

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

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;

  reference_id?: string;

  state?: string;

  zip_code?: string;
}

export interface OrderAddressResponse {
  id?: string;

  address_line_1?: string;

  address_line_2?: string;

  city?: string;

  country?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  phone?: string;

  state?: string;

  zip_code?: string;
}

export interface OrderAddressResponseV2 {
  id?: string;

  address_line_1?: string;

  address_line_2?: string;

  city?: string;

  country?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  phone?: string;

  reference_id?: string;

  state?: string;

  zip_code?: string;
}

export interface OrderChargesRequest {
  name: string;

  /**
   * If charge is tax then charge amount will be added to the amount. If charge is
   * discount then it will be subtracted from the amount.
   */
  type: 'tax' | 'discount';

  amount?: number;
}

export interface OrderChargesRequestV2 {
  name: string;

  /**
   * If charge is tax then charge amount will be added to the amount. If charge is
   * discount then it will be subtracted from the amount.
   */
  type: 'tax' | 'discount';

  amount?: number;
}

export interface OrderContactRequest {
  id?: string;

  designation?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;
}

export interface OrderContactRequestV2 {
  id?: string;

  attributes?: Array<CustomersAPI.AttributeRequest>;

  designation?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  /**
   * Phone number in E.164 format
   */
  phone?: string;
}

export interface OrderContactResponse {
  id?: string;

  designation?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  phone?: string;
}

export interface OrderLineItemRequest {
  sku: string;

  cancelled_quantity?: number;

  /**
   * Discount on the product, this is the discount amount that is applied to the
   * product at unit price level.
   */
  discount?: number;

  /**
   * Discount type can be percentage or value.
   */
  discount_type?: 'percentage' | 'value';

  invoiced_quantity?: number;

  is_adhoc?: boolean;

  note?: string;

  picked_quantity?: number;

  quantity?: number;

  shipped_quantity?: number;

  /**
   * Unit price of the product, this is the price of the product before any discounts
   * are applied.
   */
  unit_price?: number;
}

export interface OrderLineItemRequestV2 {
  sku: string;

  cancelled_quantity?: number;

  /**
   * Discount on the product, this is the discount amount that is applied to the
   * product at unit price level.
   */
  discount?: number;

  /**
   * Discount type can be percentage or value.
   */
  discount_type?: 'percentage' | 'value';

  invoiced_quantity?: number;

  is_adhoc?: boolean;

  note?: string;

  picked_quantity?: number;

  quantity?: number;

  shipped_quantity?: number;

  /**
   * Unit price of the product, this is the price of the product before any discounts
   * are applied.
   */
  unit_price?: number;
}

export interface OrderListResponse {
  id?: string;

  amount?: number;

  amount_paid?: number;

  billing_address?: OrderAddressResponse;

  created_at?: string;

  customer_id?: string;

  customer_note?: string;

  display_id?: string;

  due_date?: string;

  freight_term?: string;

  fulfillment_status?: string;

  internal_note?: string;

  payment_method?: string;

  payment_method_id?: string;

  payment_status?: string;

  payment_term?: string;

  po_number?: string;

  price_list_id?: string;

  primary_contact?: OrderContactResponse;

  reference_id?: string;

  shipment_date?: string;

  shipping_address?: OrderAddressResponse;

  shipping_method?: string;

  source?: string;

  status?: string;

  updated_at?: string;
}

export interface OrderListResponseV2 {
  id?: string;

  amount?: number;

  amount_paid?: number;

  billing_address?: OrderAddressResponseV2;

  created_at?: string;

  customer_id?: string;

  customer_note?: string;

  display_id?: string;

  due_date?: string;

  freight_term?: string;

  fulfillment_status?: string;

  internal_note?: string;

  payment_method?: string;

  payment_method_id?: string;

  payment_status?: string;

  payment_term?: string;

  po_number?: string;

  price_list_id?: string;

  primary_contact?: OrderListResponseV2.PrimaryContact;

  reference_id?: string;

  shipment_date?: string;

  shipping_address?: OrderAddressResponseV2;

  shipping_method?: string;

  source?: string;

  status?: string;

  updated_at?: string;
}

export namespace OrderListResponseV2 {
  export interface PrimaryContact {
    id?: string;

    designation?: string;

    email?: string;

    first_name?: string;

    last_name?: string;

    phone?: string;
  }
}

export interface OrderCreateResponse extends AddressesAPI.Success {
  data?: OrderListResponseV2;
}

export interface OrderRetrieveResponse extends AddressesAPI.Success {
  data?: OrderRetrieveResponse.Data;
}

export namespace OrderRetrieveResponse {
  export interface Data {
    /**
     * UUID
     */
    id?: string;

    amount?: number;

    amount_paid?: number;

    attributes?: Array<CustomersAPI.AttributeValue>;

    billing_address?: OrdersAPI.OrderAddressDetailResponseV2;

    card?: Data.Card;

    charges?: Array<Data.Charge>;

    container_info?: Data.ContainerInfo;

    created_at?: string;

    customer_consent?: Data.CustomerConsent;

    customer_id?: string;

    customer_name?: string;

    customer_note?: string;

    customer_reference_id?: string;

    display_id?: string;

    due_date?: string;

    freight_term?: string;

    fulfillment_status?: string;

    internal_note?: string;

    line_items?: Array<Data.LineItem>;

    payment_method?: string;

    payment_method_id?: string;

    payment_status?: string;

    payment_term?: string;

    po_number?: string;

    price_list_id?: string;

    primary_contact?: Data.PrimaryContact;

    reference_id?: string;

    shipment_date?: string;

    shipping_address?: OrdersAPI.OrderAddressDetailResponseV2;

    shipping_method?: string;

    source?: string;

    status?: string;

    updated_at?: string;
  }

  export namespace Data {
    export interface Card {
      id?: string;

      token?: string;

      brand?: string;

      card_exp?: string;

      card_type?: string;

      external_customer_id?: string;

      last_four_digits?: string;

      payment_method_type?: string;
    }

    export interface Charge {
      amount?: number;

      name?: string;

      type?: string;

      value_type?: 'percentage' | 'value';
    }

    export interface ContainerInfo {
      key: string;

      unit: 'CFT' | 'CBM';

      volume: number;

      name?: string;
    }

    export interface CustomerConsent {
      consent_file_id?: string;

      has_consent?: boolean;
    }

    export interface LineItem {
      cancelled_quantity?: number;

      discount?: number;

      discount_type?: 'percentage' | 'value';

      invoiced_quantity?: number;

      is_adhoc?: boolean;

      note?: string;

      picked_quantity?: number;

      product_id?: string;

      quantity?: number;

      shipped_quantity?: number;

      sku?: string;

      unit_price?: number;
    }

    export interface PrimaryContact {
      id?: string;

      attributes?: Array<PrimaryContact.Attribute>;

      designation?: string;

      email?: string;

      first_name?: string;

      last_name?: string;

      phone?: string;
    }

    export namespace PrimaryContact {
      export interface Attribute {
        id?: string;

        created_at?: string;

        name?: string;

        updated_at?: string;

        value?: string;
      }
    }
  }
}

export interface OrderUpdateResponse extends AddressesAPI.Success {
  data?: OrderListResponseV2;
}

export interface OrderListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<OrderListResponseV2>;
}

export interface OrderUpdateStatusResponse extends AddressesAPI.Success {
  data?: OrderListResponseV2;
}

export interface OrderCreateParams {
  created_at: string;

  customer_id: string;

  fulfillment_status:
    | 'PARTIALLY_DELIVERED'
    | 'UNFULFILLED'
    | 'PARTIALLY_FULFILLED'
    | 'FULFILLED'
    | 'IN_PROGRESS'
    | 'DELIVERED';

  line_items: Array<OrderLineItemRequestV2>;

  payment_status: 'PAID' | 'PENDING' | 'PARTIALLY_PAID' | 'REFUNDED' | 'OVERPAID' | 'VOIDED';

  reference_id: string;

  /**
   * Updated at must be later than the order creation date
   */
  updated_at: string;

  /**
   * These are additional charges on the order apart from shipping, tax, discount,
   * etc. It will be add-on to the total amount of the order.
   */
  additional_charges?: Array<OrderChargesRequestV2>;

  /**
   * This is total amount of the order before all discounts, taxes, shipping charges,
   * etc. are applied.
   */
  amount?: number;

  amount_paid?: number;

  attributes?: Array<CustomersAPI.AttributeRequest>;

  /**
   * Billing address is stored and persisted in the order. It can be sent as custom
   * address without ID which can be stored as temporary address to be used for
   * billing only for this order
   */
  billing_address?: OrderAddressRequestV2;

  container_info?: ContainerInfoRequestV2;

  customer_consent?: CustomerConsentRequestV2;

  customer_note?: string;

  /**
   * Discount offered on the order, always amount of actual discount offered. e.g. if
   * discount is 10% off, then discount value is 10.00 for 100.00 amount
   */
  discount_value?: number;

  /**
   * This is the display ID of the order, it is generated by the system if not
   * provided.
   */
  display_id?: string;

  /**
   * Due date must be later than the order creation date, send null if due date is
   * not applicable
   */
  due_date?: string;

  freight_term?: string;

  internal_note?: string;

  payment_method_id?: string;

  payment_term?: string;

  po_number?: string;

  /**
   * Primary contact is stored and persisted in the order. It can be sent as custom
   * contact without ID which can be stored as temporary contact to be used for
   * primary contact only for this order
   */
  primary_contact?: OrderContactRequestV2;

  /**
   * Shipment date must be later than the order creation date
   */
  shipment_date?: string;

  /**
   * Shipping address is stored and persisted in the order. It can be sent as custom
   * address without ID which can be stored as temporary address to be used for
   * shipping only for this order
   */
  shipping_address?: OrderAddressRequestV2;

  /**
   * Shipping charge on the order, always amount of actual shipping charge offered.
   * e.g. if shipping charge is $10.00, then shipping charge is $10.00
   */
  shipping_charge?: number;

  shipping_method?: string;

  /**
   * Source of the order, if not provided then it will be openapi
   */
  source?: string;

  /**
   * Status of the order, can be draft, confirmed, if not provided then it will be
   * confirmed
   */
  status?: 'draft' | 'confirmed';

  /**
   * Tax value on the order, always amount of actual tax offered. e.g. if tax is 10%
   * of amount, then tax value is 10.00 for 100.00 amount
   */
  tax_value?: number;
}

export interface OrderUpdateParams {
  created_at: string;

  customer_id: string;

  fulfillment_status:
    | 'PARTIALLY_DELIVERED'
    | 'UNFULFILLED'
    | 'PARTIALLY_FULFILLED'
    | 'FULFILLED'
    | 'IN_PROGRESS'
    | 'DELIVERED';

  line_items: Array<OrderLineItemRequestV2>;

  payment_status: 'PAID' | 'PENDING' | 'PARTIALLY_PAID' | 'REFUNDED' | 'OVERPAID' | 'VOIDED';

  reference_id: string;

  /**
   * Updated at must be later than the order creation date
   */
  updated_at: string;

  /**
   * These are additional charges on the order apart from shipping, tax, discount,
   * etc. It will be add-on to the total amount of the order.
   */
  additional_charges?: Array<OrderChargesRequestV2>;

  /**
   * This is total amount of the order before all discounts, taxes, shipping charges,
   * etc. are applied.
   */
  amount?: number;

  amount_paid?: number;

  attributes?: Array<CustomersAPI.AttributeRequest>;

  /**
   * Billing address is stored and persisted in the order. It can be sent as custom
   * address without ID which can be stored as temporary address to be used for
   * billing only for this order. If ID provided, the address will be retrieved from
   * the Address Service. This overrides any address fields in the request body
   */
  billing_address?: OrderAddressRequestV2;

  container_info?: ContainerInfoRequestV2;

  customer_consent?: CustomerConsentRequestV2;

  customer_note?: string;

  /**
   * Discount offered on the order, always amount of actual discount offered. e.g. if
   * discount is 10% off, then discount value is 10.00 for 100.00 amount
   */
  discount_value?: number;

  /**
   * This is the display ID of the order, it is generated by the system if not
   * provided.
   */
  display_id?: string;

  /**
   * Due date must be later than the order creation date, send null if due date is
   * not applicable
   */
  due_date?: string;

  freight_term?: string;

  internal_note?: string;

  payment_method_id?: string;

  payment_term?: string;

  po_number?: string;

  /**
   * Primary contact is stored and persisted in the order. It can be sent as custom
   * contact without ID which can be stored as temporary contact to be used for
   * primary contact only for this order. If ID provided, the contact will be
   * retrieved from the Contact Service. This overrides any contact fields in the
   * request body
   */
  primary_contact?: OrderContactRequestV2;

  /**
   * Shipment date must be later than the order creation date
   */
  shipment_date?: string;

  /**
   * Shipping address is stored and persisted in the order. It can be sent as custom
   * address without ID which can be stored as temporary address to be used for
   * shipping only for this order. If ID provided, the address will be retrieved from
   * the Address Service. This overrides any address fields in the request body
   */
  shipping_address?: OrderAddressRequestV2;

  /**
   * Shipping charge on the order, always amount of actual shipping charge offered.
   * e.g. if shipping charge is $10.00, then shipping charge is $10.00
   */
  shipping_charge?: number;

  shipping_method?: string;

  /**
   * Source of the order, if not provided then it will be openapi
   */
  source?: string;

  /**
   * Tax value on the order, always amount of actual tax offered. e.g. if tax is 10%
   * of amount, then tax value is 10.00 for 100.00 amount
   */
  tax_value?: number;
}

export interface OrderListParams {
  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  created_after?: string;

  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  created_before?: string;

  order_status?: 'draft' | 'confirmed' | 'cancelled';

  page?: number;

  page_size?: number;

  /**
   * List of customer reference ids separated by comma
   */
  reference_ids?: Array<string>;

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';

  source?: string;

  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  updated_after?: string;

  /**
   * format: 2006-01-02T15:04:05Z (ISO 8601) UTC
   */
  updated_before?: string;
}

export interface OrderUpdateStatusParams {
  id: string;
}

export declare namespace Orders {
  export {
    type ContainerInfoRequest as ContainerInfoRequest,
    type ContainerInfoRequestV2 as ContainerInfoRequestV2,
    type CustomerConsentRequest as CustomerConsentRequest,
    type CustomerConsentRequestV2 as CustomerConsentRequestV2,
    type OrderAddressDetailResponseV2 as OrderAddressDetailResponseV2,
    type OrderAddressRequest as OrderAddressRequest,
    type OrderAddressRequestV2 as OrderAddressRequestV2,
    type OrderAddressResponse as OrderAddressResponse,
    type OrderAddressResponseV2 as OrderAddressResponseV2,
    type OrderChargesRequest as OrderChargesRequest,
    type OrderChargesRequestV2 as OrderChargesRequestV2,
    type OrderContactRequest as OrderContactRequest,
    type OrderContactRequestV2 as OrderContactRequestV2,
    type OrderContactResponse as OrderContactResponse,
    type OrderLineItemRequest as OrderLineItemRequest,
    type OrderLineItemRequestV2 as OrderLineItemRequestV2,
    type OrderListResponse as OrderListResponse,
    type OrderListResponseV2 as OrderListResponseV2,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderUpdateStatusResponse as OrderUpdateStatusResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
    type OrderUpdateStatusParams as OrderUpdateStatusParams,
  };
}
