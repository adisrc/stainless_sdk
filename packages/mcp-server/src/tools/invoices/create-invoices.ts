// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/invoices',
};

export const tool: Tool = {
  name: 'create_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Invoice\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_create_response',\n  $defs: {\n    invoice_create_response: {\n      allOf: [        {\n          $ref: '#/$defs/success'\n        }\n      ]\n    },\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      due_date: {
        type: 'string',
      },
      invoice_number: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'number',
              description: 'Amount per unit',
            },
            name: {
              type: 'string',
            },
            quantity: {
              type: 'integer',
            },
            reference_id: {
              type: 'string',
            },
            sku: {
              type: 'string',
            },
          },
          required: ['amount', 'name', 'quantity', 'reference_id', 'sku'],
        },
      },
      order_id: {
        type: 'string',
      },
      paid_amount: {
        type: 'number',
      },
      reference_id: {
        type: 'string',
      },
      total_amount: {
        type: 'number',
      },
      created_at: {
        type: 'string',
      },
      remarks: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['PAID', 'UNPAID'],
      },
      updated_at: {
        type: 'string',
        description: 'Updated at must be later than the order creation date',
      },
      url: {
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
      'due_date',
      'invoice_number',
      'items',
      'order_id',
      'paid_amount',
      'reference_id',
      'total_amount',
    ],
  },
  annotations: {},
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.create(body)));
};

export default { metadata, tool, handler };
