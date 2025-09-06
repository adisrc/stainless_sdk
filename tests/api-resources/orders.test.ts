// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestWiz from 'test_wiz';

const client = new TestWiz({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.orders.create({
      created_at: '2025-01-01T00:00:00Z',
      customer_id: '12345678-90ab-cdef-1234-567890abcdef',
      fulfillment_status: 'PARTIALLY_DELIVERED',
      line_items: [{ sku: 'RUG14754' }],
      payment_status: 'PAID',
      reference_id: '1234567890',
      updated_at: '2025-01-01T00:00:00Z',
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
    const response = await client.orders.create({
      created_at: '2025-01-01T00:00:00Z',
      customer_id: '12345678-90ab-cdef-1234-567890abcdef',
      fulfillment_status: 'PARTIALLY_DELIVERED',
      line_items: [
        {
          sku: 'RUG14754',
          cancelled_quantity: 0,
          discount: 0,
          discount_type: 'percentage',
          invoiced_quantity: 0,
          is_adhoc: false,
          note: 'Extra packing material',
          picked_quantity: 0,
          quantity: 10,
          shipped_quantity: 0,
          unit_price: 100,
        },
      ],
      payment_status: 'PAID',
      reference_id: '1234567890',
      updated_at: '2025-01-01T00:00:00Z',
      additional_charges: [{ name: 'name', type: 'tax', amount: 0 }],
      amount: 100,
      amount_paid: 100,
      attributes: [{ name: '1234567890', value: 'red' }],
      billing_address: {
        id: '12345678-90ab-cdef-1234-567890abcdef',
        address_line_1: '123 Main St',
        address_line_2: 'Apt 101',
        attributes: [{ name: '1234567890', value: 'red' }],
        city: 'Anytown',
        country: 'US',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+14155552671',
        reference_id: 'REF_1234567890',
        state: 'CA',
        zip_code: '12345',
      },
      container_info: { key: '40ft_hig', unit: 'CFT', volume: 100, name: 'Container Name' },
      customer_consent: { consent_file_id: 'consent_file_id', has_consent: true },
      customer_note: 'Customer Notes',
      discount_value: 10,
      display_id: '1234567890',
      due_date: '2025-01-01T00:00:00Z',
      freight_term: 'Freight Term',
      internal_note: 'Internal Notes',
      payment_method_id: '1234567890',
      payment_term: 'Payment Term',
      po_number: 'po_number',
      primary_contact: {
        id: '12345678-90ab-cdef-1234-567890abcdef',
        attributes: [{ name: '1234567890', value: 'red' }],
        designation: 'Sales Manager',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+14155552671',
      },
      shipment_date: '2025-01-01T00:00:00Z',
      shipping_address: {
        id: '12345678-90ab-cdef-1234-567890abcdef',
        address_line_1: '123 Main St',
        address_line_2: 'Apt 101',
        attributes: [{ name: '1234567890', value: 'red' }],
        city: 'Anytown',
        country: 'US',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+14155552671',
        reference_id: 'REF_1234567890',
        state: 'CA',
        zip_code: '12345',
      },
      shipping_charge: 10,
      shipping_method: 'Shipping Method',
      source: 'high-point',
      status: 'draft',
      tax_value: 10,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.orders.retrieve('id');
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
    const responsePromise = client.orders.update('id', {
      created_at: '2025-01-01T00:00:00Z',
      customer_id: '12345678-90ab-cdef-1234-567890abcdef',
      fulfillment_status: 'PARTIALLY_DELIVERED',
      line_items: [{ sku: 'RUG14754' }],
      payment_status: 'PAID',
      reference_id: '1234567890',
      updated_at: '2025-01-01T00:00:00Z',
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
    const response = await client.orders.update('id', {
      created_at: '2025-01-01T00:00:00Z',
      customer_id: '12345678-90ab-cdef-1234-567890abcdef',
      fulfillment_status: 'PARTIALLY_DELIVERED',
      line_items: [
        {
          sku: 'RUG14754',
          cancelled_quantity: 0,
          discount: 0,
          discount_type: 'percentage',
          invoiced_quantity: 0,
          is_adhoc: false,
          note: 'Extra packing material',
          picked_quantity: 0,
          quantity: 10,
          shipped_quantity: 0,
          unit_price: 100,
        },
      ],
      payment_status: 'PAID',
      reference_id: '1234567890',
      updated_at: '2025-01-01T00:00:00Z',
      additional_charges: [{ name: 'name', type: 'tax', amount: 0 }],
      amount: 100,
      amount_paid: 100,
      attributes: [{ name: '1234567890', value: 'red' }],
      billing_address: {
        id: '12345678-90ab-cdef-1234-567890abcdef',
        address_line_1: '123 Main St',
        address_line_2: 'Apt 101',
        attributes: [{ name: '1234567890', value: 'red' }],
        city: 'Anytown',
        country: 'US',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+14155552671',
        reference_id: 'REF_1234567890',
        state: 'CA',
        zip_code: '12345',
      },
      container_info: { key: '40ft_hig', unit: 'CFT', volume: 100, name: 'Container Name' },
      customer_consent: { consent_file_id: 'consent_file_id', has_consent: true },
      customer_note: 'Customer Notes',
      discount_value: 10,
      display_id: '1234567890',
      due_date: '2025-01-01T00:00:00Z',
      freight_term: 'Freight Term',
      internal_note: 'Internal Notes',
      payment_method_id: '1234567890',
      payment_term: 'Payment Term',
      po_number: 'po_number',
      primary_contact: {
        id: '12345678-90ab-cdef-1234-567890abcdef',
        attributes: [{ name: '1234567890', value: 'red' }],
        designation: 'Sales Manager',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+14155552671',
      },
      shipment_date: '2025-01-01T00:00:00Z',
      shipping_address: {
        id: '12345678-90ab-cdef-1234-567890abcdef',
        address_line_1: '123 Main St',
        address_line_2: 'Apt 101',
        attributes: [{ name: '1234567890', value: 'red' }],
        city: 'Anytown',
        country: 'US',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        phone: '+14155552671',
        reference_id: 'REF_1234567890',
        state: 'CA',
        zip_code: '12345',
      },
      shipping_charge: 10,
      shipping_method: 'Shipping Method',
      source: 'high-point',
      tax_value: 10,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.orders.list();
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
      client.orders.list(
        {
          created_after: 'created_after',
          created_before: 'created_before',
          order_status: 'draft',
          page: 1,
          page_size: 1,
          reference_ids: ['string'],
          sort: 'asc',
          sort_by: 'created_at',
          source: 'source',
          updated_after: 'updated_after',
          updated_before: 'updated_before',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestWiz.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.orders.updateStatus('draft', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.orders.updateStatus('draft', { id: 'id' });
  });
});
