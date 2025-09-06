// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ProductsAPI from './products';
import * as AddressesAPI from './customers/addresses';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Create Product
   *
   * @example
   * ```ts
   * const product = await client.products.create({
   *   group_code: 'PRD1',
   *   variants: [
   *     {
   *       name: "8'X10'",
   *       product_prices: [{ price_list_id: 'PRC123' }],
   *       reference_id: 'PRD1',
   *       sku_id: '66112458-fda7-4a96-8121-9c1d57a8651d',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/v1/products', { body, ...options });
  }

  /**
   * Get Product By ID
   *
   * @example
   * ```ts
   * const product = await client.products.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/v1/products/${id}`, options);
  }

  /**
   * Update Product
   *
   * @example
   * ```ts
   * const product = await client.products.update('id');
   * ```
   */
  update(id: string, body: ProductUpdateParams, options?: RequestOptions): APIPromise<ProductUpdateResponse> {
    return this._client.patch(path`/v1/products/${id}`, { body, ...options });
  }

  /**
   * List Products
   *
   * @example
   * ```ts
   * const products = await client.products.list();
   * ```
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get('/v1/products', { query, ...options });
  }
}

export interface Attribute {
  id?: string;

  name?: string;

  value?: string;
}

export interface ProductDetails {
  /**
   * UUID
   */
  id?: string;

  attributes?: Array<Attribute>;

  created_at?: string;

  group_code?: string;

  is_primary?: boolean;

  medias?: Array<ProductMediaResponse>;

  name?: string;

  price_lists?: Array<ProductDetails.PriceList>;

  reference_id?: string;

  sku?: string;

  status?: 'active' | 'inactive';

  updated_at?: string;
}

export namespace ProductDetails {
  export interface PriceList {
    id?: string;

    created_at?: string;

    max_order_quantity?: number;

    min_order_quantity?: number;

    price?: number;

    step_increment?: number;

    updated_at?: string;
  }
}

export interface ProductList {
  /**
   * UUID
   */
  id?: string;

  attributes?: Array<Attribute>;

  created_at?: string;

  group_code?: string;

  is_primary?: boolean;

  medias?: Array<ProductMediaResponse>;

  name?: string;

  parent_id?: string;

  reference_id?: string;

  sku?: string;

  status?: 'active' | 'inactive';

  updated_at?: string;
}

export interface ProductMedia {
  /**
   * Display order
   */
  order: number;

  /**
   * Media type (currently supports "image" or "video")
   */
  type: 'image';

  /**
   * Media URL, should be a valid URL with public access
   */
  url: string;

  /**
   * Whether this is the default media
   */
  is_default?: boolean;
}

export interface ProductMediaResponse {
  is_default?: boolean;

  type?: string;

  url?: string;
}

export interface ProductPrice {
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

export interface ProductCreateResponse extends AddressesAPI.Success {
  data?: ProductList;
}

export interface ProductRetrieveResponse extends AddressesAPI.Success {
  data?: ProductDetails;
}

export interface ProductUpdateResponse extends AddressesAPI.Success {
  data?: ProductDetails;
}

export interface ProductListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<ProductList>;
}

export interface ProductCreateParams {
  /**
   * If no grouping is available, the group code will be the sku_id
   */
  group_code: string;

  variants: Array<ProductCreateParams.Variant>;

  /**
   * Ordered list of attribute names used to distinguish and group variants under the
   * same product (e.g., size, then shape).
   */
  grouping_attributes?: Array<string>;
}

export namespace ProductCreateParams {
  export interface Variant {
    name: string;

    /**
     * Prices mapped to price lists
     */
    product_prices: Array<ProductsAPI.ProductPrice>;

    /**
     * Reference ID for the variant, if no reference id is available, the sku_id should
     * be used
     */
    reference_id: string;

    sku_id: string;

    /**
     * Key-value pair attributes like size, shape, material, etc.
     */
    attributes?: Array<CustomersAPI.AttributeRequest>;

    /**
     * One or more category names for this variant, in case sub categories are
     * available, the sub categories should be separated by :: eg:
     * "category1::sub_category1::sub_sub_category1" then the category
     * "sub_sub_category1" will be mapped to the product
     */
    categories?: Array<string>;

    /**
     * One or more collection IDs for this variant
     */
    collections?: Array<string>;

    /**
     * Indicates if this is the primary variant
     */
    is_primary?: boolean;

    /**
     * Media assets associated with this variant
     */
    medias?: Array<ProductsAPI.ProductMedia>;

    /**
     * Determines sort order within the group, if not provided, variants will be sorted
     * by name
     */
    priority?: number;
  }
}

export interface ProductUpdateParams {
  /**
   * Key-value pair attributes like size, shape, material, etc.
   */
  attributes?: Array<CustomersAPI.AttributeRequest>;

  /**
   * One or more category names for this variant, in case sub categories are
   * available, the sub categories should be separated by :: eg:
   * "category1::sub_category1::sub_sub_category1" then the category
   * "sub_sub_category1" will be mapped to the product
   */
  categories?: Array<string>;

  /**
   * One or more collection IDs for this variant
   */
  collections?: Array<string>;

  group_code?: string;

  /**
   * Media assets associated with this variant
   */
  medias?: Array<ProductMedia>;

  name?: string;

  /**
   * Prices mapped to price lists
   */
  product_prices?: Array<ProductPrice>;

  /**
   * Reference ID for the variant, if no reference id is available, the sku_id should
   * be used
   */
  reference_id?: string;

  status?: 'inactive';
}

export interface ProductListParams {
  group_code?: string;

  is_primary?: boolean;

  page?: number;

  page_size?: number;

  sku_id?: string;

  sort?: 'asc' | 'desc';

  /**
   * default is sku_id
   */
  sort_by?: 'created_at' | 'updated_at' | 'name' | 'sku_id';
}

export declare namespace Products {
  export {
    type Attribute as Attribute,
    type ProductDetails as ProductDetails,
    type ProductList as ProductList,
    type ProductMedia as ProductMedia,
    type ProductMediaResponse as ProductMediaResponse,
    type ProductPrice as ProductPrice,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}
