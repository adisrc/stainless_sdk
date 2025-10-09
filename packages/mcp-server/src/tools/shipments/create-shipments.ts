// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'shipments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/shipments',
};

export const tool: Tool = {
  name: 'create_shipments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Shipment\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/shipment_create_response',\n  $defs: {\n    shipment_create_response: {\n      allOf: [        {\n          $ref: '#/$defs/success'\n        }\n      ]\n    },\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      created_at: {
        type: 'string',
      },
      order_id: {
        type: 'string',
      },
      reference_id: {
        type: 'string',
      },
      shipment_items: {
        type: 'array',
        items: {
          $ref: '#/$defs/shipment_item_create',
        },
      },
      shipment_status: {
        type: 'string',
        enum: ['shipped', 'created', 'fullfiled'],
      },
      name: {
        type: 'string',
      },
      note: {
        type: 'string',
      },
      tracking_info: {
        $ref: '#/$defs/tracking_info',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['created_at', 'order_id', 'reference_id', 'shipment_items', 'shipment_status'],
    $defs: {
      shipment_item_create: {
        type: 'object',
        properties: {
          product_id: {
            type: 'string',
          },
          quantity: {
            type: 'integer',
          },
        },
        required: ['product_id', 'quantity'],
      },
      tracking_info: {
        type: 'object',
        properties: {
          tracking_number: {
            type: 'string',
          },
          delivery_partner: {
            type: 'string',
          },
          tracking_url: {
            type: 'string',
          },
        },
        required: ['tracking_number'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.shipments.create(body)));
};

export default { metadata, tool, handler };
