// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressesAPI from './customers/addresses';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Shipments extends APIResource {
  /**
   * Create Shipment
   *
   * @example
   * ```ts
   * const shipment = await client.shipments.create({
   *   created_at: 'created_at',
   *   order_id: 'order_id',
   *   reference_id: 'reference_id',
   *   shipment_items: [
   *     { product_id: 'product_id', quantity: 1 },
   *   ],
   *   shipment_status: 'shipped',
   * });
   * ```
   */
  create(body: ShipmentCreateParams, options?: RequestOptions): APIPromise<ShipmentCreateResponse> {
    return this._client.post('/v1/shipments', { body, ...options });
  }

  /**
   * Get Shipment
   *
   * @example
   * ```ts
   * const shipment = await client.shipments.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ShipmentRetrieveResponse> {
    return this._client.get(path`/v1/shipments/${id}`, options);
  }

  /**
   * Update Shipment
   *
   * @example
   * ```ts
   * const shipment = await client.shipments.update('id', {
   *   name: 'Shipment Name',
   * });
   * ```
   */
  update(
    pathID: string,
    body: ShipmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ShipmentUpdateResponse> {
    return this._client.patch(path`/v1/shipments/${pathID}`, { body, ...options });
  }

  /**
   * List Shipments
   *
   * @example
   * ```ts
   * const shipments = await client.shipments.list();
   * ```
   */
  list(
    query: ShipmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShipmentListResponse> {
    return this._client.get('/v1/shipments', { query, ...options });
  }

  /**
   * Delete Shipment
   *
   * @example
   * ```ts
   * const success = await client.shipments.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<AddressesAPI.Success> {
    return this._client.delete(path`/v1/shipments/${id}`, options);
  }
}

export interface Shipment {
  id?: string;

  created_at?: string;

  note?: string;

  order_id?: string;

  reference_id?: string;

  shipment_items?: Array<Shipment.ShipmentItem>;

  status?: string;

  tracking_info?: Shipment.TrackingInfo;

  updated_at?: string;
}

export namespace Shipment {
  export interface ShipmentItem {
    id?: string;

    quantity?: number;

    sku_id?: string;
  }

  export interface TrackingInfo {
    delivery_partner?: string;

    tracking_number?: string;

    tracking_url?: string;
  }
}

export interface ShipmentItemCreate {
  product_id: string;

  quantity: number;
}

export interface TrackingInfo {
  tracking_number: string;

  delivery_partner?: string;

  tracking_url?: string;
}

export interface ShipmentCreateResponse extends AddressesAPI.Success {
  data?: Shipment;
}

export interface ShipmentRetrieveResponse extends AddressesAPI.Success {
  data?: Shipment;
}

export interface ShipmentUpdateResponse extends AddressesAPI.Success {
  data?: Shipment;
}

export interface ShipmentListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<Shipment>;
}

export interface ShipmentCreateParams {
  created_at: string;

  order_id: string;

  reference_id: string;

  shipment_items: Array<ShipmentItemCreate>;

  shipment_status: 'shipped' | 'created' | 'fullfiled';

  name?: string;

  note?: string;

  tracking_info?: TrackingInfo;
}

export interface ShipmentUpdateParams {
  name: string;

  body_id?: string;

  note?: string;

  order_id?: string;

  remark?: string;

  shipment_items?: Array<ShipmentItemCreate>;

  shipment_status?: 'shipped' | 'created';

  status?: 'active' | 'inactive';

  tracking_info?: TrackingInfo;

  updated_at?: string;
}

export interface ShipmentListParams {
  page?: number;

  page_size?: number;

  reference_ids?: Array<string>;

  shipment_status?: 'shipped' | 'created' | 'fulfilled';

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export declare namespace Shipments {
  export {
    type Shipment as Shipment,
    type ShipmentItemCreate as ShipmentItemCreate,
    type TrackingInfo as TrackingInfo,
    type ShipmentCreateResponse as ShipmentCreateResponse,
    type ShipmentRetrieveResponse as ShipmentRetrieveResponse,
    type ShipmentUpdateResponse as ShipmentUpdateResponse,
    type ShipmentListResponse as ShipmentListResponse,
    type ShipmentCreateParams as ShipmentCreateParams,
    type ShipmentUpdateParams as ShipmentUpdateParams,
    type ShipmentListParams as ShipmentListParams,
  };
}
