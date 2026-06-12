import type { INodeProperties } from 'n8n-workflow';

export const restaurantClaimsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					]
				}
			},
			"options": [
				{
					"name": "GET Restaurants Customerclaims",
					"value": "GET Restaurants Customerclaims",
					"action": "Get claims",
					"description": "Provides claims for a given restaurant with optional filtering",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/customerclaims"
						}
					}
				},
				{
					"name": "POST Restaurants Customerclaims Restaurantresponse",
					"value": "POST Restaurants Customerclaims Restaurantresponse",
					"action": "Submit a restaurant response for the claim",
					"description": "Submit a restaurant response for the claim, where the restaurant can tell us if they accept or reject the claim",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/customerclaims/{{$parameter[\"id\"]}}/restaurantresponse"
						}
					}
				},
				{
					"name": "PUT Restaurants Customerclaims Restaurantresponse Justification",
					"value": "PUT Restaurants Customerclaims Restaurantresponse Justification",
					"action": "Add reason and comments to the response",
					"description": "Add reason and optional comments in case of rejection of order claim",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/restaurants/{{$parameter[\"tenant\"]}}/{{$parameter[\"restaurantId\"]}}/customerclaims/{{$parameter[\"id\"]}}/restaurantresponse/justification"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /restaurants/{tenant}/{restaurantId}/customerclaims",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code indicating the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "Just Eat restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "Start date limiter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "End date limiter",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Pagination limit",
			"default": 20,
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
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Pagination offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version",
			"default": "application/json;v=1",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
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
						"Restaurant Claims"
					],
					"operation": [
						"GET Restaurants Customerclaims"
					]
				}
			}
		},
		{
			"displayName": "POST /restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code indicating the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "Just Eat restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Claim identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Indicates the representation of the request body the client is sending (including version)",
			"default": "application/json;v=1",
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
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Decision",
			"name": "decision",
			"type": "options",
			"default": "Accepted",
			"description": "Decision on the claim",
			"options": [
				{
					"name": "Accepted",
					"value": "Accepted"
				},
				{
					"name": "Rejected",
					"value": "Rejected"
				},
				{
					"name": "Partially Accepted",
					"value": "PartiallyAccepted"
				}
			],
			"routing": {
				"send": {
					"property": "decision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {\n    \"decision\": \"Accepted\",\n    \"id\": \"NJ7iYXNrZXRJdGVtLTM2NTc0GTk2LTMwNDY2LXMzOWJxb3hkb2V1cGR4OXc4ZXZvcnc1\"\n  }\n]",
			"description": "Decisions on the items of a claim",
			"routing": {
				"send": {
					"property": "items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "Justification",
			"name": "justification",
			"type": "json",
			"default": "{\n  \"comments\": \"The food was packed properly\",\n  \"reason\": \"Other\"\n}",
			"description": "The reason of the claim rejection and optional comments from the restaurant",
			"routing": {
				"send": {
					"property": "justification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
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
						"Restaurant Claims"
					],
					"operation": [
						"POST Restaurants Customerclaims Restaurantresponse"
					]
				}
			}
		},
		{
			"displayName": "PUT /restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse/justification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "Two letter code indicating the tenant",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Restaurant ID",
			"name": "restaurantId",
			"required": true,
			"description": "Just Eat restaurant identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Claim identifier",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Indicates the representation of the request body the client is sending (including version)",
			"default": "application/json;v=1",
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
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"description": "Comment from the restaurant owner in case they rejected at least one of the items and want to type their own rejection reason",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "options",
			"default": "AlreadyRefunded",
			"description": "One of the predefined reasons",
			"options": [
				{
					"name": "Already Refunded",
					"value": "AlreadyRefunded"
				},
				{
					"name": "Item Replaced",
					"value": "ItemReplaced"
				},
				{
					"name": "Partial Refund Required",
					"value": "PartialRefundRequired"
				},
				{
					"name": "Was Not Missing",
					"value": "WasNotMissing"
				},
				{
					"name": "Will Redeliver",
					"value": "WillRedeliver"
				},
				{
					"name": "Order Was Hot",
					"value": "OrderWasHot"
				},
				{
					"name": "Order Was On Time",
					"value": "OrderWasOnTime"
				},
				{
					"name": "Order Was Packed",
					"value": "OrderWasPacked"
				},
				{
					"name": "Food Was Intact",
					"value": "FoodWasIntact"
				},
				{
					"name": "Add Extra Item",
					"value": "AddExtraItem"
				},
				{
					"name": "Other",
					"value": "Other"
				}
			],
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
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
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
						"Restaurant Claims"
					],
					"operation": [
						"PUT Restaurants Customerclaims Restaurantresponse Justification"
					]
				}
			}
		},
];
