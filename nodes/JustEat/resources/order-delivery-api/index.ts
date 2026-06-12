import type { INodeProperties } from 'n8n-workflow';

export const orderDeliveryApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery API"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Order Delivery API"
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
						"Order Delivery API"
					],
					"operation": [
						"PUT Orders Deliverystate Driverlocation"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
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
						"Order Delivery API"
					],
					"operation": [
						"PUT Orders Deliverystate Onitsway"
					]
				}
			}
		},
];
