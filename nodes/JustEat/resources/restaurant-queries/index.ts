import type { INodeProperties } from 'n8n-workflow';

export const restaurantQueriesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Queries"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Restaurant Queries"
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
						"Restaurant Queries"
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
						"Restaurant Queries"
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
						"Restaurant Queries"
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
						"Restaurant Queries"
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
						"Restaurant Queries"
					],
					"operation": [
						"POST Orders Restaurantqueries Compensation"
					]
				}
			}
		},
];
