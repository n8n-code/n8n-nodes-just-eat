import type { INodeProperties } from 'n8n-workflow';

export const orderApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order API"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
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
						"Order API"
					],
					"operation": [
						"POST Orders"
					]
				}
			}
		},
];
