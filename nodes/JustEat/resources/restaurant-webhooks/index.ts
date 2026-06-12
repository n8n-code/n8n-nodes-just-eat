import type { INodeProperties } from 'n8n-workflow';

export const restaurantWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Webhooks"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
					],
					"operation": [
						"POST Menu Ingestion Complete"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
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
						"Restaurant Webhooks"
					],
					"operation": [
						"POST Order Time Updated"
					]
				}
			}
		},
];
