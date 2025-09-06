// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'product_pricings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/product-pricings/{product_id}',
};

export const tool: Tool = {
  name: 'update_product_pricings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Product Pricing\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/success'\n    }\n  ],\n  $defs: {\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'string',
      },
      price_list_id: {
        type: 'string',
      },
      max_order_quantity: {
        type: 'integer',
        description: 'Maximum quantity allowed per order',
      },
      min_order_quantity: {
        type: 'integer',
        description: 'Minimum quantity allowed per order',
      },
      price: {
        type: 'number',
        description: 'Price for this variant under the given price list',
      },
      step_increment: {
        type: 'integer',
        description: 'Step increment for ordering (e.g., in multiples of 1, 5, etc.)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['product_id', 'price_list_id'],
  },
  annotations: {},
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { product_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.productPricings.update(product_id, body)),
  );
};

export default { metadata, tool, handler };
