import type { INodeProperties } from 'n8n-workflow';

export const attemptedDeliveryWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Attempted Delivery Webhooks"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Attempted Delivery Webhooks"
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
						"Attempted Delivery Webhooks"
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
						"Attempted Delivery Webhooks"
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
						"Attempted Delivery Webhooks"
					],
					"operation": [
						"PUT Attempted Delivery Query Resolved"
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
						"Attempted Delivery Webhooks"
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
						"Attempted Delivery Webhooks"
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
						"Attempted Delivery Webhooks"
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
						"Attempted Delivery Webhooks"
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
						"Attempted Delivery Webhooks"
					],
					"operation": [
						"PUT Delivery Failed"
					]
				}
			}
		},
];
