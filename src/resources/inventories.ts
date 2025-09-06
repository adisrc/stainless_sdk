// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressesAPI from './customers/addresses';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Inventories extends APIResource {
  /**
   * List Inventories
   *
   * @example
   * ```ts
   * const inventories = await client.inventories.list();
   * ```
   */
  list(
    query: InventoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryListResponse> {
    return this._client.get('/v1/inventories', { query, ...options });
  }

  /**
   * Create or Update Inventory
   *
   * @example
   * ```ts
   * const response = await client.inventories.createOrUpdate({
   *   inventory_status: 'IN_STOCK',
   *   sku: 'SKU-001',
   * });
   * ```
   */
  createOrUpdate(
    body: InventoryCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InventoryCreateOrUpdateResponse> {
    return this._client.post('/v1/inventories', { body, ...options });
  }
}

export interface Inventory {
  /**
   * UUID
   */
  id?: string;

  available_quantity?: number;

  back_order_allowed?: boolean;

  back_order_quantity?: number;

  created_at?: string;

  in_stock_quantity?: number;

  in_transit_details?: Array<Inventory.InTransitDetail>;

  inventory_status?: 'OUT_OF_STOCK' | 'IN_STOCK' | 'BACK_ORDER';

  notes?: string;

  on_order_details?: Array<Inventory.OnOrderDetail>;

  product_id?: string;

  reserved_quantity?: number;

  sku?: string;

  status?: 'active' | 'inactive';

  track_inventory?: boolean;

  updated_at?: string;
}

export namespace Inventory {
  export interface InTransitDetail {
    date?: string;

    identifier?: string;

    quantity?: number;
  }

  export interface OnOrderDetail {
    date?: string;

    identifier?: string;

    quantity?: number;
  }
}

export interface InventoryListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<Inventory>;
}

export interface InventoryCreateOrUpdateResponse extends AddressesAPI.Success {
  data?: Inventory;
}

export interface InventoryListParams {
  page?: number;

  page_size?: number;

  sku?: string;

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at' | 'product_id' | 'id';

  status?: 'active' | 'inactive';
}

export interface InventoryCreateOrUpdateParams {
  inventory_status: 'OUT_OF_STOCK' | 'IN_STOCK' | 'BACK_ORDER';

  sku: string;

  available_quantity?: number;

  back_order_allowed?: boolean;

  back_order_quantity?: number;

  dynamic_details?: string;

  in_stock_quantity?: number;

  in_transit_details?: Array<InventoryCreateOrUpdateParams.InTransitDetail>;

  /**
   * HTML content
   */
  notes?: string;

  on_order_details?: Array<InventoryCreateOrUpdateParams.OnOrderDetail>;

  out_of_stock_threshold?: number;

  reserved_quantity?: number;

  track_inventory?: boolean;
}

export namespace InventoryCreateOrUpdateParams {
  export interface InTransitDetail {
    date: string;

    identifier: string;

    quantity: number;
  }

  export interface OnOrderDetail {
    /**
     * Future date
     */
    date: string;

    identifier: string;

    quantity: number;
  }
}

export declare namespace Inventories {
  export {
    type Inventory as Inventory,
    type InventoryListResponse as InventoryListResponse,
    type InventoryCreateOrUpdateResponse as InventoryCreateOrUpdateResponse,
    type InventoryListParams as InventoryListParams,
    type InventoryCreateOrUpdateParams as InventoryCreateOrUpdateParams,
  };
}
