// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'customers.addresses',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/customers/{customer_id}/addresses/{address_id}',
};

export const tool: Tool = {
  name: 'update_customers_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Address\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/address_update_response',\n  $defs: {\n    address_update_response: {\n      allOf: [        {\n          $ref: '#/$defs/success'\n        }\n      ]\n    },\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      address_id: {
        type: 'string',
      },
      address_line_1: {
        type: 'string',
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
      city: {
        type: 'string',
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
      reference_id: {
        type: 'string',
      },
      state: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['billing', 'shipping'],
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
    required: ['customer_id', 'address_id'],
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { address_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.customers.addresses.update(address_id, body)),
  );
};

export default { metadata, tool, handler };
