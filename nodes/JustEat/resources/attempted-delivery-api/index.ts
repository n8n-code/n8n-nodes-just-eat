import type { INodeProperties } from 'n8n-workflow';

export const attemptedDeliveryApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Attempted Delivery API"
					]
				}
			},
			"options": [
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
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
						"Attempted Delivery API"
					],
					"operation": [
						"POST Orders Queries Attempteddelivery Resolution Redeliverorder"
					]
				}
			}
		},
];
