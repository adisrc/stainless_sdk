// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'customers.addresses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/addresses',
};

export const tool: Tool = {
  name: 'create_customers_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Address\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/address_create_response',\n  $defs: {\n    address_create_response: {\n      allOf: [        {\n          $ref: '#/$defs/success'\n        }\n      ]\n    },\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      address_line_1: {
        type: 'string',
      },
      city: {
        type: 'string',
      },
      reference_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['billing', 'shipping'],
      },
      address_line_2: {
        type: 'string',
      },
      attributes: {
        type: 'array',
        items: {
          $ref: '#/$defs/attribute_request',
        },
      },
      country: {
        type: 'string',
        description: 'Country code in ISO 3166-1 alpha-2 format, e.g. US, IN, etc.',
      },
      email: {
        type: 'string',
      },
      first_name: {
        type: 'string',
      },
      is_default: {
        type: 'boolean',
        description: 'Default address for the customer',
      },
      last_name: {
        type: 'string',
      },
      phone: {
        type: 'string',
        description: 'Phone number in E.164 format',
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
    required: ['customer_id', 'address_line_1', 'city', 'reference_id', 'type'],
    $defs: {
      attribute_request: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
        required: ['name', 'value'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { customer_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.customers.addresses.create(customer_id, body)),
  );
};

export default { metadata, tool, handler };
