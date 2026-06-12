import type { INodeProperties } from 'n8n-workflow';

export const deliveryPoolsApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					]
				}
			},
			"options": [
				{
					"name": "GET Delivery Pools",
					"value": "GET Delivery Pools",
					"action": "Get your delivery pools",
					"description": "A delivery pool is a named group of drivers which deliver food for a set of restaurants.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/delivery/pools"
						}
					}
				},
				{
					"name": "POST Delivery Pools",
					"value": "POST Delivery Pools",
					"action": "Create a new delivery pool",
					"description": "A delivery pool is a named group of drivers which deliver food for a set of restaurants.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/delivery/pools"
						}
					}
				},
				{
					"name": "DELETE Delivery Pools",
					"value": "DELETE Delivery Pools",
					"action": "Delete a delivery pool",
					"description": "The restaurants will no longer be associated with the pool.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Delivery Pools",
					"value": "PATCH Delivery Pools",
					"action": "Modify a delivery pool",
					"description": "Modify a delivery pool, changing its name, restaurants or both",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}"
						}
					}
				},
				{
					"name": "PUT Delivery Pools",
					"value": "PUT Delivery Pools",
					"action": "Replace an existing delivery pool",
					"description": "Replace an existing delivery pool changing all of its properties",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}"
						}
					}
				},
				{
					"name": "GET Delivery Pools Availability Relative",
					"value": "GET Delivery Pools Availability Relative",
					"action": "Get availability for pickup",
					"description": "Get the current amount of time it will take a driver to collect a new order from a restaurant in the pool.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/availability/relative"
						}
					}
				},
				{
					"name": "PUT Delivery Pools Availability Relative",
					"value": "PUT Delivery Pools Availability Relative",
					"action": "Set availability for pickup",
					"description": "Set the average amount of time it will take a driver to collect a new order from a restaurant in the pool.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/availability/relative"
						}
					}
				},
				{
					"name": "PUT Delivery Pools Hours",
					"value": "PUT Delivery Pools Hours",
					"action": "Set the delivery pools daily start and end times",
					"description": "Set the daily start and end times for a pool or set closed flag if the pool does not operate on that day. Start and end times for all days must be provided. Though the API accepts array of start and end times for each day, multiple start and end time for a day are not accepted. If the end time for a day is equal to or before start time, end time will be considered as time for the next day.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/hours"
						}
					}
				},
				{
					"name": "DELETE Delivery Pools Restaurants",
					"value": "DELETE Delivery Pools Restaurants",
					"action": "Remove restaurants from a delivery pool",
					"description": "Remove restaurants from a delivery pool",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/restaurants"
						}
					}
				},
				{
					"name": "PUT Delivery Pools Restaurants",
					"value": "PUT Delivery Pools Restaurants",
					"action": "Add restaurants to an existing delivery pool",
					"description": "Add additional restaurants to a delivery pool",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/delivery/pools/{{$parameter[\"deliveryPoolId\"]}}/restaurants"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /delivery/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"GET Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "POST /delivery/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"POST Delivery Pools"
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
			"description": "The name of the pool, used by operations teams, in reports, etc.",
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
						"Delivery Pools API"
					],
					"operation": [
						"POST Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"POST Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "DELETE /delivery/pools/{deliveryPoolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"DELETE Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "PATCH /delivery/pools/{deliveryPoolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PATCH Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the pool, used by operations teams, in reports, etc.",
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
						"Delivery Pools API"
					],
					"operation": [
						"PATCH Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PATCH Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools"
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
			"description": "The name of the pool, used by operations teams, in reports, etc.",
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
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /delivery/pools/{deliveryPoolId}/availability/relative",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"GET Delivery Pools Availability Relative"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}/availability/relative",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Availability Relative"
					]
				}
			}
		},
		{
			"displayName": "Best Guess",
			"name": "bestGuess",
			"type": "string",
			"default": "",
			"description": "Your best estimation (hh:mm:ss)",
			"routing": {
				"send": {
					"property": "bestGuess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Availability Relative"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}/hours",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Friday",
			"name": "friday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "friday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Monday",
			"name": "monday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "monday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Saturday",
			"name": "saturday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "saturday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sunday",
			"name": "sunday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "sunday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Thursday",
			"name": "thursday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "thursday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tuesday",
			"name": "tuesday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "tuesday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Wednesday",
			"name": "wednesday",
			"type": "json",
			"default": "{\n  \"poolTimes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "wednesday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Hours"
					]
				}
			}
		},
		{
			"displayName": "DELETE /delivery/pools/{deliveryPoolId}/restaurants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"DELETE Delivery Pools Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Restaurants",
			"name": "restaurants",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of Just Eat restaurant ids served by the delivery pool.",
			"routing": {
				"send": {
					"property": "restaurants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"DELETE Delivery Pools Restaurants"
					]
				}
			}
		},
		{
			"displayName": "PUT /delivery/pools/{deliveryPoolId}/restaurants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Pools API"
					],
					"operation": [
						"PUT Delivery Pools Restaurants"
					]
				}
			}
		},
];
