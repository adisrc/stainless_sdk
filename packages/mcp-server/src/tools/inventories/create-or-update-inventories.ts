// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'inventories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/inventories',
};

export const tool: Tool = {
  name: 'create_or_update_inventories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate or Update Inventory\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/success'\n    }\n  ],\n  $defs: {\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      inventory_status: {
        type: 'string',
        enum: ['OUT_OF_STOCK', 'IN_STOCK', 'BACK_ORDER'],
      },
      sku: {
        type: 'string',
      },
      available_quantity: {
        type: 'integer',
      },
      back_order_allowed: {
        type: 'boolean',
      },
      back_order_quantity: {
        type: 'integer',
      },
      dynamic_details: {
        type: 'string',
      },
      in_stock_quantity: {
        type: 'integer',
      },
      in_transit_details: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            date: {
              type: 'string',
            },
            identifier: {
              type: 'string',
            },
            quantity: {
              type: 'integer',
            },
          },
          required: ['date', 'identifier', 'quantity'],
        },
      },
      notes: {
        type: 'string',
        description: 'HTML content',
      },
      on_order_details: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            date: {
              type: 'string',
              description: 'Future date',
            },
            identifier: {
              type: 'string',
            },
            quantity: {
              type: 'integer',
            },
          },
          required: ['date', 'identifier', 'quantity'],
        },
      },
      out_of_stock_threshold: {
        type: 'integer',
      },
      reserved_quantity: {
        type: 'integer',
      },
      track_inventory: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['inventory_status', 'sku'],
  },
  annotations: {},
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.inventories.createOrUpdate(body)));
};

export default { metadata, tool, handler };
