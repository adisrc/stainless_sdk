// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddressesAPI from './customers/addresses';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ProductPricings extends APIResource {
  /**
   * List Product Pricing
   *
   * @example
   * ```ts
   * const productPricing =
   *   await client.productPricings.retrieve('product_id');
   * ```
   */
  retrieve(productID: string, options?: RequestOptions): APIPromise<ProductPricingRetrieveResponse> {
    return this._client.get(path`/v1/product-pricings/${productID}`, options);
  }

  /**
   * Update Product Pricing
   *
   * @example
   * ```ts
   * const productPricing = await client.productPricings.update(
   *   'product_id',
   *   { price_list_id: 'PRC123' },
   * );
   * ```
   */
  update(
    productID: string,
    body: ProductPricingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductPricingUpdateResponse> {
    return this._client.patch(path`/v1/product-pricings/${productID}`, { body, ...options });
  }
}

export interface ProductPricing {
  /**
   * UUID
   */
  id?: string;

  created_at?: string;

  currency?: string;

  max_order_quantity?: number;

  min_order_quantity?: number;

  price?: number;

  price_list_id?: string;

  product_id?: string;

  status?: string;

  step_increment?: number;

  updated_at?: string;
}

export interface ProductPricingRetrieveResponse extends AddressesAPI.Success {
  data?: ProductPricing;
}

export interface ProductPricingUpdateResponse extends AddressesAPI.Success {
  data?: ProductPricing;
}

export interface ProductPricingUpdateParams {
  price_list_id: string;

  /**
   * Maximum quantity allowed per order
   */
  max_order_quantity?: number;

  /**
   * Minimum quantity allowed per order
   */
  min_order_quantity?: number;

  /**
   * Price for this variant under the given price list
   */
  price?: number;

  /**
   * Step increment for ordering (e.g., in multiples of 1, 5, etc.)
   */
  step_increment?: number;
}

export declare namespace ProductPricings {
  export {
    type ProductPricing as ProductPricing,
    type ProductPricingRetrieveResponse as ProductPricingRetrieveResponse,
    type ProductPricingUpdateResponse as ProductPricingUpdateResponse,
    type ProductPricingUpdateParams as ProductPricingUpdateParams,
  };
}
