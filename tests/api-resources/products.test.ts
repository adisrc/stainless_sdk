// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({
      group_code: 'PRD1',
      variants: [
        {
          name: "8'X10'",
          product_prices: [{ price_list_id: 'PRC123' }],
          reference_id: 'PRD1',
          sku_id: '66112458-fda7-4a96-8121-9c1d57a8651d',
        },
      ],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.products.create({
      group_code: 'PRD1',
      variants: [
        {
          name: "8'X10'",
          product_prices: [
            {
              price_list_id: 'PRC123',
              max_order_quantity: 100,
              min_order_quantity: 1,
              price: 100,
              step_increment: 1,
            },
          ],
          reference_id: 'PRD1',
          sku_id: '66112458-fda7-4a96-8121-9c1d57a8651d',
          attributes: [{ name: '1234567890', value: 'red' }],
          categories: ['string'],
          collections: ['string'],
          is_primary: true,
          medias: [{ order: 1, type: 'image', url: 'https://example.com/image1.jpg', is_default: true }],
          priority: 2,
        },
      ],
      grouping_attributes: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.products.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.products.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.products.list();
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
      client.products.list(
        {
          group_code: 'group_code',
          is_primary: true,
          page: 1,
          page_size: 1,
          sku_id: 'sku_id',
          sort: 'asc',
          sort_by: 'created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestWiz.NotFoundError);
  });
});
