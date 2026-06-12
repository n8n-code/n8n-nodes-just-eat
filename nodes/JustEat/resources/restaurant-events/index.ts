import type { INodeProperties } from 'n8n-workflow';

export const restaurantEventsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					]
				}
			},
			"options": [
				{
					"name": "POST v1 Restaurants Event Offline",
					"value": "POST v1 Restaurants Event Offline",
					"action": "Create Offline Event",
					"description": "Creates an event for the specified restaurants that indicates a reason for those restaurants to be offline.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/{{$parameter[\"tenant\"]}}/restaurants/event/offline"
						}
					}
				},
				{
					"name": "DELETE v1 Restaurants Event Offline",
					"value": "DELETE v1 Restaurants Event Offline",
					"action": "Delete Offline Event",
					"description": "Removes specified restaurant from offline events. If role header is `System` or `Operations` only events created by the specified role will be affected. If role header is `Restaurant` then all events that have `allowRestaurantOverride=true` will be affected.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/{{$parameter[\"tenant\"]}}/restaurants/{{$parameter[\"id\"]}}/event/offline"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/{tenant}/restaurants/event/offline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE Requester",
			"name": "X-JE-Requester",
			"required": true,
			"description": "Name of the user or system creating the event. Used for auditing purposes",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-JE-Requester": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE User Role",
			"name": "X-JE-User-Role",
			"required": true,
			"default": "System",
			"type": "options",
			"description": "\n- `System` : Role for an automated process action.\n- `Operations` : Role for an operations user action.\n- `Restaurant` : Role for a restaurant owner/employee user action.",
			"options": [
				{
					"name": "System",
					"value": "System"
				},
				{
					"name": "Operations",
					"value": "Operations"
				},
				{
					"name": "Restaurant",
					"value": "Restaurant"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-JE-User-Role": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Allow Restaurant Override",
			"name": "allowRestaurantOverride",
			"type": "boolean",
			"default": true,
			"description": "Whether a restaurant should be allowed to delete this event, regardless of who raised it.",
			"routing": {
				"send": {
					"property": "allowRestaurantOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "",
			"description": "A free text category used to group multiple events. This field is not intended to be used by clients.",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Duration",
			"name": "duration",
			"type": "string",
			"default": "",
			"description": "Either a timespan in the HH:mm format or `untilTomorrow` (this will be the next day at 4:30 am +/- 10 minutes local time). Note if both duration and `endDate` are specified duration takes precedence.",
			"routing": {
				"send": {
					"property": "duration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "ISO 8601 format of the end datetime of the offline event.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Legacy Temp Offline Type",
			"name": "legacyTempOfflineType",
			"type": "options",
			"default": "ClosedDueToEvent",
			"description": "\n- `Unset` : Legacy value meaning online.\n- `None` : Legacy value meaning online.\n- `TempOffline` : The restaurant will go temporarily offline, typically for an undetermined amount of time (no end date).\n- `ClosedToday` : The restaurant will closed for the day and the event will end the next morning.\n- `ClosedDueToEvent` : The restaurant will go offline for an event (e.g. a holiday), these events will typically have an end time.\n- `FailedJctConnection` : The restaurant will go offline due to the POS device losing connection.\n- `NoTrOverride` : The restaurant will go offline for another reason that the restaurant cannot override.\n- `IgnoredOrders` : The restaurant will go offline due to ignoring orders.",
			"options": [
				{
					"name": "Unset",
					"value": "Unset"
				},
				{
					"name": "None",
					"value": "None"
				},
				{
					"name": "Temp Offline",
					"value": "TempOffline"
				},
				{
					"name": "Closed Today",
					"value": "ClosedToday"
				},
				{
					"name": "Closed Due To Event",
					"value": "ClosedDueToEvent"
				},
				{
					"name": "Failed Jct Connection",
					"value": "FailedJctConnection"
				},
				{
					"name": "No Tr Override",
					"value": "NoTrOverride"
				},
				{
					"name": "Ignored Orders",
					"value": "IgnoredOrders"
				}
			],
			"routing": {
				"send": {
					"property": "legacyTempOfflineType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name of the offline event to be created.",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"description": "The reason for creating the offline event.",
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Restaurant Ids",
			"name": "restaurantIds",
			"type": "string",
			"default": "",
			"description": "A comma separated list of the IDs of the restaurants to include in the offline event. No limit to the number accepted by the endpoint, but unexpected behaviour mat occur at more than 500 IDs.",
			"routing": {
				"send": {
					"property": "restaurantIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "",
			"description": "ISO 8601 format of the start datetime of the offline event.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"POST v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/{tenant}/restaurants/{id}/event/offline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The identifier for the restaurant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE Requester",
			"name": "X-JE-Requester",
			"required": true,
			"description": "Name of the user or system creating the event. Used for auditing purposes",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-JE-Requester": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
		{
			"displayName": "X JE User Role",
			"name": "X-JE-User-Role",
			"required": true,
			"description": "The role the user or system creating the event has assumed.",
			"default": "System",
			"type": "options",
			"options": [
				{
					"name": "System",
					"value": "System"
				},
				{
					"name": "Operations",
					"value": "Operations"
				},
				{
					"name": "Restaurant",
					"value": "Restaurant"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-JE-User-Role": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Events"
					],
					"operation": [
						"DELETE v1 Restaurants Event Offline"
					]
				}
			}
		},
];
