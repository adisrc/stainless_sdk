// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.invoices.create({
      due_date: '2025-01-01T00:00:00Z',
      invoice_number: 'INV-20250101',
      items: [
        {
          amount: 1000000,
          name: 'Item Name',
          quantity: 1000000,
          reference_id: 'ITEM-20250101',
          sku: 'SKU-20250101',
        },
      ],
      order_id: 'ORD-20250101',
      paid_amount: 1000000,
      reference_id: 'INV-20250101',
      total_amount: 1000000,
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
    const response = await client.invoices.create({
      due_date: '2025-01-01T00:00:00Z',
      invoice_number: 'INV-20250101',
      items: [
        {
          amount: 1000000,
          name: 'Item Name',
          quantity: 1000000,
          reference_id: 'ITEM-20250101',
          sku: 'SKU-20250101',
        },
      ],
      order_id: 'ORD-20250101',
      paid_amount: 1000000,
      reference_id: 'INV-20250101',
      total_amount: 1000000,
      created_at: '2025-01-01T00:00:00Z',
      remarks: 'Remarks',
      status: 'PAID',
      updated_at: '2025-01-01T00:00:00Z',
      url: 'https://example.com/invoice/INV-20250101',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.invoices.retrieve('id');
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
    const responsePromise = client.invoices.update('id', {
      due_date: '2025-01-01T00:00:00Z',
      invoice_number: 'INV-20250101',
      items: [
        {
          amount: 1000000,
          name: 'Item Name',
          quantity: 1000000,
          reference_id: 'ITEM-20250101',
          sku: 'SKU-20250101',
        },
      ],
      order_id: 'ORD-20250101',
      paid_amount: 1000000,
      reference_id: 'INV-20250101',
      total_amount: 1000000,
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
  test.skip('update: required and optional params', async () => {
    const response = await client.invoices.update('id', {
      due_date: '2025-01-01T00:00:00Z',
      invoice_number: 'INV-20250101',
      items: [
        {
          amount: 1000000,
          name: 'Item Name',
          quantity: 1000000,
          reference_id: 'ITEM-20250101',
          sku: 'SKU-20250101',
        },
      ],
      order_id: 'ORD-20250101',
      paid_amount: 1000000,
      reference_id: 'INV-20250101',
      total_amount: 1000000,
      created_at: '2025-01-01T00:00:00Z',
      remarks: 'Remarks',
      status: 'PAID',
      updated_at: '2025-01-01T00:00:00Z',
      url: 'https://example.com/invoice/INV-20250101',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.invoices.list();
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
      client.invoices.list(
        {
          page: 1,
          page_size: 1,
          reference_ids: ['string'],
          sort: 'asc',
          sort_by: 'created_at',
          status: 'PAID',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestWiz.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.invoices.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
