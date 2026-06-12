import type { INodeProperties } from 'n8n-workflow';

export const consumerQueriesWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Consumer Queries Webhooks"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
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
						"Consumer Queries Webhooks"
					],
					"operation": [
						"POST Late Order Query"
					]
				}
			}
		},
];
