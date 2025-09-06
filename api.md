# Attributes

Types:

- <code><a href="./src/resources/attributes.ts">AttributeListResponse</a></code>

Methods:

- <code title="get /v1/attributes">client.attributes.<a href="./src/resources/attributes.ts">list</a>({ ...params }) -> AttributeListResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers/customers.ts">AttributeRequest</a></code>
- <code><a href="./src/resources/customers/customers.ts">AttributeValue</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerDetails</a></code>
- <code><a href="./src/resources/customers/customers.ts">SuccessPagination</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerListResponse</a></code>

Methods:

- <code title="post /v1/customers">client.customers.<a href="./src/resources/customers/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">retrieve</a>(id) -> CustomerRetrieveResponse</code>
- <code title="patch /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">update</a>(id, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /v1/customers">client.customers.<a href="./src/resources/customers/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="delete /v1/customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">delete</a>(id) -> Success</code>

## Addresses

Types:

- <code><a href="./src/resources/customers/addresses.ts">AddressCreate</a></code>
- <code><a href="./src/resources/customers/addresses.ts">AddressDetails</a></code>
- <code><a href="./src/resources/customers/addresses.ts">Success</a></code>
- <code><a href="./src/resources/customers/addresses.ts">AddressCreateResponse</a></code>
- <code><a href="./src/resources/customers/addresses.ts">AddressRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/addresses.ts">AddressUpdateResponse</a></code>
- <code><a href="./src/resources/customers/addresses.ts">AddressListResponse</a></code>

Methods:

- <code title="post /v1/customers/{customer_id}/addresses">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">create</a>(customerID, { ...params }) -> AddressCreateResponse</code>
- <code title="get /v1/customers/{customer_id}/addresses/{address_id}">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">retrieve</a>(addressID, { ...params }) -> AddressRetrieveResponse</code>
- <code title="put /v1/customers/{customer_id}/addresses/{address_id}">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">update</a>(addressID, { ...params }) -> AddressUpdateResponse</code>
- <code title="get /v1/customers/{customer_id}/addresses">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">list</a>(customerID, { ...params }) -> AddressListResponse</code>
- <code title="delete /v1/customers/{customer_id}/addresses/{address_id}">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">delete</a>(addressID, { ...params }) -> Success</code>

## Contacts

Types:

- <code><a href="./src/resources/customers/contacts.ts">ContactCreate</a></code>
- <code><a href="./src/resources/customers/contacts.ts">ContactDetails</a></code>
- <code><a href="./src/resources/customers/contacts.ts">ContactCreateResponse</a></code>
- <code><a href="./src/resources/customers/contacts.ts">ContactRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/contacts.ts">ContactUpdateResponse</a></code>
- <code><a href="./src/resources/customers/contacts.ts">ContactListResponse</a></code>

Methods:

- <code title="post /v1/customers/{customer_id}/contacts">client.customers.contacts.<a href="./src/resources/customers/contacts.ts">create</a>(customerID, { ...params }) -> ContactCreateResponse</code>
- <code title="get /v1/customers/{customer_id}/contacts/{contact_id}">client.customers.contacts.<a href="./src/resources/customers/contacts.ts">retrieve</a>(contactID, { ...params }) -> ContactRetrieveResponse</code>
- <code title="put /v1/customers/{customer_id}/contacts/{contact_id}">client.customers.contacts.<a href="./src/resources/customers/contacts.ts">update</a>(contactID, { ...params }) -> ContactUpdateResponse</code>
- <code title="get /v1/customers/{customer_id}/contacts">client.customers.contacts.<a href="./src/resources/customers/contacts.ts">list</a>(customerID, { ...params }) -> ContactListResponse</code>
- <code title="delete /v1/customers/{customer_id}/contacts/{contact_id}">client.customers.contacts.<a href="./src/resources/customers/contacts.ts">delete</a>(contactID, { ...params }) -> Success</code>

# Inventories

Types:

- <code><a href="./src/resources/inventories.ts">Inventory</a></code>
- <code><a href="./src/resources/inventories.ts">InventoryListResponse</a></code>
- <code><a href="./src/resources/inventories.ts">InventoryCreateOrUpdateResponse</a></code>

Methods:

- <code title="get /v1/inventories">client.inventories.<a href="./src/resources/inventories.ts">list</a>({ ...params }) -> InventoryListResponse</code>
- <code title="post /v1/inventories">client.inventories.<a href="./src/resources/inventories.ts">createOrUpdate</a>({ ...params }) -> InventoryCreateOrUpdateResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceUpdateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="post /v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse</code>
- <code title="get /v1/invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> InvoiceRetrieveResponse</code>
- <code title="put /v1/invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">update</a>(id, { ...params }) -> InvoiceUpdateResponse</code>
- <code title="get /v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>
- <code title="delete /v1/invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">delete</a>(id) -> Success</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">ContainerInfoRequest</a></code>
- <code><a href="./src/resources/orders.ts">ContainerInfoRequestV2</a></code>
- <code><a href="./src/resources/orders.ts">CustomerConsentRequest</a></code>
- <code><a href="./src/resources/orders.ts">CustomerConsentRequestV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderAddressDetailResponseV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderAddressRequest</a></code>
- <code><a href="./src/resources/orders.ts">OrderAddressRequestV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderAddressResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderAddressResponseV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderChargesRequest</a></code>
- <code><a href="./src/resources/orders.ts">OrderChargesRequestV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderContactRequest</a></code>
- <code><a href="./src/resources/orders.ts">OrderContactRequestV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderContactResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderLineItemRequest</a></code>
- <code><a href="./src/resources/orders.ts">OrderLineItemRequestV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponseV2</a></code>
- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderUpdateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderUpdateStatusResponse</a></code>

Methods:

- <code title="post /v2/orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /v2/orders/{id}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(id) -> OrderRetrieveResponse</code>
- <code title="put /v2/orders/{id}">client.orders.<a href="./src/resources/orders.ts">update</a>(id, { ...params }) -> OrderUpdateResponse</code>
- <code title="get /v2/orders">client.orders.<a href="./src/resources/orders.ts">list</a>({ ...params }) -> OrderListResponse</code>
- <code title="patch /v2/orders/{id}/{status}">client.orders.<a href="./src/resources/orders.ts">updateStatus</a>(status, { ...params }) -> OrderUpdateStatusResponse</code>

# PaymentMethods

Types:

- <code><a href="./src/resources/payment-methods.ts">PaymentMethod</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodCreateResponse</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodListResponse</a></code>

Methods:

- <code title="post /v1/payment-methods">client.paymentMethods.<a href="./src/resources/payment-methods.ts">create</a>({ ...params }) -> PaymentMethodCreateResponse</code>
- <code title="get /v1/payment-methods">client.paymentMethods.<a href="./src/resources/payment-methods.ts">list</a>({ ...params }) -> PaymentMethodListResponse</code>
- <code title="delete /v1/payment-methods/{id}">client.paymentMethods.<a href="./src/resources/payment-methods.ts">delete</a>(id) -> Success</code>

# PriceLists

Types:

- <code><a href="./src/resources/price-lists.ts">PriceList</a></code>
- <code><a href="./src/resources/price-lists.ts">PriceListCreateResponse</a></code>
- <code><a href="./src/resources/price-lists.ts">PriceListRetrieveResponse</a></code>
- <code><a href="./src/resources/price-lists.ts">PriceListUpdateResponse</a></code>
- <code><a href="./src/resources/price-lists.ts">PriceListListResponse</a></code>

Methods:

- <code title="post /v1/price-lists">client.priceLists.<a href="./src/resources/price-lists.ts">create</a>({ ...params }) -> PriceListCreateResponse</code>
- <code title="get /v1/price-lists/{id}">client.priceLists.<a href="./src/resources/price-lists.ts">retrieve</a>(id) -> PriceListRetrieveResponse</code>
- <code title="patch /v1/price-lists/{id}">client.priceLists.<a href="./src/resources/price-lists.ts">update</a>(id, { ...params }) -> PriceListUpdateResponse</code>
- <code title="get /v1/price-lists">client.priceLists.<a href="./src/resources/price-lists.ts">list</a>({ ...params }) -> PriceListListResponse</code>
- <code title="delete /v1/price-lists/{id}">client.priceLists.<a href="./src/resources/price-lists.ts">delete</a>(id) -> Success</code>

# ProductPricings

Types:

- <code><a href="./src/resources/product-pricings.ts">ProductPricing</a></code>
- <code><a href="./src/resources/product-pricings.ts">ProductPricingRetrieveResponse</a></code>
- <code><a href="./src/resources/product-pricings.ts">ProductPricingUpdateResponse</a></code>

Methods:

- <code title="get /v1/product-pricings/{product_id}">client.productPricings.<a href="./src/resources/product-pricings.ts">retrieve</a>(productID) -> ProductPricingRetrieveResponse</code>
- <code title="patch /v1/product-pricings/{product_id}">client.productPricings.<a href="./src/resources/product-pricings.ts">update</a>(productID, { ...params }) -> ProductPricingUpdateResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Attribute</a></code>
- <code><a href="./src/resources/products.ts">ProductDetails</a></code>
- <code><a href="./src/resources/products.ts">ProductList</a></code>
- <code><a href="./src/resources/products.ts">ProductMedia</a></code>
- <code><a href="./src/resources/products.ts">ProductMediaResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductPrice</a></code>
- <code><a href="./src/resources/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /v1/products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /v1/products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> ProductRetrieveResponse</code>
- <code title="patch /v1/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /v1/products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListResponse</code>

# SalesReps

Types:

- <code><a href="./src/resources/sales-reps.ts">User</a></code>
- <code><a href="./src/resources/sales-reps.ts">SalesRepListResponse</a></code>

Methods:

- <code title="get /v1/sales-reps">client.salesReps.<a href="./src/resources/sales-reps.ts">list</a>({ ...params }) -> SalesRepListResponse</code>

# Shipments

Types:

- <code><a href="./src/resources/shipments.ts">Shipment</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentItemCreate</a></code>
- <code><a href="./src/resources/shipments.ts">TrackingInfo</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentCreateResponse</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentRetrieveResponse</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentUpdateResponse</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentListResponse</a></code>

Methods:

- <code title="post /v1/shipments">client.shipments.<a href="./src/resources/shipments.ts">create</a>({ ...params }) -> ShipmentCreateResponse</code>
- <code title="get /v1/shipments/{id}">client.shipments.<a href="./src/resources/shipments.ts">retrieve</a>(id) -> ShipmentRetrieveResponse</code>
- <code title="patch /v1/shipments/{id}">client.shipments.<a href="./src/resources/shipments.ts">update</a>(pathID, { ...params }) -> ShipmentUpdateResponse</code>
- <code title="get /v1/shipments">client.shipments.<a href="./src/resources/shipments.ts">list</a>({ ...params }) -> ShipmentListResponse</code>
- <code title="delete /v1/shipments/{id}">client.shipments.<a href="./src/resources/shipments.ts">delete</a>(id) -> Success</code>
