import type { INodeProperties } from 'n8n-workflow';

export const orderWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order Webhooks"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
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
						"Order Webhooks"
					],
					"operation": [
						"POST Order Ready For Preparation Sync"
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
						"Order Webhooks"
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
						"Order Webhooks"
					],
					"operation": [
						"POST Send To Pos Failed"
					]
				}
			}
		},
];
