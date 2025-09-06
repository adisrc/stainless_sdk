// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inventories', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.inventories.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.inventories.list(
        { page: 1, page_size: 1, sku: 'sku', sort: 'asc', sort_by: 'created_at', status: 'active' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestWiz.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createOrUpdate: only required params', async () => {
    const responsePromise = client.inventories.createOrUpdate({
      inventory_status: 'IN_STOCK',
      sku: 'SKU-001',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createOrUpdate: required and optional params', async () => {
    const response = await client.inventories.createOrUpdate({
      inventory_status: 'IN_STOCK',
      sku: 'SKU-001',
      available_quantity: 100,
      back_order_allowed: true,
      back_order_quantity: 100,
      dynamic_details: '{"key":"value"}',
      in_stock_quantity: 100,
      in_transit_details: [{ date: '2025-01-01T00:00:00Z', identifier: '1234567890', quantity: 100 }],
      notes: 'Notes',
      on_order_details: [{ date: '2025-01-01T00:00:00Z', identifier: '1234567890', quantity: 100 }],
      out_of_stock_threshold: 100,
      reserved_quantity: 100,
      track_inventory: true,
    });
  });
});
