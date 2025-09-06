// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.customers.addresses.create('customer_id', {
      address_line_1: '123 Main St',
      city: 'Anytown',
      reference_id: 'ADDR123',
      type: 'billing',
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
    const response = await client.customers.addresses.create('customer_id', {
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
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.customers.addresses.retrieve('address_id', { customer_id: 'customer_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.customers.addresses.retrieve('address_id', { customer_id: 'customer_id' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.customers.addresses.update('address_id', { customer_id: 'customer_id' });
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
    const response = await client.customers.addresses.update('address_id', {
      customer_id: 'customer_id',
      address_line_1: '123 Main St',
      address_line_2: 'Apt 101',
      attributes: [{ name: '1234567890', value: 'red' }],
      city: 'Anytown',
      country: 'US',
      email: 'john.doe@example.com',
      first_name: 'John',
      is_default: true,
      last_name: 'Doe',
      phone: '+14155552671',
      reference_id: 'ADDR123',
      state: 'CA',
      type: 'billing',
      zip_code: '12345',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.customers.addresses.list('customer_id');
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
      client.customers.addresses.list(
        'customer_id',
        {
          created_after: 'created_after',
          created_before: 'created_before',
          page: 1,
          page_size: 1,
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
  test.skip('delete: only required params', async () => {
    const responsePromise = client.customers.addresses.delete('address_id', { customer_id: 'customer_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.customers.addresses.delete('address_id', { customer_id: 'customer_id' });
  });
});
