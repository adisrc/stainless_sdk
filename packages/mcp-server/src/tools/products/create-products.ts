// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/products',
};

export const tool: Tool = {
  name: 'create_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Product\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/success'\n    }\n  ],\n  $defs: {\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      group_code: {
        type: 'string',
        description: 'If no grouping is available, the group code will be the sku_id',
      },
      variants: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            product_prices: {
              type: 'array',
              description: 'Prices mapped to price lists',
              items: {
                $ref: '#/$defs/product_price',
              },
            },
            reference_id: {
              type: 'string',
              description:
                'Reference ID for the variant, if no reference id is available, the sku_id should be used',
            },
            sku_id: {
              type: 'string',
            },
            attributes: {
              type: 'array',
              description: 'Key-value pair attributes like size, shape, material, etc.',
              items: {
                $ref: '#/$defs/attribute_request',
              },
            },
            categories: {
              type: 'array',
              description:
                'One or more category names for this variant, in case sub categories are available, the sub categories should be separated by :: eg: "category1::sub_category1::sub_sub_category1" then the category "sub_sub_category1" will be mapped to the product',
              items: {
                type: 'string',
              },
            },
            collections: {
              type: 'array',
              description: 'One or more collection IDs for this variant',
              items: {
                type: 'string',
              },
            },
            is_primary: {
              type: 'boolean',
              description: 'Indicates if this is the primary variant',
            },
            medias: {
              type: 'array',
              description: 'Media assets associated with this variant',
              items: {
                $ref: '#/$defs/product_media',
              },
            },
            priority: {
              type: 'integer',
              description:
                'Determines sort order within the group, if not provided, variants will be sorted by name',
            },
          },
          required: ['name', 'product_prices', 'reference_id', 'sku_id'],
        },
      },
      grouping_attributes: {
        type: 'array',
        description:
          'Ordered list of attribute names used to distinguish and group variants under the same product (e.g., size, then shape).',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['group_code', 'variants'],
    $defs: {
      product_price: {
        type: 'object',
        properties: {
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
        },
        required: ['price_list_id'],
      },
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
      product_media: {
        type: 'object',
        properties: {
          order: {
            type: 'integer',
            description: 'Display order',
          },
          type: {
            type: 'string',
            description: 'Media type (currently supports "image" or "video")',
            enum: ['image'],
          },
          url: {
            type: 'string',
            description: 'Media URL, should be a valid URL with public access',
          },
          is_default: {
            type: 'boolean',
            description: 'Whether this is the default media',
          },
        },
        required: ['order', 'type', 'url'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.products.create(body)));
};

export default { metadata, tool, handler };
