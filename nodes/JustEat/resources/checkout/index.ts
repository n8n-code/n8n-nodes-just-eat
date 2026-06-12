import type { INodeProperties } from 'n8n-workflow';

export const checkoutDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					]
				}
			},
			"options": [
				{
					"name": "GET Checkout",
					"value": "GET Checkout",
					"action": "Get Checkout",
					"description": "Get the details required to fulfil an order, which includes:\n  - The restaurant selling the items to be purchased\n  - The customer making the purchase\n  - How, where and when the items will be received by the customer\n  - Instructions about the order\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/checkout/{{$parameter[\"tenant\"]}}/{{$parameter[\"checkoutId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Checkout",
					"value": "PATCH Checkout",
					"action": "Update Checkout",
					"description": "Update the details required to fulfil an order, which includes:\n  - The customer making the purchase\n  - Where and when the items will be received by the customer\n  - Instructions about the order\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/checkout/{{$parameter[\"tenant\"]}}/{{$parameter[\"checkoutId\"]}}"
						}
					}
				},
				{
					"name": "GET Checkout Fulfilment Availabletimes",
					"value": "GET Checkout Fulfilment Availabletimes",
					"action": "Get Available Fulfilment Times",
					"description": "Gets a collection of times for when an order can be fulfilled.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/checkout/{{$parameter[\"tenant\"]}}/{{$parameter[\"checkoutId\"]}}/fulfilment/availabletimes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /checkout/{tenant}/{checkoutId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "Checkout ID",
			"name": "checkoutId",
			"required": true,
			"description": "A unique identifier for a checkout. This is currently a Basket Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout"
					]
				}
			}
		},
		{
			"displayName": "PATCH /checkout/{tenant}/{checkoutId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Checkout ID",
			"name": "checkoutId",
			"required": true,
			"description": "A unique identifier for a checkout. This is currently a Basket Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Customer",
			"name": "customer",
			"type": "json",
			"default": "{}",
			"description": "Details of the customer making the purchase.",
			"routing": {
				"send": {
					"property": "customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Fulfilment",
			"name": "fulfilment",
			"type": "json",
			"default": "{\n  \"location\": {\n    \"address\": {\n      \"lines\": [\n        null\n      ]\n    },\n    \"geolocation\": {}\n  },\n  \"time\": {\n    \"scheduled\": {}\n  }\n}",
			"description": "How and when the items will be received by the customer.",
			"routing": {
				"send": {
					"property": "fulfilment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Instructions about the order that the customer wants to submit.",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Bearer token authentication using a JSON Web Token (JWT).",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"PATCH Checkout"
					]
				}
			}
		},
		{
			"displayName": "GET /checkout/{tenant}/{checkoutId}/fulfilment/availabletimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
		{
			"displayName": "Checkout ID",
			"name": "checkoutId",
			"required": true,
			"description": "A unique identifier for a checkout. This is currently a Basket Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Allows the server to identify the application making the request.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Checkout"
					],
					"operation": [
						"GET Checkout Fulfilment Availabletimes"
					]
				}
			}
		},
];
