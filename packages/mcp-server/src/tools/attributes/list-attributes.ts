// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test_wiz-mcp/filtering';
import { Metadata, asTextContentResult } from 'test_wiz-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TestWiz from 'test_wiz';

export const metadata: Metadata = {
  resource: 'attributes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/attributes',
};

export const tool: Tool = {
  name: 'list_attributes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Attributes\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/attribute_list_response',\n  $defs: {\n    attribute_list_response: {\n      allOf: [        {\n          $ref: '#/$defs/success'\n        }\n      ]\n    },\n    success: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity: {
        type: 'string',
        enum: ['customer', 'address', 'contact', 'order', 'product'],
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
    required: ['entity'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: TestWiz, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.attributes.list(body)));
};

export default { metadata, tool, handler };
