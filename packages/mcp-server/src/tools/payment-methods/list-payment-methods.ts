// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/payment-methods',
};

export const tool: Tool = {
  name: 'list_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList payment methods\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/success_pagination'\n    }\n  ],\n  $defs: {\n    success_pagination: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        },\n        pagination: {\n          type: 'object',\n          properties: {\n            current_page: {\n              type: 'integer'\n            },\n            next_page: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            prev_page: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_records: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      page: {
        type: 'integer',
      },
      page_size: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.paymentMethods.list(body)));
};

export default { metadata, tool, handler };
