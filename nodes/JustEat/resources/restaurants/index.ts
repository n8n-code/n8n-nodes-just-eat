import type { INodeProperties } from 'n8n-workflow';

export const restaurantsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					]
				}
			},
			"options": [
				{
					"name": "Search By Location",
					"value": "Search By Location",
					"action": "Get restaurants by location",
					"description": "Provides details of all restaurants that deliver to the specified location",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/bylatlong"
						}
					}
				},
				{
					"name": "Search By Postcode",
					"value": "Search By Postcode",
					"action": "Get restaurants by postcode",
					"description": "Provides details of restaurants that deliver to the specified postcode",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/bypostcode/{{$parameter[\"postcode\"]}}"
						}
					}
				},
				{
					"name": "PUT Restaurants Driver Eta",
					"value": "PUT Restaurants Driver Eta",
					"action": "Set ETA for pickup",
					"description": "Set the average amount of time it will take a driver to collect a new order from a restaurant.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/driver/eta"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue",
					"value": "GET Restaurants Catalogue",
					"action": "Get product catalogue",
					"description": "Get details of the restaurant's product catalogue",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Availabilities",
					"value": "GET Restaurants Catalogue Availabilities",
					"action": "Get all availabilities",
					"description": "Get all availabilities on the restaurant's menu",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/availabilities"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Categories",
					"value": "GET Restaurants Catalogue Categories",
					"action": "Get all categories",
					"description": "Get all categories on the restaurant's menu",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/categories"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Categories Items",
					"value": "GET Restaurants Catalogue Categories Items",
					"action": "Get all category item IDs",
					"description": "Get all item IDs which are assigned to the specified category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/categories/{{$parameter[\"categoryId\"]}}/items"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items",
					"value": "GET Restaurants Catalogue Items",
					"action": "Get all menu items",
					"description": "Get all menu items on the restaurant's menu",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Dealgroups",
					"value": "GET Restaurants Catalogue Items Dealgroups",
					"action": "Get all menu item deal groups",
					"description": "Get all deal groups for the menu item with the provided ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/dealgroups"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Dealgroups Dealitemvariations",
					"value": "GET Restaurants Catalogue Items Dealgroups Dealitemvariations",
					"action": "Get all deal item variations for a deal group",
					"description": "Get all deal item variations for the deal group with the specified ID, in the menu item with the specified ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/dealgroups/{{$parameter[\"dealGroupId\"]}}/dealitemvariations"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Modifiergroups",
					"value": "GET Restaurants Catalogue Items Modifiergroups",
					"action": "Get all menu item modifier groups",
					"description": "Get all modifier groups for the menu item with the provided ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/modifiergroups"
						}
					}
				},
				{
					"name": "GET Restaurants Catalogue Items Variations",
					"value": "GET Restaurants Catalogue Items Variations",
					"action": "Get all menu item variations",
					"description": "Get all variations for the menu item with the provided ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/catalogue/items/{{$parameter[\"itemId\"]}}/variations"
						}
					}
				},
				{
					"name": "GET Restaurants Fees",
					"value": "GET Restaurants Fees",
					"action": "Get Restaurant Fees",
					"description": "Get the fees currently applied to a restaurant in a particular tenant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/fees"
						}
					}
				},
				{
					"name": "PUT Restaurants Fees",
					"value": "PUT Restaurants Fees",
					"action": "Create or Update Restaurant Fees",
					"description": "Creates or Updates the fees for a restaurant in a particular tenant",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/fees"
						}
					}
				},
				{
					"name": "GET Restaurants Menu",
					"value": "GET Restaurants Menu",
					"action": "Get the latest version of the restaurant's full menu",
					"description": "The endpoint will return a 301 redirect containing a URL that will grant access to the Menu file. The URL will only be available for a short period of time. The Menu file will be a single document containing the information that Just Eat has and uses to display the Menu on our customer clients. This will include a collection of items, a collection of Categories and a collection of Availabilities for when the items are available. Partners will be able to retrieve the Menu for any Restaurants that they currently manage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/menu"
						}
					}
				},
				{
					"name": "Put Menu For Ingestion",
					"value": "Put Menu For Ingestion",
					"action": "Create or update a menu",
					"description": "This will begin an asynchronous process that will lead to that menu becoming live on the Just Eat platform",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/menu"
						}
					}
				},
				{
					"name": "Get Restaurant Service Times",
					"value": "Get Restaurant Service Times",
					"action": "Get service times",
					"description": "Gets the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/servicetimes"
						}
					}
				},
				{
					"name": "Put Restaurant Service Times",
					"value": "Put Restaurant Service Times",
					"action": "Create or update service times",
					"description": "Creates or updates the service times (the weekly times at which a restaurant is in service for delivery or collection) for a restaurant",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/servicetimes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restaurants/bylatlong",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "OAuth2 token issued for logged in consumer or API key issued to partner",
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
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Accept Tenant",
			"name": "Accept-Tenant",
			"description": "A valid country code, e.g. \"uk\". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Tenant": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"required": true,
			"description": "Filter search results to only include restaurants that deliver to the specified location",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"required": true,
			"description": "Filter search results to only include restaurants that deliver to the specified location",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Cuisine",
			"name": "cuisine",
			"description": "Filter search results to only include restaurants that offer the specified cuisine",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cuisine",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Restaurant Name",
			"name": "restaurantName",
			"description": "Filter search results to only include restaurants that have a name that matches the specified value",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "restaurantName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "Brand Name",
			"name": "brandName",
			"description": "Filter search results to only include restaurants of the specified brand",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "brandName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Location"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/bypostcode/{postcode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"description": "OAuth2 token issued for logged in consumer or API key issued to partner",
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
						"Restaurants"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Accept Tenant",
			"name": "Accept-Tenant",
			"description": "A valid country code, e.g. \"uk\". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Tenant": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Postcode",
			"name": "postcode",
			"required": true,
			"description": "Filter search results to only include restaurants that deliver to the specified postcode",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Cuisine",
			"name": "cuisine",
			"description": "Filter search results to only include restaurants that offer the specified cuisine",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cuisine",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Restaurant Name",
			"name": "restaurantName",
			"description": "Filter search results to only include restaurants that have a name that matches the specified value",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "restaurantName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "Brand Name",
			"name": "brandName",
			"description": "Filter search results to only include restaurants of the specified brand",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "brandName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Search By Postcode"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/driver/eta",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Driver Eta"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"etaAtRestaurant\": 1,\n  \"restaurantId\": \"1\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Driver Eta"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue"
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/availabilities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of availabilities to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Availabilities"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of categories to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/categories/{categoryId}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "categoryId",
			"required": true,
			"description": "The category ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of item IDs to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Categories Items"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/dealgroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/dealgroups/{dealGroupId}/dealitemvariations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Deal Group ID",
			"name": "dealGroupId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Dealgroups Dealitemvariations"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/modifiergroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Modifiergroups"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/variations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Request tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Item ID",
			"name": "itemId",
			"required": true,
			"description": "The menu item ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "The maximum number of menu items to fetch.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Catalogue Items Variations"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code for which country the restaurant resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "A unique identifier for a restaurant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"description": "Request header string that allows the server to identify the application making the request.",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Fees"
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/fees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "A two-character country code for which country the restaurant resides in.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "A unique identifier for a restaurant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"description": "Request header string that allows the server to identify the application making the request.",
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
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "Bag Fee",
			"name": "bagFee",
			"type": "json",
			"default": "{\n  \"description\": \"A charge for bags in delivery\",\n  \"serviceTypes\": {\n    \"collection\": {\n      \"amount\": 5\n    },\n    \"default\": {\n      \"amount\": 0\n    },\n    \"delivery\": {\n      \"amount\": 10\n    }\n  }\n}",
			"description": "The object which encapsulates a Fee",
			"routing": {
				"send": {
					"property": "bagFee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Fees"
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
						"Restaurants"
					],
					"operation": [
						"PUT Restaurants Fees"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/menu",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The tenant of the restaurant in which to put a menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier to associated with the menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. Bearer ABCDE123456789",
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
						"Restaurants"
					],
					"operation": [
						"GET Restaurants Menu"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/menu",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The tenant of the restaurant in which to put a menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier to associated with the menu",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`",
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
						"Restaurants"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"description": "Used to denote the version of the menu payload within the body, will default to latest if not supplied e.g. application/=1.0",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/menu<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Menu For Ingestion"
					]
				}
			}
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/servicetimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Get Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code of restaurant's tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Get Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Get Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/servicetimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code of restaurant's tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "The restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
		{
			"displayName": "Service Times",
			"name": "serviceTimes",
			"type": "json",
			"default": "{\n  \"friday\": {\n    \"collection\": [\n      {}\n    ],\n    \"delivery\": {}\n  },\n  \"monday\": {},\n  \"saturday\": {},\n  \"sunday\": {},\n  \"thursday\": {},\n  \"tuesday\": {},\n  \"wednesday\": {}\n}",
			"description": "The desired times at which a restaurant is in service",
			"routing": {
				"send": {
					"property": "serviceTimes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurants"
					],
					"operation": [
						"Put Restaurant Service Times"
					]
				}
			}
		},
];
