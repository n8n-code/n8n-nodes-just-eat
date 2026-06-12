import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "GET Search Autocomplete",
					"value": "GET Search Autocomplete",
					"action": "Get auto-completed search terms",
					"description": "Provides auto-completed search terms for restaurants, cuisines and products available in a given location.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/autocomplete/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "GET Search Restaurants",
					"value": "GET Search Restaurants",
					"action": "Search restaurants",
					"description": "Get restaurants available in a given lat-long which match a search term.\r\nMatches can be found against the name, a cuisine or a product.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/restaurants/{{$parameter[\"tenant\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search/autocomplete/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Autocomplete"
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
						"Search"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "searchTerm",
			"required": true,
			"description": "User's search term - at least one character required",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Latlong",
			"name": "latlong",
			"required": true,
			"description": "The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude.",
			"default": [
				51.501285,
				-0.1424422
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
						"Search"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of auto-completed terms returned by the API. Defaults to 7. Valid values 1 - 10",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "GET /search/restaurants/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Restaurants"
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
						"Search"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "searchTerm",
			"required": true,
			"description": "User's search term.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Latlong",
			"name": "latlong",
			"required": true,
			"description": "The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude.",
			"default": [
				51.501285,
				-0.1424422
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
						"Search"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of restaurants returned by the API.\r\nValid values are numbers between 1 and 500.\r\nIf not provided, the limit defaults to 300.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Restaurants"
					]
				}
			}
		},
];
