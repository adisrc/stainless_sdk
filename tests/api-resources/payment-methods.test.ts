// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentMethods', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.paymentMethods.create({
      token: 'PIuTv1UgBqESZ2KRDixPtDJt~1234567890',
      brand: 'visa',
      card_expiry: '09/25',
      card_type: 'debit',
      customer_id: '00000000-0000-0000-0000-000000000000',
      last_four_digits: '1111',
      payment_method_type: 'card',
      provider: 'stripe',
      reference_id: 'CRD_1234567890',
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
    const response = await client.paymentMethods.create({
      token: 'PIuTv1UgBqESZ2KRDixPtDJt~1234567890',
      brand: 'visa',
      card_expiry: '09/25',
      card_type: 'debit',
      customer_id: '00000000-0000-0000-0000-000000000000',
      last_four_digits: '1111',
      payment_method_type: 'card',
      provider: 'stripe',
      reference_id: 'CRD_1234567890',
      address_line_1: '123 Main St',
      address_line_2: 'Apt 101',
      city: 'Anytown',
      country: 'US',
      display_name: 'John Doe',
      email: 'john.doe@example.com',
      external_customer_id: 'cus_ABC123456',
      first_name: 'John',
      is_default: true,
      last_name: 'Doe',
      phone: '+14155552671',
      state: 'CA',
      zip_code: '12345',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.paymentMethods.list();
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
      client.paymentMethods.list(
        { customer_id: 'customer_id', page: 1, page_size: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestWiz.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.paymentMethods.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
