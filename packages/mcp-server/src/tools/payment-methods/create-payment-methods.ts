// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/payment-methods',
};

export const tool: Tool = {
  name: 'create_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate payment method\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/success'\n    }\n  ],\n  $defs: {\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
      },
      brand: {
        type: 'string',
      },
      card_expiry: {
        type: 'string',
      },
      card_type: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      last_four_digits: {
        type: 'string',
      },
      payment_method_type: {
        type: 'string',
      },
      provider: {
        type: 'string',
      },
      reference_id: {
        type: 'string',
      },
      address_line_1: {
        type: 'string',
      },
      address_line_2: {
        type: 'string',
      },
      city: {
        type: 'string',
      },
      country: {
        type: 'string',
      },
      display_name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      external_customer_id: {
        type: 'string',
      },
      first_name: {
        type: 'string',
      },
      is_default: {
        type: 'boolean',
      },
      last_name: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      state: {
        type: 'string',
      },
      zip_code: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [
      'token',
      'brand',
      'card_expiry',
      'card_type',
      'customer_id',
      'last_four_digits',
      'payment_method_type',
      'provider',
      'reference_id',
    ],
  },
  annotations: {},
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.paymentMethods.create(body)));
};

export default { metadata, tool, handler };
