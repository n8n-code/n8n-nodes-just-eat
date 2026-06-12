import type { INodeProperties } from 'n8n-workflow';

export const restaurantEventsWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "PUT Restaurant Offline Status",
					"value": "PUT Restaurant Offline Status",
					"action": "Restaurant Offline Status",
					"description": "Callback to notify that a restaurant has been taken offline through an active Restaurant Event or there's been a change in whether the restaurant can override a previous offline status.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurant-offline-status"
						}
					}
				},
				{
					"name": "PUT Restaurant Online Status",
					"value": "PUT Restaurant Online Status",
					"action": "Restaurant Online Status",
					"description": "Callback to notify that a restaurant is now able to come back online as there are no longer any active offline Restaurant Events",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurant-online-status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /restaurant-offline-status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Allow Restaurant Override",
			"name": "AllowRestaurantOverride",
			"type": "boolean",
			"default": true,
			"description": "Whether a restaurant should be allowed to reverse this offline status change through calls to the Restaurant Events endpoints.",
			"routing": {
				"send": {
					"property": "AllowRestaurantOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Is Offline",
			"name": "IsOffline",
			"type": "boolean",
			"default": true,
			"description": "Represents the current offline status of the restaurant.",
			"routing": {
				"send": {
					"property": "IsOffline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "RestaurantId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the restaurant that has their offline status changed.",
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
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "options",
			"default": "au",
			"description": "The two letter country code for the market in which the restaurant operates.",
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
					"property": "Tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Offline Status"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurant-online-status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Allow Restaurant Override",
			"name": "AllowRestaurantOverride",
			"type": "boolean",
			"default": true,
			"description": "Whether a restaurant should be allowed to reverse this offline status change through calls to the Restaurant Events endpoints.",
			"routing": {
				"send": {
					"property": "AllowRestaurantOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Is Offline",
			"name": "IsOffline",
			"type": "boolean",
			"default": true,
			"description": "Represents the current offline status of the restaurant.",
			"routing": {
				"send": {
					"property": "IsOffline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "RestaurantId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the restaurant that has their offline status changed.",
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
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "options",
			"default": "au",
			"description": "The two letter country code for the market in which the restaurant operates.",
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
					"property": "Tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events Webhooks"
					],
					"operation": [
						"PUT Restaurant Online Status"
					]
				}
			}
		},
];
