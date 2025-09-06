# Test Wiz TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export TEST_WIZ_API_KEY="My API Key"
export TEST_WIZ_ENVIRONMENT="production"
npx -y test_wiz-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "test_wiz_api": {
      "command": "npx",
      "args": ["-y", "test_wiz-mcp", "--client=claude", "--tools=all"],
      "env": {
        "TEST_WIZ_API_KEY": "My API Key",
        "TEST_WIZ_ENVIRONMENT": "production"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------- | ------------------------ | --------------- |
| `X-API-Key` | `apiKey` | ApiKeyAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "test_wiz_api": {
      "url": "http://localhost:3000",
      "headers": {
        "X-API-Key": "My API Key"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "test_wiz-mcp/server";

// import a specific tool
import listAttributes from "test_wiz-mcp/tools/attributes/list-attributes";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listAttributes, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `attributes`:

- `list_attributes` (`read`): List Attributes

### Resource `customers`:

- `create_customers` (`write`): Create Customer
- `retrieve_customers` (`read`): Get Customer
- `update_customers` (`write`): Update Customer
- `list_customers` (`read`): List Customers with pagination
- `delete_customers` (`write`): Delete Customer

### Resource `customers.addresses`:

- `create_customers_addresses` (`write`): Create Address
- `retrieve_customers_addresses` (`read`): Get Address By ID
- `update_customers_addresses` (`write`): Update Address
- `list_customers_addresses` (`read`): List Addresses
- `delete_customers_addresses` (`write`): Delete Address

### Resource `customers.contacts`:

- `create_customers_contacts` (`write`): Create Contact
- `retrieve_customers_contacts` (`read`): Get Contact By ID
- `update_customers_contacts` (`write`): Update Contact
- `list_customers_contacts` (`read`): List Contacts
- `delete_customers_contacts` (`write`): Delete Contact

### Resource `inventories`:

- `list_inventories` (`read`): List Inventories
- `create_or_update_inventories` (`write`): Create or Update Inventory

### Resource `invoices`:

- `create_invoices` (`write`): Create Invoice
- `retrieve_invoices` (`read`): Get Invoice
- `update_invoices` (`write`): Update Invoice
- `list_invoices` (`read`): List Invoices
- `delete_invoices` (`write`): Delete Invoice

### Resource `orders`:

- `create_orders` (`write`): Create order
- `retrieve_orders` (`read`): Get order
- `update_orders` (`write`): Update order
- `list_orders` (`read`): List orders
- `update_status_orders` (`write`): Update order status

### Resource `payment_methods`:

- `create_payment_methods` (`write`): Create payment method
- `list_payment_methods` (`read`): List payment methods
- `delete_payment_methods` (`write`): Delete payment method

### Resource `price_lists`:

- `create_price_lists` (`write`): Create Price List
- `retrieve_price_lists` (`read`): Get Price List By ID
- `update_price_lists` (`write`): Update Price List
- `list_price_lists` (`read`): List Price Lists
- `delete_price_lists` (`write`): Delete Price List

### Resource `product_pricings`:

- `retrieve_product_pricings` (`read`): List Product Pricing
- `update_product_pricings` (`write`): Update Product Pricing

### Resource `products`:

- `create_products` (`write`): Create Product
- `retrieve_products` (`read`): Get Product By ID
- `update_products` (`write`): Update Product
- `list_products` (`read`): List Products

### Resource `sales_reps`:

- `list_sales_reps` (`read`): Get Sales Rep List

### Resource `shipments`:

- `create_shipments` (`write`): Create Shipment
- `retrieve_shipments` (`read`): Get Shipment
- `update_shipments` (`write`): Update Shipment
- `list_shipments` (`read`): List Shipments
- `delete_shipments` (`write`): Delete Shipment
