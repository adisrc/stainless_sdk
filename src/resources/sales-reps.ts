// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CustomersAPI from './customers/customers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SalesReps extends APIResource {
  /**
   * Get Sales Rep List
   */
  list(
    query: SalesRepListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SalesRepListResponse> {
    return this._client.get('/v1/sales-reps', { query, ...options });
  }
}

export interface User {
  id?: string;

  created_at?: string;

  created_by?: string;

  department?: string;

  email?: string;

  first_name?: string;

  last_name?: string;

  phone?: string;

  status?: string;

  updated_at?: string;

  updated_by?: string;
}

export interface SalesRepListResponse extends CustomersAPI.SuccessPagination {
  data?: Array<User>;
}

export interface SalesRepListParams {
  /**
   * LIKE search, case sensitive
   */
  email?: string;

  page?: number;

  page_size?: number;

  sort?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at' | 'first_name' | 'last_name';

  status?: 'active' | 'inactive';
}

export declare namespace SalesReps {
  export {
    type User as User,
    type SalesRepListResponse as SalesRepListResponse,
    type SalesRepListParams as SalesRepListParams,
  };
}
