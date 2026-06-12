import type { INodeProperties } from 'n8n-workflow';

export const consumerQueriesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Consumer Queries"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
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
						"Consumer Queries"
					],
					"operation": [
						"POST Orders Consumerqueries Lateordercompensation Restaurantresponse"
					]
				}
			}
		},
];
