import type { INodeProperties } from 'n8n-workflow';

export const restaurantQueriesWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Queries Webhooks"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Restaurant Queries Webhooks"
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
						"Restaurant Queries Webhooks"
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
						"Restaurant Queries Webhooks"
					],
					"operation": [
						"POST Order Eligible For Restaurant Compensation"
					]
				}
			}
		},
];
