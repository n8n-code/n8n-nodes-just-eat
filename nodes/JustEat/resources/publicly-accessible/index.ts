import type { INodeProperties } from 'n8n-workflow';

export const publiclyAccessibleDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					]
				}
			},
			"options": [
				{
					"name": "POST Acceptance Requested",
					"value": "POST Acceptance Requested",
					"action": "Acceptance requested",
					"description": "This webhook will be invoked whenever acceptance has been requested for the order.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/acceptance-requested"
						}
					}
				},
				{
					"name": "PUT Attempted Delivery Query Resolved",
					"value": "PUT Attempted Delivery Query Resolved",
					"action": "Attempted delivery query resolved",
					"description": "This webhook will be invoked whenever an attempted delivery query has been resolved.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/attempted-delivery-query-resolved"
						}
					}
				},
				{
					"name": "GET Checkout",
					"value": "GET Checkout",
					"action": "Get Checkout",
					"description": "Get the details required to fulfil an order, which includes:\n  - The restaurant selling the items to be purchased\n  - The customer making the purchase\n  - How, where and when the items will be received by the customer\n  - Instructions about the order\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/checkout/{{$parameter[\"tenant\"]}}/{{$parameter[\"checkoutId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Checkout",
					"value": "PATCH Checkout",
					"action": "Update Checkout",
					"description": "Update the details required to fulfil an order, which includes:\n  - The customer making the purchase\n  - Where and when the items will be received by the customer\n  - Instructions about the order\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/checkout/{{$parameter[\"tenant\"]}}/{{$parameter[\"checkoutId\"]}}"
						}
					}
				},
				{
					"name": "GET Checkout Fulfilment Availabletimes",
					"value": "GET Checkout Fulfilment Availabletimes",
					"action": "Get Available Fulfilment Times",
					"description": "Gets a collection of times for when an order can be fulfilled.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/checkout/{{$parameter[\"tenant\"]}}/{{$parameter[\"checkoutId\"]}}/fulfilment/availabletimes"
						}
					}
				},
				{
					"name": "GET Consumers",
					"value": "GET Consumers",
					"action": "Get consumers details",
					"description": "Currently this operation only supports retrieving a count of consumer accounts given an email address.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "POST Consumers",
					"value": "POST Consumers",
					"action": "Create consumer",
					"description": "Creates a consumer for the given tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "GET Consumers Me Communication Preferences",
					"value": "GET Consumers Me Communication Preferences",
					"action": "Get communication preferences",
					"description": "Get all communication preferences for a given consumer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences"
						}
					}
				},
				{
					"name": "PUT Consumers Me Communication Preferences",
					"value": "PUT Consumers Me Communication Preferences",
					"action": "Set only the channel subscriptions for a given consumer's communication preference type",
					"description": "Set only the channel subscriptions for a given consumer's communication preference type. E.g., An empty list of subscribed Channels implies unsubscribe from all channels.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "DELETE Consumers Me Communication Preferences Subscribed Channels",
					"value": "DELETE Consumers Me Communication Preferences Subscribed Channels",
					"action": "Remove subscription of a specific communication preference channel",
					"description": "Remove subscription of a specific communication preference channel.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences/{{$parameter[\"type\"]}}/subscribedChannels/{{$parameter[\"channel\"]}}"
						}
					}
				},
				{
					"name": "POST Consumers Me Communication Preferences Subscribed Channels",
					"value": "POST Consumers Me Communication Preferences Subscribed Channels",
					"action": "Subscribe to a specific communication preference channel",
					"description": "Subscribe to a specific communication preference channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences/{{$parameter[\"type\"]}}/subscribedChannels/{{$parameter[\"channel\"]}}"
						}
					}
				},
				{
					"name": "PUT Delivery Failed",
					"value": "PUT Delivery Failed",
					"action": "Delivery Attempt Failed",
					"description": "This webhook will be invoked whenever an attempted delivery event is created from the device.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery-failed"
						}
					}
				},
				{
					"name": "GET Delivery Fees",
					"value": "GET Delivery Fees",
					"action": "Get restaurant delivery fees",
					"description": "Retrieve delivery fees for many restaurants. Returns fees and minimum order values required for delivery orders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/delivery-fees/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "GET Delivery Pools",
					"value": "GET Delivery Pools",
					"action": "Get your delivery pools",
					"description": "A delivery pool is a named group of drivers which deliver food for a set of restaurants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/delivery/pools"
						}
					}
				},
				{
					"name": "POST Delivery Pools",
					"value": "POST Delivery Pools",
					"action": "Create a new delivery pool",
					"description": "A delivery pool is a named group of drivers which deliver food for a set of restaurants.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/delivery/pools"
						}
					}
				},
				{
					"name": "DELETE Delivery Pools",
					"value": "DELETE Delivery Pools",
					"action": "Delete a delivery pool",
					"description": "The restaurants will no longer be associated with the pool.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Delivery Pools",
					"value": "PATCH Delivery Pools",
					"action": "Modify a delivery pool",
					"description": "Modify a delivery pool, changing its name, restaurants or both",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}"
						}
					}
				},
				{
					"name": "PUT Delivery Pools",
					"value": "PUT Delivery Pools",
					"action": "Replace an existing delivery pool",
					"description": "Replace an existing delivery pool changing all of its properties",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}"
						}
					}
				},
				{
					"name": "GET Delivery Pools Availability Relative",
					"value": "GET Delivery Pools Availability Relative",
					"action": "Get availability for pickup",
					"description": "Get the current amount of time it will take a driver to collect a new order from a restaurant in the pool.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/availability/relative"
						}
					}
				},
				{
					"name": "PUT Delivery Pools Availability Relative",
					"value": "PUT Delivery Pools Availability Relative",
					"action": "Set availability for pickup",
					"description": "Set the average amount of time it will take a driver to collect a new order from a restaurant in the pool.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/availability/relative"
						}
					}
				},
				{
					"name": "PUT Delivery Pools Hours",
					"value": "PUT Delivery Pools Hours",
					"action": "Set the delivery pools daily start and end times",
					"description": "Set the daily start and end times for a pool or set closed flag if the pool does not operate on that day. Start and end times for all days must be provided. Though the API accepts array of start and end times for each day, multiple start and end time for a day are not accepted. If the end time for a day is equal to or before start time, end time will be considered as time for the next day.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/hours"
						}
					}
				},
				{
					"name": "DELETE Delivery Pools Restaurants",
					"value": "DELETE Delivery Pools Restaurants",
					"action": "Remove restaurants from a delivery pool",
					"description": "Remove restaurants from a delivery pool",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/restaurants"
						}
					}
				},
				{
					"name": "PUT Delivery Pools Restaurants",
					"value": "PUT Delivery Pools Restaurants",
					"action": "Add restaurants to an existing delivery pool",
					"description": "Add additional restaurants to a delivery pool",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/restaurants"
						}
					}
				},
				{
					"name": "PUT Driver Assigned To Delivery",
					"value": "PUT Driver Assigned To Delivery",
					"action": "Driver Assigned to Delivery",
					"description": "Driver Assigned to Delivery",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-assigned-to-delivery"
						}
					}
				},
				{
					"name": "PUT Driver At Delivery Address",
					"value": "PUT Driver At Delivery Address",
					"action": "Driver at delivery address",
					"description": "Driver at delivery address",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-at-delivery-address"
						}
					}
				},
				{
					"name": "PUT Driver At Restaurant",
					"value": "PUT Driver At Restaurant",
					"action": "Driver at restaurant",
					"description": "Driver at restaurant",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-at-restaurant"
						}
					}
				},
				{
					"name": "PUT Driver Has Delivered Order",
					"value": "PUT Driver Has Delivered Order",
					"action": "Driver has delivered order",
					"description": "Driver has delivered order",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-has-delivered-order"
						}
					}
				},
				{
					"name": "PUT Driver Location",
					"value": "PUT Driver Location",
					"action": "Driver Location",
					"description": "Driver Location",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-location"
						}
					}
				},
				{
					"name": "PUT Driver On Their Way To Delivery Address",
					"value": "PUT Driver On Their Way To Delivery Address",
					"action": "Driver on their way to delivery address",
					"description": "Driver on their way to delivery address",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-on-their-way-to-delivery-address"
						}
					}
				},
				{
					"name": "POST Late Order Compensation Query",
					"value": "POST Late Order Compensation Query",
					"action": "late order compensation query, restaurant response required",
					"description": "This webhook will be invoked when a late order compensation query has been raised and a restaurant response is required.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/late-order-compensation-query"
						}
					}
				},
				{
					"name": "POST Late Order Query",
					"value": "POST Late Order Query",
					"action": "late order query, restaurant response required",
					"description": "This webhook will be invoked when a late order query has been raised and a restaurant response is required.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/late-order-query"
						}
					}
				},
				{
					"name": "POST Menu Ingestion Complete",
					"value": "POST Menu Ingestion Complete",
					"action": "Menu ingestion complete",
					"description": "Callback to confirm that an attempt to ingest a menu has completed either successfully or unsuccessfully",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/menu-ingestion-complete"
						}
					}
				},
				{
					"name": "POST Order Accepted",
					"value": "POST Order Accepted",
					"action": "Order accepted",
					"description": "This webhook will be invoked whenever the order was accepted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-accepted"
						}
					}
				},
				{
					"name": "POST Order Cancelled",
					"value": "POST Order Cancelled",
					"action": "Order cancelled",
					"description": "This webhook will be invoked whenever the order was cancelled.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-cancelled"
						}
					}
				},
				{
					"name": "POST Order Eligible For Restaurant Compensation",
					"value": "POST Order Eligible For Restaurant Compensation",
					"action": "Order Eligible For Restaurant Compensation",
					"description": "This webhook will be invoked for every cancelled order and it will inform if the order is eligible for compensation.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-eligible-for-restaurant-compensation"
						}
					}
				},
				{
					"name": "PUT Order Is Ready For Pickup",
					"value": "PUT Order Is Ready For Pickup",
					"action": "Order ready for pickup",
					"description": "<p>The \"Ready for pickup\" event lets the delivery partner know that the food has been cooked and is now ready for collection up from the restaurant.</p><p>When this event is received, it is important that you let your driver know that the order should now be collected from inside the restaurant. For example, this driver notification could take the form of an in-app notification or an SMS message.</p><p>This communication is needed to support restaurants who are unable to accommodate drivers inside their premises, as it allows restaurants to notify drivers waiting outside that they should come inside to collect their order.</p><p>NB&semi; This event can be sent by the restaurant at any point after the order is accepted by the restaurant (for instance, this event may be sent before the driver has arrived at the restaurant).</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/order-is-ready-for-pickup"
						}
					}
				},
				{
					"name": "POST Order Ready For Preparation Async",
					"value": "POST Order Ready For Preparation Async",
					"action": "Order ready for preparation (async)",
					"description": "This webhook will be invoked when we have determined that an order is ready for preparation. Upon receiving the request, you should perform any preparation-related activities, such as sending the order to the POS system / kitchen screen.\n**NOTE:** This version of the webhook is asynchronous, and we expect a response in two parts:\n  1. We expect an immediate `202` response from this webhook to denote that you have received the request;\n  2. Following that, we expect an [async callback](#section/Async-Webhooks) - indicating either success or failure of the operation. The body for the async callbacks are as below:\n  \n  **Success callback**\n  ```\n  {\n        \"status\": \"Success\",\n        \"message\": \"Order successfully sent to POS\",\n        \"data\": {}\n  }\n  ```\n  **Failure callback**\n  ```\n  {\n        \"status\": \"Failure\",\n        \"message\": \"{errorMessage}\",   // e.g. \"The POS is currently in use\"\n        \"data\": {}\n  }\n  ```\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-ready-for-preparation-async"
						}
					}
				},
				{
					"name": "POST Order Ready For Preparation Sync",
					"value": "POST Order Ready For Preparation Sync",
					"action": "Order ready for preparation (sync)",
					"description": "This webhook will be invoked when we have determined that an order is ready for preparation. Upon receiving the request, you should perform any preparation-related activities, such as sending the order to the POS system / kitchen screen.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-ready-for-preparation-sync"
						}
					}
				},
				{
					"name": "POST Order Rejected",
					"value": "POST Order Rejected",
					"action": "Order rejected",
					"description": "This webhook will be invoked whenever the order was rejected.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-rejected"
						}
					}
				},
				{
					"name": "PUT Order Requires Delivery Acceptance",
					"value": "PUT Order Requires Delivery Acceptance",
					"action": "Order requires delivery acceptance",
					"description": "This webhook will be invoked when we have determined that an order is required acceptance for delivery. Upon receiving the request, the order should be scheduled for pickup by a courier/driver. We expect an immediate `201` response from this webhook to denote that you have received the request.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/order-requires-delivery-acceptance"
						}
					}
				},
				{
					"name": "POST Order Time Updated",
					"value": "POST Order Time Updated",
					"action": "Order time updated",
					"description": "Callback to notify recipients that there has been a change to the restaurant order times for a given day and service type",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-time-updated"
						}
					}
				},
				{
					"name": "POST Orders",
					"value": "POST Orders",
					"action": "Create order",
					"description": "Create order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Driverlocation",
					"value": "PUT Orders Deliverystate Driverlocation",
					"action": "Update current driver locations (bulk upload)",
					"description": "Current driver location (bulk upload)",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/deliverystate/driverlocation"
						}
					}
				},
				{
					"name": "PUT Orders Accept",
					"value": "PUT Orders Accept",
					"action": "Accept order",
					"description": "Call when an order has been accepted. An order can only be accepted if it hasn't previously been accepted, rejected, cancelled or ignored",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/accept"
						}
					}
				},
				{
					"name": "PUT Orders Cancel",
					"value": "PUT Orders Cancel",
					"action": "Cancel order",
					"description": "Call when an order has been cancelled by Ops. Cancelling an order overrides any previous accept/reject calls. This should not be used for restaurant rejection but only from Ops involvement",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/cancel"
						}
					}
				},
				{
					"name": "POST Orders Complete",
					"value": "POST Orders Complete",
					"action": "Complete order",
					"description": "Call when an order is complete. An order can only be marked as complete if it hasn't already been marked as cancelled or complete.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/complete"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Atdeliveryaddress",
					"value": "PUT Orders Deliverystate Atdeliveryaddress",
					"action": "Update order with driver at delivery address details",
					"description": "<p>The _at delivery address_ callback should be sent when the driver thinks that they have arrived at the specified delivery address.</p><p>NB&semi; This callback should be distinct from the delivered callback, as Just Eat use this callback to understand how much time is spent locating the customer's address.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/deliverystate/atdeliveryaddress"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Atrestaurant",
					"value": "PUT Orders Deliverystate Atrestaurant",
					"action": "Update order with driver at restaurant details",
					"description": "The _at restaurant_ callback should be sent when the driver arrives at the restaurant and is ready to collect the order.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/deliverystate/atrestaurant"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Atrestauranteta",
					"value": "PUT Orders Deliverystate Atrestauranteta",
					"action": "Update the driver's estimated time to arrive at the Restaurant",
					"description": "<p>In the UK, this endpoint updates the estimated arrival time at the restaurant. This value can be overridden from other endpoints like <a href=\"https://uk.api.just-eat.io/docs#tag/Order-Delivery-API/paths/~1orders~1{orderId}~1deliverystate~1driverlocation/put\">Driver Locations</a> </p> <p> This endpoint should be used to set initial at restaurant ETAs prior to driver assignment where available. The earlier a delivery partner is able to provide an estimate of when the driver will arrive at the restaurant the more likely it is that driver arrival and order preparation will be aligned. </p> <p> In other tenants (Not UK):Note that if set for a given order, this Eta will NOT be overridden by any other at restaurant ETAs provided in `DriverAssigned` or `DriverLocation` requests</p> <p>This value is significant since it informs when a restaurant is instructed to start preparing food. When the time remaining between current time and the estimated time of arrival becomes less than the restaurant's configured preparation time, food preparation is initiated</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/deliverystate/atrestauranteta"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Delivered",
					"value": "PUT Orders Deliverystate Delivered",
					"action": "Update order with delivered details",
					"description": "The _delivered_ callback should be sent when the driver has handed the food to the customer and completed the order.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/deliverystate/delivered"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Driverassigned",
					"value": "PUT Orders Deliverystate Driverassigned",
					"action": "Update order with driver assigned details",
					"description": "The _driver assigned_ callback should be sent when a driver is assigned to the order. It should communicate important details about the driver - and also an estimated time for the driver to arrive at the restaurant and delivery address.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/deliverystate/driverassigned"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Driverunassigned",
					"value": "PUT Orders Deliverystate Driverunassigned",
					"action": "Update order with driver unassigned details",
					"description": "The _driver unassigned_ callback should be sent when a driver is unassigned from the order. It may details about the reason for cancelling the assignment, the driver details, and any newer at restaurant and customer estimations.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/deliverystate/driverunassigned"
						}
					}
				},
				{
					"name": "PUT Orders Deliverystate Onitsway",
					"value": "PUT Orders Deliverystate Onitsway",
					"action": "Update order with driver on its way details",
					"description": "The _on its way_ callback should be sent when the driver departs the restaurant with the customer's order. It should contain an ETA that records when the driver expects to arrive at the customer's address.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/deliverystate/onitsway"
						}
					}
				},
				{
					"name": "PUT Orders Duedate",
					"value": "PUT Orders Duedate",
					"action": "Update order ETA",
					"description": "Use this to update the estimated time of arrival for an order (i.e. when you expect the customer to receive the food). NOTE: An initial estimate is given [upon acceptance](#/paths/~1orders~1{orderId}~1accept/put). This endpoint can be used to update that estimate.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/duedate"
						}
					}
				},
				{
					"name": "PUT Orders Ignore",
					"value": "PUT Orders Ignore",
					"action": "Ignore order",
					"description": "Call when an order has been ignored by restaurant. An order can only be ignored if it hasn't previously been accepted, rejected, cancelled or ignored",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/ignore"
						}
					}
				},
				{
					"name": "POST Orders Readyforcollection",
					"value": "POST Orders Readyforcollection",
					"action": "Mark order as ready for collection",
					"description": "Call when a collection order is ready to be collected by the customer. An order can only be marked as ready for collection if it is a collection order in the accepted state.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/readyforcollection"
						}
					}
				},
				{
					"name": "PUT Orders Reject",
					"value": "PUT Orders Reject",
					"action": "Reject order",
					"description": "Call when an order has been rejected. An order can only be rejected if it hasn't previously been accepted, rejected, cancelled or ignored",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/reject"
						}
					}
				},
				{
					"name": "POST Orders Consumerqueries Lateorder Restaurantresponse",
					"value": "POST Orders Consumerqueries Lateorder Restaurantresponse",
					"action": "Response to Late Order Update Request",
					"description": "If a customer has requested an update on the status of a late order, a response can be given by calling this endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"tenant\"]}}/{{$parameter[\"orderId\"]}}/consumerqueries/lateorder/restaurantresponse"
						}
					}
				},
				{
					"name": "POST Orders Consumerqueries Lateordercompensation Restaurantresponse",
					"value": "POST Orders Consumerqueries Lateordercompensation Restaurantresponse",
					"action": "Update late order compensation request with Restaurant response",
					"description": "If a customer has requested compensation for a late order, a restaurant response is given by calling this endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"tenant\"]}}/{{$parameter[\"orderId\"]}}/consumerqueries/lateordercompensation/restaurantresponse"
						}
					}
				},
				{
					"name": "POST Orders Restaurantqueries Compensation",
					"value": "POST Orders Restaurantqueries Compensation",
					"action": "Create Compensation requests",
					"description": "When an order is cancelled the restaurant might be eligible for compensation, this endpoint allows a request for compensation to be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"tenant\"]}}/{{$parameter[\"orderId\"]}}/restaurantqueries/compensation"
						}
					}
				},
				{
					"name": "PUT Redelivery Requested",
					"value": "PUT Redelivery Requested",
					"action": "Customer Requested Redelivery",
					"description": "This webhook will be invoked whenever the customer responds to the attempted delivery notification.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/redelivery-requested"
						}
					}
				},
				{
					"name": "PUT Restaurant Offline Status",
					"value": "PUT Restaurant Offline Status",
					"action": "Restaurant Offline Status",
					"description": "Callback to notify that a restaurant has been taken offline through an active Restaurant Event or there's been a change in whether the restaurant can override a previous offline status.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurant-offline-status"
						}
					}
				},
				{
					"name": "PUT Restaurant Online Status",
					"value": "PUT Restaurant Online Status",
					"action": "Restaurant Online Status",
					"description": "Callback to notify that a restaurant is now able to come back online as there are no longer any active offline Restaurant Events",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurant-online-status"
						}
					}
				},
				{
					"name": "Search By Location",
					"value": "Search By Location",
					"action": "Get restaurants by location",
					"description": "Provides details of all restaurants that deliver to the specified location",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/bylatlong"
						}
					}
				},
				{
					"name": "Search By Postcode",
					"value": "Search By Postcode",
					"action": "Get restaurants by postcode",
					"description": "Provides details of restaurants that deliver to the specified postcode",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/bypostcode/{{$parameter[\"postcode\"]}}"
						}
					}
				},
				{
					"name": "PUT Restaurants Driver Eta",
					"value": "PUT Restaurants Driver Eta",
					"action": "Set ETA for pickup",
					"description": "Set the average amount of time it will take a driver to collect a new order from a restaurant.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/driver/eta"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue",
					"value": "GET Restaurants Catalogue",
					"action": "Get product catalogue",
					"description": "Get details of the restaurant's product catalogue",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Availabilities",
					"value": "GET Restaurants Catalogue Availabilities",
					"action": "Get all availabilities",
					"description": "Get all availabilities on the restaurant's menu",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/availabilities"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Categories",
					"value": "GET Restaurants Catalogue Categories",
					"action": "Get all categories",
					"description": "Get all categories on the restaurant's menu",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/categories"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Categories Items",
					"value": "GET Restaurants Catalogue Categories Items",
					"action": "Get all category item IDs",
					"description": "Get all item IDs which are assigned to the specified category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/categories/{{$parameter[\"categoryId\"]}}/items"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items",
					"value": "GET Restaurants Catalogue Items",
					"action": "Get all menu items",
					"description": "Get all menu items on the restaurant's menu",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Dealgroups",
					"value": "GET Restaurants Catalogue Items Dealgroups",
					"action": "Get all menu item deal groups",
					"description": "Get all deal groups for the menu item with the provided ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/dealgroups"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Dealgroups Dealitemvariations",
					"value": "GET Restaurants Catalogue Items Dealgroups Dealitemvariations",
					"action": "Get all deal item variations for a deal group",
					"description": "Get all deal item variations for the deal group with the specified ID, in the menu item with the specified ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/dealgroups/{{$parameter[\"dealGroupId\"]}}/dealitemvariations"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Modifiergroups",
					"value": "GET Restaurants Catalogue Items Modifiergroups",
					"action": "Get all menu item modifier groups",
					"description": "Get all modifier groups for the menu item with the provided ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/modifiergroups"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Variations",
					"value": "GET Restaurants Catalogue Items Variations",
					"action": "Get all menu item variations",
					"description": "Get all variations for the menu item with the provided ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/variations"
						}
					}
				},
				{
					"name": "GET Restaurants Customerclaims",
					"value": "GET Restaurants Customerclaims",
					"action": "Get claims",
					"description": "Provides claims for a given restaurant with optional filtering",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/customerclaims"
						}
					}
				},
				{
					"name": "POST Restaurants Customerclaims Restaurantresponse",
					"value": "POST Restaurants Customerclaims Restaurantresponse",
					"action": "Submit a restaurant response for the claim",
					"description": "Submit a restaurant response for the claim, where the restaurant can tell us if they accept or reject the claim",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/customerclaims/{{$parameter[\"id\"]}}/restaurantresponse"
						}
					}
				},
				{
					"name": "PUT Restaurants Customerclaims Restaurantresponse Justification",
					"value": "PUT Restaurants Customerclaims Restaurantresponse Justification",
					"action": "Add reason and comments to the response",
					"description": "Add reason and optional comments in case of rejection of order claim",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/customerclaims/{{$parameter[\"id\"]}}/restaurantresponse/justification"
						}
					}
				},
				{
					"name": "GET Restaurants Fees",
					"value": "GET Restaurants Fees",
					"action": "Get Restaurant Fees",
					"description": "Get the fees currently applied to a restaurant in a particular tenant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/fees"
						}
					}
				},
				{
					"name": "PUT Restaurants Fees",
					"value": "PUT Restaurants Fees",
					"action": "Create or Update Restaurant Fees",
					"description": "Creates or Updates the fees for a restaurant in a particular tenant",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/fees"
						}
					}
				},
				{
					"name": "GET Restaurants Menu",
					"value": "GET Restaurants Menu",
					"action": "Get the latest version of the restaurant's full menu",
					"description": "The endpoint will return a 301 redirect containing a URL that will grant access to the Menu file. The URL will only be available for a short period of time. The Menu file will be a single document containing the information that Just Eat has and uses to display the Menu on our customer clients. This will include a collection of items, a collection of Categories and a collection of Availabilities for when the items are available. Partners will be able to retrieve the Menu for any Restaurants that they currently manage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/menu"
						}
					}
				},
				{
					"name": "Put Menu For Ingestion",
					"value": "Put Menu For Ingestion",
					"action": "Create or update a menu",
					"description": "This will begin an asynchronous process that will lead to that menu becoming live on the Just Eat platform",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/menu"
						}
					}
				},
				{
					"name": "Get Order Times",
					"value": "Get Order Times",
					"action": "Get the restaurant's delivery and collection lead times",
					"description": "Get list of the delivery and collection lead times supplied by the restaurant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/ordertimes"
						}
					}
				},
				{
					"name": "Update Order Time",
					"value": "Update Order Time",
					"action": "Update the restaurant's delivery and collection lead times",
					"description": "Update the restaurant's delivery and collection lead times",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/ordertimes/{{$parameter[\"dayOfWeek\"]}}/{{$parameter[\"serviceType\"]}}"
						}
					}
				},
				{
					"name": "Get Restaurant Service Times",
					"value": "Get Restaurant Service Times",
					"action": "Get service times",
					"description": "Gets the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/servicetimes"
						}
					}
				},
				{
					"name": "Put Restaurant Service Times",
					"value": "Put Restaurant Service Times",
					"action": "Create or update service times",
					"description": "Creates or updates the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/servicetimes"
						}
					}
				},
				{
					"name": "GET Search Autocomplete",
					"value": "GET Search Autocomplete",
					"action": "Get auto-completed search terms",
					"description": "Provides auto-completed search terms for restaurants, cuisines and products available in a given location.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/autocomplete/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "GET Search Restaurants",
					"value": "GET Search Restaurants",
					"action": "Search restaurants",
					"description": "Get restaurants available in a given lat-long which match a search term.\r\nMatches can be found against the name, a cuisine or a product.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/restaurants/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "POST Send To Pos Failed",
					"value": "POST Send To Pos Failed",
					"action": "Send to POS failed",
					"description": "This webhook will be invoked if we experience an error or timeout in sending an order to the underlying POS / kitchen screen. When notified via this webhook, typically you will perform some form of alerting or backup flow (e.g. ask the operator to enter the order manually into the POS). NOTE: This message contains the `OrderId`, but not the full order. It is assumed that you have stored/cached the full order details earlier in the flow - e.g. via the [/order-ready-for-preparation](#/paths/~1order-ready-for-preparation-sync/post) webhook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/send-to-pos-failed"
						}
					}
				},
				{
					"name": "POST v1 Restaurants Event Offline",
					"value": "POST v1 Restaurants Event Offline",
					"action": "Create Offline Event",
					"description": "Creates an event for the specified restaurants that indicates a reason for those restaurants to be offline.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/{{$parameter[\"tenant\"]}}/restaurants/event/offline"
						}
					}
				},
				{
					"name": "DELETE v1 Restaurants Event Offline",
					"value": "DELETE v1 Restaurants Event Offline",
					"action": "Delete Offline Event",
					"description": "Removes specified restaurant from offline events. If role header is `System` or `Operations` only events created by the specified role will be affected. If role header is `Restaurant` then all events that have `allowRestaurantOverride=true` will be affected.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/{{$parameter[\"tenant\"]}}/restaurants/{{$parameter[\"id\"]}}/event/offline"
						}
					}
				},
				{
					"name": "POST Orders Queries Attempteddelivery",
					"value": "POST Orders Queries Attempteddelivery",
					"action": "Delivery Attempt Failed",
					"description": "If the customer hasn't answered the door to collect the order, then an attempted delivery event can be created using this endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"tenant\"]}}/orders/{{$parameter[\"orderId\"]}}/queries/attempteddelivery"
						}
					}
				},
				{
					"name": "POST Orders Queries Attempteddelivery Resolution Redeliverorder",
					"value": "POST Orders Queries Attempteddelivery Resolution Redeliverorder",
					"action": "Request Redelivery of the Order",
					"description": "If the customer responds, then you can trigger the redelivery of an order through this endpoint",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"tenant\"]}}/orders/{{$parameter[\"orderId\"]}}/queries/attempteddelivery/resolution/redeliverorder"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /acceptance-requested",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "Currency",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Customer",
			"name": "Customer",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "Customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Customer Notes",
			"name": "CustomerNotes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "CustomerNotes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Friendly Order Reference",
			"name": "FriendlyOrderReference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "FriendlyOrderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Fulfilment",
			"name": "Fulfilment",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {},\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Fulfilment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Is Test",
			"name": "IsTest",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsTest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "Items",
			"type": "json",
			"default": "[\n  {\n    \"Items\": [\n      {\n        \"Items\": {}\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "Items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Payment",
			"name": "Payment",
			"type": "json",
			"default": "{\n  \"Lines\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "Payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Placed Date",
			"name": "PlacedDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "PlacedDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Price Breakdown",
			"name": "PriceBreakdown",
			"type": "json",
			"default": "{\n  \"Fees\": {}\n}",
			"routing": {
				"send": {
					"property": "PriceBreakdown",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Restaurant",
			"name": "Restaurant",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {},\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Restaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Restrictions",
			"name": "Restrictions",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "This is a list of types of restricted items contained in the order.",
			"routing": {
				"send": {
					"property": "Restrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Total Price",
			"name": "TotalPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "TotalPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "PUT /attempted-delivery-query-resolved",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Attempted Delivery Query Resolved"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"description": "The ID of the order for which an attempted delivery query has been resolved",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Attempted Delivery Query Resolved"
					]
				}
			}
		},
		{
			"displayName": "Resolution",
			"name": "Resolution",
			"type": "json",
			"default": "{\n  \"Cancellation\": {},\n  \"Redelivery\": {}\n}",
			"description": "Details of the resolution to the query",
			"routing": {
				"send": {
					"property": "Resolution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Attempted Delivery Query Resolved"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "options",
			"default": "uk",
			"description": "The tenant of the restaurant the order was placed at",
			"options": [
				{
					"name": "Uk",
					"value": "uk"
				},
				{
					"name": "Dk",
					"value": "dk"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Ie",
					"value": "ie"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Au",
					"value": "au"
				},
				{
					"name": "Nz",
					"value": "nz"
				}
			],
			"routing": {
				"send": {
					"property": "Tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Attempted Delivery Query Resolved"
					]
				}
			}
		},
		{
			"displayName": "GET /checkout/{tenant}/{checkoutId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "Checkout ID",
			"name": "checkoutId",
			"required": true,
			"description": "A unique identifier for a checkout. This is currently a Basket Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "PATCH /checkout/{tenant}/{checkoutId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Checkout ID",
			"name": "checkoutId",
			"required": true,
			"description": "A unique identifier for a checkout. This is currently a Basket Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Customer",
			"name": "customer",
			"type": "json",
			"default": "{}",
			"description": "Details of the customer making the purchase.",
			"routing": {
				"send": {
					"property": "customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Fulfilment",
			"name": "fulfilment",
			"type": "json",
			"default": "{\n  \"location\": {\n    \"address\": {\n      \"lines\": [\n        null\n      ]\n    },\n    \"geolocation\": {}\n  },\n  \"time\": {\n    \"scheduled\": {}\n  }\n}",
			"description": "How and when the items will be received by the customer.",
			"routing": {
				"send": {
					"property": "fulfilment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Instructions about the order that the customer wants to submit.",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "GET /checkout/{tenant}/{checkoutId}/fulfilment/availabletimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
		{
			"displayName": "Checkout ID",
			"name": "checkoutId",
			"required": true,
			"description": "A unique identifier for a checkout. This is currently a Basket Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
		{
			"displayName": "GET /consumers/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Email Address",
			"name": "emailAddress",
			"required": true,
			"description": "Email address of the consumer.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "emailAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "accountType",
			"required": true,
			"description": "The account type of the consumer - currently only 'registered' accounts are supported.",
			"default": "registered",
			"type": "options",
			"options": [
				{
					"name": "Registered",
					"value": "registered"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "accountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"required": true,
			"description": "Returns the number of consumers that matches the `emailAddress` and `accountType`. The query value should be empty, e.g. `/consumers/uk/?emailAddress=someone@email.com&accountType=registered&count`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "POST /consumers/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant. The only supported tenants are `uk`, `au` and `nz`",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email Address",
			"name": "emailAddress",
			"type": "string",
			"default": "",
			"description": "The consumer's email address",
			"routing": {
				"send": {
					"property": "emailAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "",
			"description": "The consumer's first name",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "",
			"description": "The consumer's last name",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Marketing Preferences",
			"name": "marketingPreferences",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The selected marketing preferences for the consumer",
			"routing": {
				"send": {
					"property": "marketingPreferences",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "The consumer's password",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Registration Source",
			"name": "registrationSource",
			"type": "options",
			"default": "Native",
			"description": "The registration source of the consumer. Australia and New Zealand only support Guest",
			"options": [
				{
					"name": "Native",
					"value": "Native"
				},
				{
					"name": "Guest",
					"value": "Guest"
				}
			],
			"routing": {
				"send": {
					"property": "registrationSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "GET /consumers/{tenant}/me/communication-preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumers/{tenant}/me/communication-preferences/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of communication preferences.",
			"default": "marketing",
			"type": "options",
			"options": [
				{
					"name": "Marketing",
					"value": "marketing"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "Subscribed Channels",
			"name": "subscribedChannels",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of channels that the consumer should only be subscribed to.",
			"routing": {
				"send": {
					"property": "subscribedChannels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "DELETE /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of communication preference.",
			"default": "marketing",
			"type": "options",
			"options": [
				{
					"name": "Marketing",
					"value": "marketing"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"required": true,
			"description": "The channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of communication preferences.",
			"default": "marketing",
			"type": "options",
			"options": [
				{
					"name": "Marketing",
					"value": "marketing"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"required": true,
			"description": "The channel.",
			"default": "email",
			"type": "options",
			"options": [
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Sms",
					"value": "sms"
				},
				{
					"name": "Push",
					"value": "push"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery-failed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Failed"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"description": "The id of the order",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Failed"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "Reason",
			"type": "string",
			"default": "",
			"description": "The reason for creating the attempted delivery",
			"routing": {
				"send": {
					"property": "Reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Failed"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "RestaurantId",
			"type": "number",
			"default": 0,
			"description": "The id of the restaurant",
			"routing": {
				"send": {
					"property": "RestaurantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Failed"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "string",
			"default": "",
			"description": "The tenant associated with the order",
			"routing": {
				"send": {
					"property": "Tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Failed"
					]
				}
			}
		},
		{
			"displayName": "GET /delivery-fees/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Tenant containing the restaurants.",
			"default": "uk",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Restaurant Ids",
			"name": "restaurantIds",
			"required": true,
			"description": "Restaurant IDs which fees are requested for. e.g. `?restaurantIds=1,2,3,4`",
			"default": [
				"1",
				"2",
				"3",
				"4"
			],
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "restaurantIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Delivery Time",
			"name": "deliveryTime",
			"required": true,
			"description": "Delivery date/time when fees are required (ISO8601 format).",
			"default": "2019-09-05T12:43:48.431Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deliveryTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Zone",
			"name": "zone",
			"description": "Postcode or other location name identifying the location to which delivery is required. For use when precise location is not available. This will be removed in future in favour of location.",
			"default": "BS1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "zone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Latlong",
			"name": "latlong",
			"description": "Point to which delivery is required (latitude, longitude). Supply this where possible as support for zone-only based lookups will be removed in future.",
			"default": [
				51.3851513,
				-2.0841275
			],
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "latlong",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "GET /delivery/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "POST /delivery/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Delivery Pools"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the pool, used by operations teams, in reports, etc.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "DELETE /delivery/pools/{deliveryPoolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "PATCH /delivery/pools/{deliveryPoolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the pool, used by operations teams, in reports, etc.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PATCH Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the pool, used by operations teams, in reports, etc.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /delivery/pools/{deliveryPoolId}/availability/relative",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Delivery Pools Availability Relative"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}/availability/relative",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Availability Relative"
					]
				}
			}
		},
		{
			"displayName": "Best Guess",
			"name": "bestGuess",
			"type": "string",
			"default": "",
			"description": "Your best estimation (hh:mm:ss)",
			"routing": {
				"send": {
					"property": "bestGuess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Availability Relative"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}/hours",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Friday",
			"name": "friday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "friday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Monday",
			"name": "monday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "monday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Saturday",
			"name": "saturday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "saturday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sunday",
			"name": "sunday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "sunday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Thursday",
			"name": "thursday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "thursday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tuesday",
			"name": "tuesday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "tuesday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Wednesday",
			"name": "wednesday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "wednesday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"displayName": "DELETE /delivery/pools/{deliveryPoolId}/restaurants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Delivery Pools Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE Delivery Pools Restaurants"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}/restaurants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Delivery Pools Restaurants"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-assigned-to-delivery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-at-delivery-address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-at-restaurant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-has-delivered-order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-location",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Location"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"type": "json",
			"default": "{\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198\n}",
			"routing": {
				"send": {
					"property": "Location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Location"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Location"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver Location"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-on-their-way-to-delivery-address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "POST /late-order-compensation-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Compensation Query"
					]
				}
			}
		},
		{
			"displayName": "Compensation Options",
			"name": "compensationOptions",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "List of possible options for compensation",
			"routing": {
				"send": {
					"property": "compensationOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Compensation Query"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"type": "string",
			"default": "",
			"description": "Just Eat order identifier",
			"routing": {
				"send": {
					"property": "orderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Compensation Query"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"type": "string",
			"default": "",
			"description": "Just Eat restaurant identifier",
			"routing": {
				"send": {
					"property": "restaurantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Compensation Query"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "string",
			"default": "",
			"description": "Tenant (Country) of order restaurant.",
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Compensation Query"
					]
				}
			}
		},
		{
			"displayName": "POST /late-order-query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Query"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"type": "string",
			"default": "",
			"description": "Just Eat order identifier",
			"routing": {
				"send": {
					"property": "orderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Query"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"type": "string",
			"default": "",
			"description": "Just Eat restaurant identifier",
			"routing": {
				"send": {
					"property": "restaurantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Query"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "string",
			"default": "",
			"description": "Tenant (Country) of order restaurant.",
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Late Order Query"
					]
				}
			}
		},
		{
			"displayName": "POST /menu-ingestion-complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Menu Ingestion Complete"
					]
				}
			}
		},
		{
			"displayName": "Correlation ID",
			"name": "correlationId",
			"type": "string",
			"default": "",
			"description": "The ID of the execution which has been completed",
			"routing": {
				"send": {
					"property": "correlationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Menu Ingestion Complete"
					]
				}
			}
		},
		{
			"displayName": "Fault",
			"name": "fault",
			"type": "json",
			"default": "{\n  \"errors\": [\n    {}\n  ]\n}",
			"description": "Details of the fault which caused the menu ingestion to fail. This is only present if menu ingestion did not complete successfully",
			"routing": {
				"send": {
					"property": "fault",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Menu Ingestion Complete"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"type": "string",
			"default": "",
			"description": "The Just Eat restaurant ID",
			"routing": {
				"send": {
					"property": "restaurantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Menu Ingestion Complete"
					]
				}
			}
		},
		{
			"displayName": "Result",
			"name": "result",
			"type": "options",
			"default": "success",
			"description": "The result of the menu ingestion process",
			"options": [
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Fail",
					"value": "fail"
				}
			],
			"routing": {
				"send": {
					"property": "result",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Menu Ingestion Complete"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "options",
			"default": "au",
			"description": "Country code for the market the restaurant is in",
			"options": [
				{
					"name": "Au",
					"value": "au"
				},
				{
					"name": "Dk",
					"value": "dk"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Ie",
					"value": "ie"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Uk",
					"value": "uk"
				},
				{
					"name": "Nz",
					"value": "nz"
				}
			],
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Menu Ingestion Complete"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "string",
			"default": "",
			"description": "The ISO-8601 datetime at which the menu ingestion completed",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Menu Ingestion Complete"
					]
				}
			}
		},
		{
			"displayName": "POST /order-accepted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "Accepted For",
			"name": "AcceptedFor",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "AcceptedFor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "POST /order-cancelled",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "Reason",
			"type": "options",
			"default": "cust_cancelled_changed_mind",
			"description": "The reason the order was cancelled.",
			"options": [
				{
					"name": "Cust Cancelled Changed Mind",
					"value": "cust_cancelled_changed_mind"
				},
				{
					"name": "Cust Cancelled Delivery Too Long",
					"value": "cust_cancelled_delivery_too_long"
				},
				{
					"name": "Cust Cancelled Made Mistake",
					"value": "cust_cancelled_made_mistake"
				},
				{
					"name": "Cust Cancelled Other",
					"value": "cust_cancelled_other"
				},
				{
					"name": "Delivery Partner Cancelled",
					"value": "delivery_partner_cancelled"
				},
				{
					"name": "Rest Cancelled Customer Absent",
					"value": "rest_cancelled_customer_absent"
				},
				{
					"name": "Rest Cancelled Customer Requested",
					"value": "rest_cancelled_customer_requested"
				},
				{
					"name": "Rest Cancelled Declined",
					"value": "rest_cancelled_declined"
				},
				{
					"name": "Rest Cancelled Drivers Unavailable",
					"value": "rest_cancelled_drivers_unavailable"
				},
				{
					"name": "Rest Cancelled Fake Order",
					"value": "rest_cancelled_fake_order"
				},
				{
					"name": "Rest Cancelled Other",
					"value": "rest_cancelled_other"
				},
				{
					"name": "Rest Cancelled Out Of Stock",
					"value": "rest_cancelled_out_of_stock"
				},
				{
					"name": "Rest Cancelled Too Busy",
					"value": "rest_cancelled_too_busy"
				},
				{
					"name": "System Cancelled Other",
					"value": "system_cancelled_other"
				},
				{
					"name": "System Cancelled Test Order",
					"value": "system_cancelled_test_order"
				}
			],
			"routing": {
				"send": {
					"property": "Reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "POST /order-eligible-for-restaurant-compensation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Eligible For Restaurant Compensation"
					]
				}
			}
		},
		{
			"displayName": "Is Eligible",
			"name": "IsEligible",
			"type": "boolean",
			"default": true,
			"description": "Flag that informs if the cancelled order is eligible for compensation",
			"routing": {
				"send": {
					"property": "IsEligible",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Eligible For Restaurant Compensation"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"description": "Id for the order",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Eligible For Restaurant Compensation"
					]
				}
			}
		},
		{
			"displayName": "PUT /order-is-ready-for-pickup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Order Is Ready For Pickup"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "Ready for pickup",
			"options": [
				{
					"name": "Ready For Pickup",
					"value": "Ready for pickup"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Order Is Ready For Pickup"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "Timestamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Order Is Ready For Pickup"
					]
				}
			}
		},
		{
			"displayName": "POST /order-ready-for-preparation-async",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "Currency",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Customer",
			"name": "Customer",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "Customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Customer Notes",
			"name": "CustomerNotes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "CustomerNotes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Fulfilment",
			"name": "Fulfilment",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {\n      \"Accuracy\": 12.814,\n      \"Heading\": 357.10382,\n      \"Latitude\": 51.51641,\n      \"Longitude\": -0.103198,\n      \"Speed\": 8.68\n    },\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Fulfilment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Is Test",
			"name": "IsTest",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsTest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "Items",
			"type": "json",
			"default": "[\n  {\n    \"Items\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "Items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Payment",
			"name": "Payment",
			"type": "json",
			"default": "{\n  \"Lines\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "Payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Placed Date",
			"name": "PlacedDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "PlacedDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Price Breakdown",
			"name": "PriceBreakdown",
			"type": "json",
			"default": "{\n  \"Fees\": {}\n}",
			"routing": {
				"send": {
					"property": "PriceBreakdown",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Restaurant",
			"name": "Restaurant",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {\n      \"Accuracy\": 12.814,\n      \"Heading\": 357.10382,\n      \"Latitude\": 51.51641,\n      \"Longitude\": -0.103198,\n      \"Speed\": 8.68\n    },\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Restaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "Total Price",
			"name": "TotalPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "TotalPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Async"
					]
				}
			}
		},
		{
			"displayName": "POST /order-ready-for-preparation-sync",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "Currency",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Customer",
			"name": "Customer",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "Customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Customer Notes",
			"name": "CustomerNotes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "CustomerNotes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Fulfilment",
			"name": "Fulfilment",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {\n      \"Accuracy\": 12.814,\n      \"Heading\": 357.10382,\n      \"Latitude\": 51.51641,\n      \"Longitude\": -0.103198,\n      \"Speed\": 8.68\n    },\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Fulfilment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Is Test",
			"name": "IsTest",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsTest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "Items",
			"type": "json",
			"default": "[\n  {\n    \"Items\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "Items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Payment",
			"name": "Payment",
			"type": "json",
			"default": "{\n  \"Lines\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "Payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Placed Date",
			"name": "PlacedDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "PlacedDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Price Breakdown",
			"name": "PriceBreakdown",
			"type": "json",
			"default": "{\n  \"Fees\": {}\n}",
			"routing": {
				"send": {
					"property": "PriceBreakdown",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Restaurant",
			"name": "Restaurant",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {\n      \"Accuracy\": 12.814,\n      \"Heading\": 357.10382,\n      \"Latitude\": 51.51641,\n      \"Longitude\": -0.103198,\n      \"Speed\": 8.68\n    },\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Restaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "Total Price",
			"name": "TotalPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "TotalPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
					]
				}
			}
		},
		{
			"displayName": "POST /order-rejected",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Rejected At",
			"name": "RejectedAt",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "RejectedAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Rejected By",
			"name": "RejectedBy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "RejectedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Rejected Reason",
			"name": "RejectedReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "RejectedReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "PUT /order-requires-delivery-acceptance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Order Requires Delivery Acceptance"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"BasketInfo\": {\n    \"BasketId\": \"ABCb8DzdnUy7G481b0JN5g\",\n    \"DeliveryCharge\": 5,\n    \"Discount\": 4.78,\n    \"Discounts\": [\n      {\n        \"Discount\": 10,\n        \"DiscountType\": \"Percent\",\n        \"Id\": 21950,\n        \"QualifyingValue\": 4.78\n      }\n    ],\n    \"GroupedBasketItems\": [\n      {\n        \"BasketItem\": {\n          \"CombinedPrice\": 3.58,\n          \"Discounts\": [\n            {\n              \"Amount\": 4.5,\n              \"DiscountType\": \"Percent\"\n            }\n          ],\n          \"MealParts\": [\n            {\n              \"GroupId\": 1,\n              \"MealPartId\": 45822750,\n              \"Name\": \"Any Sides?\",\n              \"OptionalAccessories\": [\n                {\n                  \"Name\": \"Add Bacon\",\n                  \"OptionalAccessoryId\": 56168,\n                  \"Quantity\": 1,\n                  \"UnitPrice\": 0.5\n                }\n              ],\n              \"RequiredAccessories\": [\n                {\n                  \"GroupId\": 3,\n                  \"Name\": \"Coca-Cola Original Taste\",\n                  \"RequiredAccessoryId\": 225025,\n                  \"UnitPrice\": 0.16\n                }\n              ]\n            }\n          ],\n          \"MenuCardNumber\": \"1\",\n          \"MultiBuyDiscounts\": [\n            {\n              \"Amount\": 4.5,\n              \"DiscountType\": \"Percent\"\n            }\n          ],\n          \"Name\": \"Mini Fillet Burger\",\n          \"OptionalAccessories\": [\n            {\n              \"Name\": \"Add Bacon\",\n              \"OptionalAccessoryId\": 56168,\n              \"Quantity\": 1,\n              \"UnitPrice\": 0.5\n            }\n          ],\n          \"ProductId\": 45858074,\n          \"ProductTypeId\": 428,\n          \"RequiredAccessories\": [\n            {\n              \"GroupId\": 3,\n              \"Name\": \"Large Meal\",\n              \"RequiredAccessoryId\": 225025,\n              \"UnitPrice\": 0.1\n            }\n          ],\n          \"UnitPrice\": 1.79\n        },\n        \"CombinedPrice\": 3.58,\n        \"MenuCardNumber\": \"1\",\n        \"OrderSubId\": 0,\n        \"Quantity\": 2\n      }\n    ],\n    \"MenuId\": 777890,\n    \"MultiBuyDiscount\": 0,\n    \"SubTotal\": 47.75,\n    \"ToSpend\": 0,\n    \"Total\": 47.97\n  },\n  \"CustomerInfo\": {\n    \"Address\": \"Fleet Place House, 2 Fleet Place, London\",\n    \"City\": \"London\",\n    \"DisplayPhoneNumber\": \"(01) 872 7863\",\n    \"Email\": \"contact@just-eat.com\",\n    \"Id\": \"123456\",\n    \"Latitude\": 51.50015,\n    \"LocationAccuracyDescription\": \"ROOFTOP\",\n    \"LocationAccuracyInMeters\": 0,\n    \"LocationSource\": \"GeodataGeocoder\",\n    \"Longitude\": -0.12624,\n    \"Name\": \"Just Eat\",\n    \"PhoneMaskingCode\": \"444333222\",\n    \"PhoneNumber\": \"018727863\",\n    \"Postcode\": \"EC4M 7RF\",\n    \"TimeZone\": \"GMT Standard Time\"\n  },\n  \"CustomerOrderId\": 348322088,\n  \"FriendlyOrderReference\": \"348322088\",\n  \"Id\": \"348322088\",\n  \"Order\": {\n    \"NoteToRestaurant\": \"Contact-free delivery\",\n    \"PickupNoticePeriod\": \"00:10:00\"\n  },\n  \"OrderId\": \"ijdhpy7bdusgtc28bapspa\",\n  \"OrderReference\": \"39cce3f0-0278-dd25-ae32-e8effe1ce4eb\",\n  \"PaymentInfo\": {\n    \"DriverTipValue\": 0,\n    \"PaymentLines\": [\n      {\n        \"CardFee\": 0.5,\n        \"Value\": 22.05\n      }\n    ],\n    \"Total\": 22.55,\n    \"TotalComplementary\": 0\n  },\n  \"RestaurantInfo\": {\n    \"AddressLines\": [\n      \"Fleet Place House 2, Fleet Place, London\"\n    ],\n    \"City\": \"London\",\n    \"DispatchMethod\": \"Phone\",\n    \"EmailAddress\": \"contact@testrestaurant.com\",\n    \"Id\": \"123456\",\n    \"Latitude\": 51.50015,\n    \"Longitude\": -0.12624,\n    \"Name\": \"Test Restaurant\",\n    \"PhoneNumber\": \"07123456789\",\n    \"PickupNotes\": \"Use the back entrance\",\n    \"Postcode\": \"EC4M 7RF\"\n  },\n  \"Restrictions\": [\n    {}\n  ]\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Order Requires Delivery Acceptance"
					]
				}
			}
		},
		{
			"displayName": "POST /order-time-updated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Time Updated"
					]
				}
			}
		},
		{
			"displayName": "Day Of Week",
			"name": "dayOfWeek",
			"type": "options",
			"default": "Sunday",
			"description": "The day of the week that has been updated.",
			"options": [
				{
					"name": "Sunday",
					"value": "Sunday"
				},
				{
					"name": "Monday",
					"value": "Monday"
				},
				{
					"name": "Tuesday",
					"value": "Tuesday"
				},
				{
					"name": "Wednesday",
					"value": "Wednesday"
				},
				{
					"name": "Thursday",
					"value": "Thursday"
				},
				{
					"name": "Friday",
					"value": "Friday"
				},
				{
					"name": "Saturday",
					"value": "Saturday"
				}
			],
			"routing": {
				"send": {
					"property": "dayOfWeek",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Time Updated"
					]
				}
			}
		},
		{
			"displayName": "Lower Bound Minutes",
			"name": "lowerBoundMinutes",
			"type": "number",
			"default": 0,
			"description": "Order time lower bound value, in minutes.",
			"routing": {
				"send": {
					"property": "lowerBoundMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Time Updated"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"type": "string",
			"default": "",
			"description": "The Just Eat restaurant ID",
			"routing": {
				"send": {
					"property": "restaurantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Time Updated"
					]
				}
			}
		},
		{
			"displayName": "Service Type",
			"name": "serviceType",
			"type": "options",
			"default": "Delivery",
			"description": "Service type of the order time.",
			"options": [
				{
					"name": "Delivery",
					"value": "Delivery"
				},
				{
					"name": "Collection",
					"value": "Collection"
				}
			],
			"routing": {
				"send": {
					"property": "serviceType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Time Updated"
					]
				}
			}
		},
		{
			"displayName": "Upper Bound Minutes",
			"name": "upperBoundMinutes",
			"type": "number",
			"default": 0,
			"description": "Order time upper bound value, in minutes.",
			"routing": {
				"send": {
					"property": "upperBoundMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Order Time Updated"
					]
				}
			}
		},
		{
			"displayName": "POST /orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"displayName": "X Je API Version",
			"name": "x-je-api-version",
			"description": "The api version to use. Version 2.0 is the only available version.",
			"default": 2,
			"type": "number",
			"routing": {
				"request": {
					"headers": {
						"x-je-api-version": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Customer",
			"name": "Customer",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"GeoLocation\": {\n      \"Latitude\": 51.51641,\n      \"Longitude\": -0.103198\n    },\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"displayName": "Customer Notes",
			"name": "CustomerNotes",
			"type": "json",
			"default": "{\n  \"NoteForDelivery\": \"Red door\",\n  \"NoteForRestaurant\": \"Make it spicy\"\n}",
			"routing": {
				"send": {
					"property": "CustomerNotes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"displayName": "Friendly Order Reference",
			"name": "FriendlyOrderReference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "FriendlyOrderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Fulfilment",
			"name": "Fulfilment",
			"type": "json",
			"default": "{\n  \"DueAsap\": false,\n  \"DueDate\": \"2020-01-01T09:00:00.000Z\",\n  \"Method\": \"Delivery\"\n}",
			"routing": {
				"send": {
					"property": "Fulfilment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"displayName": "Is Test",
			"name": "IsTest",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsTest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Items",
			"name": "Items",
			"type": "json",
			"default": "[\n  {\n    \"Items\": [\n      {\n        \"Items\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "Items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Order Reference",
			"name": "OrderReference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payment",
			"name": "Payment",
			"type": "json",
			"default": "{\n  \"Fees\": [\n    {\n      \"Type\": \"card\",\n      \"Value\": 0.25\n    },\n    {\n      \"Type\": \"delivery\",\n      \"Value\": 3.5\n    }\n  ],\n  \"Lines\": [\n    {\n      \"LastCardDigits\": \"1234\",\n      \"Paid\": true,\n      \"ServiceFee\": 0,\n      \"Type\": \"Card\",\n      \"Value\": 19.95\n    }\n  ],\n  \"Tips\": [\n    {\n      \"Type\": \"driver\",\n      \"Value\": 2.5\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "Payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Restaurant",
			"name": "Restaurant",
			"type": "string",
			"default": {},
			"routing": {
				"send": {
					"property": "Restaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Total Price",
			"name": "TotalPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "TotalPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/deliverystate/driverlocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverlocation"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"EtaAtDeliveryAddress\": \"2020-12-25T16:45:28.7537228+00:00\",\n  \"EtaAtRestaurant\": \"2020-12-25T16:30:28.7537228+00:00\",\n  \"Location\": {\n    \"Accuracy\": 12.814,\n    \"Heading\": 357.10382,\n    \"Latitude\": 51.51641,\n    \"Longitude\": -0.103198,\n    \"Speed\": 8.68\n  }\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverlocation"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Accept"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Accept"
					]
				}
			}
		},
		{
			"displayName": "Time Accepted For",
			"name": "TimeAcceptedFor",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeAcceptedFor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Accept"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Cancel"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Cancel"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "Message",
			"type": "string",
			"default": "",
			"description": "Reason why this order is being cancelled.",
			"routing": {
				"send": {
					"property": "Message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{orderId}/complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Complete"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "The ID of the order to mark as complete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Complete"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/deliverystate/atdeliveryaddress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atdeliveryaddress"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Just Eat order identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atdeliveryaddress"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"type": "json",
			"default": "{\n  \"Accuracy\": 12.814,\n  \"Heading\": 357.10382,\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198,\n  \"Speed\": 8.68\n}",
			"description": "GeoLocation object containing latitude and longitude values.",
			"routing": {
				"send": {
					"property": "Location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atdeliveryaddress"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp With Utc Offset",
			"name": "TimeStampWithUtcOffset",
			"type": "string",
			"default": "",
			"description": "This should represent the delivery detailed updated timestamp.",
			"routing": {
				"send": {
					"property": "TimeStampWithUtcOffset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atdeliveryaddress"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/deliverystate/atrestaurant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestaurant"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Just Eat order identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestaurant"
					]
				}
			}
		},
		{
			"displayName": "Eta At Delivery Address",
			"name": "EtaAtDeliveryAddress",
			"type": "string",
			"default": "",
			"description": "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
			"routing": {
				"send": {
					"property": "EtaAtDeliveryAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestaurant"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"type": "json",
			"default": "{\n  \"Accuracy\": 12.814,\n  \"Heading\": 357.10382,\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198,\n  \"Speed\": 8.68\n}",
			"description": "GeoLocation object containing latitude and longitude values.",
			"routing": {
				"send": {
					"property": "Location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestaurant"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp With Utc Offset",
			"name": "TimeStampWithUtcOffset",
			"type": "string",
			"default": "",
			"description": "This should represent the Eta calculated timestamp.",
			"routing": {
				"send": {
					"property": "TimeStampWithUtcOffset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestaurant"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/deliverystate/atrestauranteta",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestauranteta"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Just Eat order identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestauranteta"
					]
				}
			}
		},
		{
			"displayName": "Best Guess",
			"name": "bestGuess",
			"type": "string",
			"default": "",
			"description": "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.",
			"routing": {
				"send": {
					"property": "bestGuess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestauranteta"
					]
				}
			}
		},
		{
			"displayName": "Estimated At",
			"name": "estimatedAt",
			"type": "string",
			"default": "",
			"description": "This is the time at which you are doing the estimation",
			"routing": {
				"send": {
					"property": "estimatedAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Atrestauranteta"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/deliverystate/delivered",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Delivered"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Just Eat order identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Delivered"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"type": "json",
			"default": "{\n  \"Accuracy\": 12.814,\n  \"Heading\": 357.10382,\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198,\n  \"Speed\": 8.68\n}",
			"description": "GeoLocation object containing latitude and longitude values.",
			"routing": {
				"send": {
					"property": "Location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Delivered"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp With Utc Offset",
			"name": "TimeStampWithUtcOffset",
			"type": "string",
			"default": "",
			"description": "This should represent the delivery detailed updated timestamp.",
			"routing": {
				"send": {
					"property": "TimeStampWithUtcOffset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Delivered"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/deliverystate/driverassigned",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Just Eat order identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "07123456789",
			"description": "This should represent the driver's contact number.",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "David",
			"description": "This should represent the driver's name.",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Eta At Delivery Address",
			"name": "EtaAtDeliveryAddress",
			"type": "string",
			"default": "2020-12-25T16:45:28.7537228+00:00",
			"description": "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
			"routing": {
				"send": {
					"property": "EtaAtDeliveryAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Eta At Restaurant",
			"name": "EtaAtRestaurant",
			"type": "string",
			"default": "2020-12-25T15:30:28.7537228+00:00",
			"description": "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant. In other words, it should not just contain the pick-up time initially requested by Just Eat.",
			"routing": {
				"send": {
					"property": "EtaAtRestaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"type": "json",
			"default": "{\n  \"Accuracy\": 12.814,\n  \"Heading\": 357.10382,\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198,\n  \"Speed\": 8.68\n}",
			"description": "GeoLocation object containing latitude and longitude values.",
			"routing": {
				"send": {
					"property": "Location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp With Utc Offset",
			"name": "TimeStampWithUtcOffset",
			"type": "string",
			"default": "2020-12-25T15:45:28.7537228+00:00",
			"description": "This should represent the driver assigned timestamp.",
			"routing": {
				"send": {
					"property": "TimeStampWithUtcOffset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "Vehicle Details",
			"name": "VehicleDetails",
			"type": "json",
			"default": "{\n  \"Vehicle\": \"Motorbike\",\n  \"VehicleRegistration\": \"JU51 SAY\"\n}",
			"routing": {
				"send": {
					"property": "VehicleDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverassigned"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/deliverystate/driverunassigned",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Just Eat order identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "Order was not ready",
			"description": "This should represent the comment on the unassignment.",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "07123456789",
			"description": "This should represent the driver's contact number.",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "David McDriverson",
			"description": "This should represent the driver's name.",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Eta At Delivery Address",
			"name": "EtaAtDeliveryAddress",
			"type": "string",
			"default": "2020-12-25T16:45:28.7537228+00:00",
			"description": "This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.",
			"routing": {
				"send": {
					"property": "EtaAtDeliveryAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Eta At Restaurant",
			"name": "EtaAtRestaurant",
			"type": "string",
			"default": "2020-12-25T16:30:28.7537228+00:00",
			"description": "This should represent the delivery partner's best guess at when the driver will arrive at the restaurant. In other words, it should not just contain the pick-up time initially requested by Just Eat.",
			"routing": {
				"send": {
					"property": "EtaAtRestaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location:",
			"type": "json",
			"default": "{\n  \"Accuracy\": 12.814,\n  \"Heading\": 357.10382,\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198,\n  \"Speed\": 8.68\n}",
			"description": "GeoLocation object containing latitude and longitude values.",
			"routing": {
				"send": {
					"property": "Location:",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "Reason",
			"type": "string",
			"default": "package_not_ready",
			"description": "This should represent the delivery partner's reason for unassigning themselves from the order.",
			"routing": {
				"send": {
					"property": "Reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp With Utc Offset",
			"name": "TimeStampWithUtcOffset",
			"type": "string",
			"default": "2020-12-25T15:30:28.7537228+00:00",
			"description": "This should represent the driver unassigned timestamp.",
			"routing": {
				"send": {
					"property": "TimeStampWithUtcOffset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "Unassigned By",
			"name": "UnassignedBy",
			"type": "string",
			"default": "operation",
			"description": "This should represent the actor who triggered unassignment.",
			"routing": {
				"send": {
					"property": "UnassignedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Driverunassigned"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/deliverystate/onitsway",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Onitsway"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Onitsway"
					]
				}
			}
		},
		{
			"displayName": "Estimated Arrival Time",
			"name": "EstimatedArrivalTime",
			"type": "string",
			"default": "2020-12-25T16:45:28.7537228+00:00",
			"description": "This should represent the delivery partner's best guess at when the driver will arrive at the customer's address. In other words, it should not just contain the delivery time initially requested by Just Eat.",
			"routing": {
				"send": {
					"property": "EstimatedArrivalTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Onitsway"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"type": "json",
			"default": "{\n  \"Accuracy\": 12.814,\n  \"Heading\": 357.10382,\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198,\n  \"Speed\": 8.68\n}",
			"description": "GeoLocation object containing latitude and longitude values.",
			"routing": {
				"send": {
					"property": "Location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Onitsway"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp With Utc Offset",
			"name": "TimeStampWithUtcOffset",
			"type": "string",
			"default": "2020-12-25T15:30:28.7537228+00:00",
			"description": "This should represent the driver on its ways timestamp.",
			"routing": {
				"send": {
					"property": "TimeStampWithUtcOffset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Deliverystate Onitsway"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/duedate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Duedate"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Duedate"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "DueDate",
			"type": "string",
			"default": "",
			"description": "The updated ETA for the order",
			"routing": {
				"send": {
					"property": "DueDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Duedate"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/ignore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Ignore"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Ignore"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{orderId}/readyforcollection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Readyforcollection"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "The ID of the order to mark as ready for collection",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Readyforcollection"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/reject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Reject"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Reject"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "Message",
			"type": "string",
			"default": "",
			"description": "Reason why this order is being rejected.",
			"routing": {
				"send": {
					"property": "Message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Orders Reject"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{tenant}/{orderId}/consumerqueries/lateorder/restaurantresponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateorder Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateorder Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Id for the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateorder Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateorder Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Additional Delivery Time To Add Minutes",
			"name": "additionalDeliveryTimeToAddMinutes",
			"type": "number",
			"default": 0,
			"description": "The amount of time to add to the current delivery estimate in minutes",
			"routing": {
				"send": {
					"property": "additionalDeliveryTimeToAddMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateorder Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Late Order Status",
			"name": "lateOrderStatus",
			"type": "options",
			"default": "Preparing",
			"description": "The updated later order query status",
			"options": [
				{
					"name": "Preparing",
					"value": "Preparing"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
			"routing": {
				"send": {
					"property": "lateOrderStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateorder Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{tenant}/{orderId}/consumerqueries/lateordercompensation/restaurantresponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Id for the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Accepted Amount",
			"name": "acceptedAmount",
			"type": "number",
			"default": 0,
			"description": "The monetary amount of compensation granted, in cents/pence. Required when `isAccepted = true`.",
			"routing": {
				"send": {
					"property": "acceptedAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Is Accepted",
			"name": "isAccepted",
			"type": "boolean",
			"default": true,
			"description": "Flag to indicate whether a compensation request has been accepted or rejected.",
			"routing": {
				"send": {
					"property": "isAccepted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"type": "string",
			"default": "",
			"description": "The ID of the late order compensation request that this response relates to.",
			"routing": {
				"send": {
					"property": "orderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Rejected Reason Code",
			"name": "rejectedReasonCode",
			"type": "options",
			"default": "BadTraffic",
			"description": "\n- `BadTraffic` : The driver was stuck in heavy traffic, sorry.\n- `BadWeather` : The bad weather was delaying our deliveries, sorry.\n- `BusierThanExpected` : Our restaurant was busier than we expected.\n- `CompensatedWithItem` : We gave you something from the menu free of charge to make up for it.\n- `NoReason` : We're really sorry your order was late. We hope you enjoyed your food.",
			"options": [
				{
					"name": "Bad Traffic",
					"value": "BadTraffic"
				},
				{
					"name": "Bad Weather",
					"value": "BadWeather"
				},
				{
					"name": "Busier Than Expected",
					"value": "BusierThanExpected"
				},
				{
					"name": "Compensated With Item",
					"value": "CompensatedWithItem"
				},
				{
					"name": "No Reason",
					"value": "NoReason"
				}
			],
			"routing": {
				"send": {
					"property": "rejectedReasonCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{tenant}/{orderId}/restaurantqueries/compensation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Restaurantqueries Compensation"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Restaurantqueries Compensation"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Id for the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Restaurantqueries Compensation"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Restaurantqueries Compensation"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "Comments",
			"type": "string",
			"default": "",
			"description": "Any other comments to add to the request",
			"routing": {
				"send": {
					"property": "Comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Restaurantqueries Compensation"
					]
				}
			}
		},
		{
			"displayName": "Reason Code",
			"name": "ReasonCode",
			"type": "options",
			"default": "NotSet",
			"description": "The reason why compensation is due",
			"options": [
				{
					"name": "Not Set",
					"value": "NotSet"
				},
				{
					"name": "Being Prepared",
					"value": "BeingPrepared"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				},
				{
					"name": "Unknown",
					"value": "Unknown"
				}
			],
			"routing": {
				"send": {
					"property": "ReasonCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Restaurantqueries Compensation"
					]
				}
			}
		},
		{
			"displayName": "PUT /redelivery-requested",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "Notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Update",
			"name": "Update",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurant-offline-status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Allow Restaurant Override",
			"name": "AllowRestaurantOverride",
			"type": "boolean",
			"default": true,
			"description": "Whether a restaurant should be allowed to reverse this offline status change through calls to the Restaurant Events endpoints.",
			"routing": {
				"send": {
					"property": "AllowRestaurantOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Is Offline",
			"name": "IsOffline",
			"type": "boolean",
			"default": true,
			"description": "Represents the current offline status of the restaurant.",
			"routing": {
				"send": {
					"property": "IsOffline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "RestaurantId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the restaurant that has their offline status changed.",
			"routing": {
				"send": {
					"property": "RestaurantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "options",
			"default": "au",
			"description": "The two letter country code for the market in which the restaurant operates.",
			"options": [
				{
					"name": "Au",
					"value": "au"
				},
				{
					"name": "Dk",
					"value": "dk"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Ie",
					"value": "ie"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Uk",
					"value": "uk"
				},
				{
					"name": "Nz",
					"value": "nz"
				}
			],
			"routing": {
				"send": {
					"property": "Tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurant-online-status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Allow Restaurant Override",
			"name": "AllowRestaurantOverride",
			"type": "boolean",
			"default": true,
			"description": "Whether a restaurant should be allowed to reverse this offline status change through calls to the Restaurant Events endpoints.",
			"routing": {
				"send": {
					"property": "AllowRestaurantOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Is Offline",
			"name": "IsOffline",
			"type": "boolean",
			"default": true,
			"description": "Represents the current offline status of the restaurant.",
			"routing": {
				"send": {
					"property": "IsOffline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "RestaurantId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the restaurant that has their offline status changed.",
			"routing": {
				"send": {
					"property": "RestaurantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "options",
			"default": "au",
			"description": "The two letter country code for the market in which the restaurant operates.",
			"options": [
				{
					"name": "Au",
					"value": "au"
				},
				{
					"name": "Dk",
					"value": "dk"
				},
				{
					"name": "Es",
					"value": "es"
				},
				{
					"name": "Ie",
					"value": "ie"
				},
				{
					"name": "It",
					"value": "it"
				},
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Uk",
					"value": "uk"
				},
				{
					"name": "Nz",
					"value": "nz"
				}
			],
			"routing": {
				"send": {
					"property": "Tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/bylatlong",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "OAuth2 token issued for logged in consumer or API key issued to partner",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Accept Tenant",
			"name": "Accept-Tenant",
			"description": "A valid country code, e.g. \"uk\". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Tenant": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"required": true,
			"description": "Filter search results to only include restaurants that deliver to the specified location",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"required": true,
			"description": "Filter search results to only include restaurants that deliver to the specified location",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Cuisine",
			"name": "cuisine",
			"description": "Filter search results to only include restaurants that offer the specified cuisine",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cuisine",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Restaurant Name",
			"name": "restaurantName",
			"description": "Filter search results to only include restaurants that have a name that matches the specified value",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "restaurantName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Brand Name",
			"name": "brandName",
			"description": "Filter search results to only include restaurants of the specified brand",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "brandName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/bypostcode/{postcode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"description": "OAuth2 token issued for logged in consumer or API key issued to partner",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Accept Tenant",
			"name": "Accept-Tenant",
			"description": "A valid country code, e.g. \"uk\". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Tenant": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Postcode",
			"name": "postcode",
			"required": true,
			"description": "Filter search results to only include restaurants that deliver to the specified postcode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Cuisine",
			"name": "cuisine",
			"description": "Filter search results to only include restaurants that offer the specified cuisine",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cuisine",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Restaurant Name",
			"name": "restaurantName",
			"description": "Filter search results to only include restaurants that have a name that matches the specified value",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "restaurantName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Brand Name",
			"name": "brandName",
			"description": "Filter search results to only include restaurants of the specified brand",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "brandName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/driver/eta",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Driver Eta"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"etaAtRestaurant\": 1,\n  \"restaurantId\": \"1\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Driver Eta"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/availabilities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of availabilities to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of categories to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/categories/{categoryId}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "categoryId",
			"required": true,
			"description": "The category ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of item IDs to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/dealgroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/dealgroups/{dealGroupId}/dealitemvariations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Deal Group ID",
			"name": "dealGroupId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/modifiergroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/variations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/customerclaims",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code indicating the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "Just Eat restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "Start date limiter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "End date limiter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Pagination limit",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Pagination offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version",
			"default": "application/json;v=1",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "POST /restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code indicating the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "Just Eat restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Claim identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Indicates the representation of the request body the client is sending (including version)",
			"default": "application/json;v=1",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Decision",
			"name": "decision",
			"type": "options",
			"default": "Accepted",
			"description": "Decision on the claim",
			"options": [
				{
					"name": "Accepted",
					"value": "Accepted"
				},
				{
					"name": "Rejected",
					"value": "Rejected"
				},
				{
					"name": "Partially Accepted",
					"value": "PartiallyAccepted"
				}
			],
			"routing": {
				"send": {
					"property": "decision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {\n    \"decision\": \"Accepted\",\n    \"id\": \"NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1\"\n  }\n]",
			"description": "Decisions on the items of a claim",
			"routing": {
				"send": {
					"property": "items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Justification",
			"name": "justification",
			"type": "json",
			"default": "{\n  \"comments\": \"The food was packed properly\",\n  \"reason\": \"Other\"\n}",
			"description": "The reason of the claim rejection and optional comments from the restaurant",
			"routing": {
				"send": {
					"property": "justification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse/justification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code indicating the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "Just Eat restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Claim identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Indicates the representation of the request body the client is sending (including version)",
			"default": "application/json;v=1",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"description": "Comment from the restaurant owner in case they rejected at least one of the items and want to type their own rejection reason",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "options",
			"default": "AlreadyRefunded",
			"description": "One of the predefined reasons",
			"options": [
				{
					"name": "Already Refunded",
					"value": "AlreadyRefunded"
				},
				{
					"name": "Item Replaced",
					"value": "ItemReplaced"
				},
				{
					"name": "Partial Refund Required",
					"value": "PartialRefundRequired"
				},
				{
					"name": "Was Not Missing",
					"value": "WasNotMissing"
				},
				{
					"name": "Will Redeliver",
					"value": "WillRedeliver"
				},
				{
					"name": "Order Was Hot",
					"value": "OrderWasHot"
				},
				{
					"name": "Order Was On Time",
					"value": "OrderWasOnTime"
				},
				{
					"name": "Order Was Packed",
					"value": "OrderWasPacked"
				},
				{
					"name": "Food Was Intact",
					"value": "FoodWasIntact"
				},
				{
					"name": "Add Extra Item",
					"value": "AddExtraItem"
				},
				{
					"name": "Other",
					"value": "Other"
				}
			],
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code for which country the restaurant resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "A unique identifier for a restaurant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"description": "Request header string that allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code for which country the restaurant resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "A unique identifier for a restaurant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"description": "Request header string that allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Bag Fee",
			"name": "bagFee",
			"type": "json",
			"default": "{\n  \"description\": \"A charge for bags in delivery\",\n  \"serviceTypes\": {\n    \"collection\": {\n      \"amount\": 5\n    },\n    \"default\": {\n      \"amount\": 0\n    },\n    \"delivery\": {\n      \"amount\": 10\n    }\n  }\n}",
			"description": "The object which encapsulates a Fee",
			"routing": {
				"send": {
					"property": "bagFee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/menu",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The tenant of the restaurant in which to put a menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier to associated with the menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. Bearer ABCDE123456789",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/menu",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The tenant of the restaurant in which to put a menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier to associated with the menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"description": "Used to denote the version of the menu payload within the body, will default to latest if not supplied e.g. application/=1.0",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/menu<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/ordertimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A valid country code, e.g. \"uk\".",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "OAuth2 token issued for logged in restaurant",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/ordertimes/{dayOfWeek}/{serviceType}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A valid country code, e.g. \"uk\".",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Day Of Week",
			"name": "dayOfWeek",
			"required": true,
			"description": "Day of week for order time",
			"default": "Sunday",
			"type": "options",
			"options": [
				{
					"name": "Sunday",
					"value": "Sunday"
				},
				{
					"name": "Monday",
					"value": "Monday"
				},
				{
					"name": "Tuesday",
					"value": "Tuesday"
				},
				{
					"name": "Wednesday",
					"value": "Wednesday"
				},
				{
					"name": "Thursday",
					"value": "Thursday"
				},
				{
					"name": "Friday",
					"value": "Friday"
				},
				{
					"name": "Saturday",
					"value": "Saturday"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Service Type",
			"name": "serviceType",
			"required": true,
			"description": "Service type of the order time",
			"default": "Delivery",
			"type": "options",
			"options": [
				{
					"name": "Delivery",
					"value": "Delivery"
				},
				{
					"name": "Collection",
					"value": "Collection"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "OAuth2 token issued for logged in restaurant OR API token for third party, in the format `Bearer {api_key}`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Lower Bound Minutes",
			"name": "lowerBoundMinutes",
			"type": "number",
			"default": 0,
			"description": "Order time lower bound value, in minutes.",
			"routing": {
				"send": {
					"property": "lowerBoundMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Upper Bound Minutes",
			"name": "upperBoundMinutes",
			"type": "number",
			"default": 0,
			"description": "Order time upper bound value, in minutes.",
			"routing": {
				"send": {
					"property": "upperBoundMinutes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/servicetimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Get Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code of restaurant's tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Get Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Get Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/servicetimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code of restaurant's tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Service Times",
			"name": "serviceTimes",
			"type": "json",
			"default": "{\n  \"friday\": {\n    \"collection\": [\n      {}\n    ],\n    \"delivery\": {}\n  },\n  \"monday\": {},\n  \"saturday\": {},\n  \"sunday\": {},\n  \"thursday\": {},\n  \"tuesday\": {},\n  \"wednesday\": {}\n}",
			"description": "The desired times at which a restaurant is in service",
			"routing": {
				"send": {
					"property": "serviceTimes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "GET /search/autocomplete/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A valid country code, e.g. \"uk\".",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "searchTerm",
			"required": true,
			"description": "User's search term - at least one character required",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Latlong",
			"name": "latlong",
			"required": true,
			"description": "The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude.",
			"default": [
				51.501285,
				-0.1424422
			],
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "latlong",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of auto-completed terms returned by the API. Defaults to 7. Valid values 1 - 10",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "GET /search/restaurants/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A valid country code, e.g. \"uk\".",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "searchTerm",
			"required": true,
			"description": "User's search term.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Latlong",
			"name": "latlong",
			"required": true,
			"description": "The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude.",
			"default": [
				51.501285,
				-0.1424422
			],
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "latlong",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of restaurants returned by the API.\r\nValid values are numbers between 1 and 500.\r\nIf not provided, the limit defaults to 300.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "POST /send-to-pos-failed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Send To Pos Failed"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Send To Pos Failed"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/{tenant}/restaurants/event/offline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE Requester",
			"name": "X-JE-Requester",
			"required": true,
			"description": "Name of the user or system creating the event. Used for auditing purposes",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-JE-Requester": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE User Role",
			"name": "X-JE-User-Role",
			"required": true,
			"default": "System",
			"type": "options",
			"description": "\n- `System` : Role for an automated process action.\n- `Operations` : Role for an operations user action.\n- `Restaurant` : Role for a restaurant owner/employee user action.",
			"options": [
				{
					"name": "System",
					"value": "System"
				},
				{
					"name": "Operations",
					"value": "Operations"
				},
				{
					"name": "Restaurant",
					"value": "Restaurant"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-JE-User-Role": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Allow Restaurant Override",
			"name": "allowRestaurantOverride",
			"type": "boolean",
			"default": true,
			"description": "Whether a restaurant should be allowed to delete this event, regardless of who raised it.",
			"routing": {
				"send": {
					"property": "allowRestaurantOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"description": "A free text category used to group multiple events. This field is not intended to be used by clients.",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "string",
			"default": "",
			"description": "Either a timespan in the HH:mm format or `untilTomorrow` (this will be the next day at 4:30 am +/- 10 minutes local time). Note if both duration and `endDate` are specified duration takes precedence.",
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "ISO 8601 format of the end datetime of the offline event.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Legacy Temp Offline Type",
			"name": "legacyTempOfflineType",
			"type": "options",
			"default": "ClosedDueToEvent",
			"description": "\n- `Unset` : Legacy value meaning online.\n- `None` : Legacy value meaning online.\n- `TempOffline` : The restaurant will go temporarily offline, typically for an undetermined amount of time (no end date).\n- `ClosedToday` : The restaurant will closed for the day and the event will end the next morning.\n- `ClosedDueToEvent` : The restaurant will go offline for an event (e.g. a holiday), these events will typically have an end time.\n- `FailedJctConnection` : The restaurant will go offline due to the POS device losing connection.\n- `NoTrOverride` : The restaurant will go offline for another reason that the restaurant cannot override.\n- `IgnoredOrders` : The restaurant will go offline due to ignoring orders.",
			"options": [
				{
					"name": "Unset",
					"value": "Unset"
				},
				{
					"name": "None",
					"value": "None"
				},
				{
					"name": "Temp Offline",
					"value": "TempOffline"
				},
				{
					"name": "Closed Today",
					"value": "ClosedToday"
				},
				{
					"name": "Closed Due To Event",
					"value": "ClosedDueToEvent"
				},
				{
					"name": "Failed Jct Connection",
					"value": "FailedJctConnection"
				},
				{
					"name": "No Tr Override",
					"value": "NoTrOverride"
				},
				{
					"name": "Ignored Orders",
					"value": "IgnoredOrders"
				}
			],
			"routing": {
				"send": {
					"property": "legacyTempOfflineType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name of the offline event to be created.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"description": "The reason for creating the offline event.",
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Restaurant Ids",
			"name": "restaurantIds",
			"type": "string",
			"default": "",
			"description": "A comma separated list of the IDs of the restaurants to include in the offline event. No limit to the number accepted by the endpoint, but unexpected behaviour mat occur at more than 500 IDs.",
			"routing": {
				"send": {
					"property": "restaurantIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "",
			"description": "ISO 8601 format of the start datetime of the offline event.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/{tenant}/restaurants/{id}/event/offline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The identifier for the restaurant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE Requester",
			"name": "X-JE-Requester",
			"required": true,
			"description": "Name of the user or system creating the event. Used for auditing purposes",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-JE-Requester": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE User Role",
			"name": "X-JE-User-Role",
			"required": true,
			"description": "The role the user or system creating the event has assumed.",
			"default": "System",
			"type": "options",
			"options": [
				{
					"name": "System",
					"value": "System"
				},
				{
					"name": "Operations",
					"value": "Operations"
				},
				{
					"name": "Restaurant",
					"value": "Restaurant"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-JE-User-Role": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "POST /{tenant}/orders/{orderId}/queries/attempteddelivery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant e.g. uk.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Id for the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery"
					]
				}
			}
		},
		{
			"displayName": "Reason Code",
			"name": "ReasonCode",
			"type": "options",
			"default": "problem_with_address",
			"description": "The reason the attempted delivery event was created",
			"options": [
				{
					"name": "Problem With Address",
					"value": "problem_with_address"
				},
				{
					"name": "No Answer",
					"value": "no_answer"
				}
			],
			"routing": {
				"send": {
					"property": "ReasonCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery"
					]
				}
			}
		},
		{
			"displayName": "POST /{tenant}/orders/{orderId}/queries/attempteddelivery/resolution/redeliverorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery Resolution Redeliverorder"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant e.g. uk.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery Resolution Redeliverorder"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "Id for the order.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery Resolution Redeliverorder"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery Resolution Redeliverorder"
					]
				}
			}
		},
		{
			"displayName": "New Due Date",
			"name": "NewDueDate",
			"type": "string",
			"default": "",
			"description": "Updated due date for delivery of the order",
			"routing": {
				"send": {
					"property": "NewDueDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery Resolution Redeliverorder"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"type": "options",
			"default": "driver_at_address",
			"description": "The current status of the order",
			"options": [
				{
					"name": "Driver At Address",
					"value": "driver_at_address"
				},
				{
					"name": "Repreparing",
					"value": "repreparing"
				}
			],
			"routing": {
				"send": {
					"property": "Status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publicly Accessible"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery Resolution Redeliverorder"
					]
				}
			}
		},
];
