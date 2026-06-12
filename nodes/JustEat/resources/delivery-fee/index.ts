import type { INodeProperties } from 'n8n-workflow';

export const deliveryFeeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Fee"
					]
				}
			},
			"options": [
				{
					"name": "GET Delivery Fees",
					"value": "GET Delivery Fees",
					"action": "Get restaurant delivery fees",
					"description": "Retrieve delivery fees for many restaurants. Returns fees and minimum order values required for delivery orders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/delivery-fees/{{$parameter[\"tenant\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /delivery-fees/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Fee"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Tenant containing the restaurants.",
			"default": "uk",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Fee"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Restaurant Ids",
			"name": "restaurantIds",
			"required": true,
			"description": "Restaurant IDs which fees are requested for. e.g. `?restaurantIds=1,2,3,4`",
			"default": [
				"1",
				"2",
				"3",
				"4"
			],
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "restaurantIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Fee"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Delivery Time",
			"name": "deliveryTime",
			"required": true,
			"description": "Delivery date/time when fees are required (ISO8601 format).",
			"default": "2019-09-05T12:43:48.431Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deliveryTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Fee"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Zone",
			"name": "zone",
			"description": "Postcode or other location name identifying the location to which delivery is required. For use when precise location is not available. This will be removed in future in favour of location.",
			"default": "BS1",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "zone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Fee"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
		{
			"displayName": "Latlong",
			"name": "latlong",
			"description": "Point to which delivery is required (latitude, longitude). Supply this where possible as support for zone-only based lookups will be removed in future.",
			"default": [
				51.3851513,
				-2.0841275
			],
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "latlong",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Delivery Fee"
					],
					"operation": [
						"GET Delivery Fees"
					]
				}
			}
		},
];
