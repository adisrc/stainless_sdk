// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import list_attributes from './attributes/list-attributes';
import create_customers from './customers/create-customers';
import retrieve_customers from './customers/retrieve-customers';
import update_customers from './customers/update-customers';
import list_customers from './customers/list-customers';
import delete_customers from './customers/delete-customers';
import create_customers_addresses from './customers/addresses/create-customers-addresses';
import retrieve_customers_addresses from './customers/addresses/retrieve-customers-addresses';
import update_customers_addresses from './customers/addresses/update-customers-addresses';
import list_customers_addresses from './customers/addresses/list-customers-addresses';
import delete_customers_addresses from './customers/addresses/delete-customers-addresses';
import create_customers_contacts from './customers/contacts/create-customers-contacts';
import retrieve_customers_contacts from './customers/contacts/retrieve-customers-contacts';
import update_customers_contacts from './customers/contacts/update-customers-contacts';
import list_customers_contacts from './customers/contacts/list-customers-contacts';
import delete_customers_contacts from './customers/contacts/delete-customers-contacts';
import list_inventories from './inventories/list-inventories';
import create_or_update_inventories from './inventories/create-or-update-inventories';
import create_invoices from './invoices/create-invoices';
import retrieve_invoices from './invoices/retrieve-invoices';
import update_invoices from './invoices/update-invoices';
import list_invoices from './invoices/list-invoices';
import delete_invoices from './invoices/delete-invoices';
import create_orders from './orders/create-orders';
import retrieve_orders from './orders/retrieve-orders';
import update_orders from './orders/update-orders';
import list_orders from './orders/list-orders';
import update_status_orders from './orders/update-status-orders';
import create_payment_methods from './payment-methods/create-payment-methods';
import list_payment_methods from './payment-methods/list-payment-methods';
import delete_payment_methods from './payment-methods/delete-payment-methods';
import create_price_lists from './price-lists/create-price-lists';
import retrieve_price_lists from './price-lists/retrieve-price-lists';
import update_price_lists from './price-lists/update-price-lists';
import list_price_lists from './price-lists/list-price-lists';
import delete_price_lists from './price-lists/delete-price-lists';
import retrieve_product_pricings from './product-pricings/retrieve-product-pricings';
import update_product_pricings from './product-pricings/update-product-pricings';
import create_products from './products/create-products';
import retrieve_products from './products/retrieve-products';
import update_products from './products/update-products';
import list_products from './products/list-products';
import list_sales_reps from './sales-reps/list-sales-reps';
import create_shipments from './shipments/create-shipments';
import retrieve_shipments from './shipments/retrieve-shipments';
import update_shipments from './shipments/update-shipments';
import list_shipments from './shipments/list-shipments';
import delete_shipments from './shipments/delete-shipments';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(list_attributes);
addEndpoint(create_customers);
addEndpoint(retrieve_customers);
addEndpoint(update_customers);
addEndpoint(list_customers);
addEndpoint(delete_customers);
addEndpoint(create_customers_addresses);
addEndpoint(retrieve_customers_addresses);
addEndpoint(update_customers_addresses);
addEndpoint(list_customers_addresses);
addEndpoint(delete_customers_addresses);
addEndpoint(create_customers_contacts);
addEndpoint(retrieve_customers_contacts);
addEndpoint(update_customers_contacts);
addEndpoint(list_customers_contacts);
addEndpoint(delete_customers_contacts);
addEndpoint(list_inventories);
addEndpoint(create_or_update_inventories);
addEndpoint(create_invoices);
addEndpoint(retrieve_invoices);
addEndpoint(update_invoices);
addEndpoint(list_invoices);
addEndpoint(delete_invoices);
addEndpoint(create_orders);
addEndpoint(retrieve_orders);
addEndpoint(update_orders);
addEndpoint(list_orders);
addEndpoint(update_status_orders);
addEndpoint(create_payment_methods);
addEndpoint(list_payment_methods);
addEndpoint(delete_payment_methods);
addEndpoint(create_price_lists);
addEndpoint(retrieve_price_lists);
addEndpoint(update_price_lists);
addEndpoint(list_price_lists);
addEndpoint(delete_price_lists);
addEndpoint(retrieve_product_pricings);
addEndpoint(update_product_pricings);
addEndpoint(create_products);
addEndpoint(retrieve_products);
addEndpoint(update_products);
addEndpoint(list_products);
addEndpoint(list_sales_reps);
addEndpoint(create_shipments);
addEndpoint(retrieve_shipments);
addEndpoint(update_shipments);
addEndpoint(list_shipments);
addEndpoint(delete_shipments);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
