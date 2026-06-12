import type { INodeProperties } from 'n8n-workflow';

export const restaurantOrderTimesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					]
				}
			},
			"options": [
				{
					"name": "Get Order Times",
					"value": "Get Order Times",
					"action": "Get the restaurant's delivery and collection lead times",
					"description": "Get list of the delivery and collection lead times supplied by the restaurant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/ordertimes"
						}
					}
				},
				{
					"name": "Update Order Time",
					"value": "Update Order Time",
					"action": "Update the restaurant's delivery and collection lead times",
					"description": "Update the restaurant's delivery and collection lead times",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/ordertimes/{{$parameter[\"dayOfWeek\"]}}/{{$parameter[\"serviceType\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/ordertimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A valid country code, e.g. \"uk\".",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "OAuth2 token issued for logged in restaurant",
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
						"Restaurant Order Times"
					],
					"operation": [
						"Get Order Times"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/ordertimes/{dayOfWeek}/{serviceType}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A valid country code, e.g. \"uk\".",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant Id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Day Of Week",
			"name": "dayOfWeek",
			"required": true,
			"description": "Day of week for order time",
			"default": "Sunday",
			"type": "options",
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
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Service Type",
			"name": "serviceType",
			"required": true,
			"description": "Service type of the order time",
			"default": "Delivery",
			"type": "options",
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
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "OAuth2 token issued for logged in restaurant OR API token for third party, in the format `Bearer {api_key}`",
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
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
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
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
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
						"Restaurant Order Times"
					],
					"operation": [
						"Update Order Time"
					]
				}
			}
		},
];
