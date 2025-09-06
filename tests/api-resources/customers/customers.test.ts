// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.customers.create({
      assigned_price_list_id: 'assigned_price_list_id',
      assigned_sales_rep_ids: ['string'],
      reference_id: 'CUS123',
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
    const response = await client.customers.create({
      assigned_price_list_id: 'assigned_price_list_id',
      assigned_sales_rep_ids: ['string'],
      reference_id: 'CUS123',
      addresses: [
        {
          address_line_1: '123 Main St',
          city: 'Anytown',
          reference_id: 'ADDR123',
          type: 'billing',
          address_line_2: 'Apt 101',
          attributes: [{ name: '1234567890', value: 'red' }],
          country: 'US',
          email: 'john.doe@example.com',
          first_name: 'John',
          is_default: true,
          last_name: 'Doe',
          phone: '+14155552671',
          state: 'CA',
          zip_code: '12345',
        },
      ],
      attributes: [{ name: '1234567890', value: 'red' }],
      company_name: 'Company Name',
      contacts: [
        {
          email: 'john.doe@example.com',
          first_name: 'John',
          reference_id: 'CUS123',
          attributes: [{ name: '1234567890', value: 'red' }],
          designation: 'Sales Manager',
          is_default: true,
          last_name: 'Doe',
          phone: '+14155552671',
        },
      ],
      display_id: '1234567890',
      display_name: 'Customer Display Name',
      email: 'john.doe@example.com',
      first_name: 'John',
      freight_term: 'freight_term',
      last_name: 'Doe',
      payment_mode: 'payment_mode',
      payment_term: 'payment_term',
      phone: '+14155552671',
      shipping_method: 'shipping_method',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.customers.retrieve('id');
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
    const responsePromise = client.customers.update('id', {});
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
    const responsePromise = client.customers.list();
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
      client.customers.list(
        {
          created_after: 'created_after',
          created_before: 'created_before',
          page: 1,
          page_size: 1,
          reference_ids: ['string'],
          sort: 'asc',
          sort_by: 'created_at',
          status: 'active',
          updated_after: 'updated_after',
          updated_before: 'updated_before',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestWiz.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.customers.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
