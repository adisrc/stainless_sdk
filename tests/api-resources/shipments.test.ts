// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shipments', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.shipments.create({
      created_at: 'created_at',
      order_id: 'order_id',
      reference_id: 'reference_id',
      shipment_items: [{ product_id: 'product_id', quantity: 1 }],
      shipment_status: 'shipped',
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
    const response = await client.shipments.create({
      created_at: 'created_at',
      order_id: 'order_id',
      reference_id: 'reference_id',
      shipment_items: [{ product_id: 'product_id', quantity: 1 }],
      shipment_status: 'shipped',
      name: 'Shipment Name',
      note: 'Handle with care',
      tracking_info: {
        tracking_number: 'tracking_number',
        delivery_partner: 'delivery_partner',
        tracking_url: 'tracking_url',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.shipments.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.shipments.update('id', { name: 'Shipment Name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.shipments.update('id', {
      name: 'Shipment Name',
      body_id: '123',
      note: 'Handle with care',
      order_id: '123',
      remark: 'Door to Door',
      shipment_items: [{ product_id: 'product_id', quantity: 1 }],
      shipment_status: 'shipped',
      status: 'active',
      tracking_info: {
        tracking_number: 'tracking_number',
        delivery_partner: 'delivery_partner',
        tracking_url: 'tracking_url',
      },
      updated_at: '2021-01-01T00:00:00Z',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.shipments.list();
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
      client.shipments.list(
        {
          page: 1,
          page_size: 1,
          reference_ids: ['string'],
          shipment_status: 'shipped',
          sort: 'asc',
          sort_by: 'created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestWiz.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.shipments.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
