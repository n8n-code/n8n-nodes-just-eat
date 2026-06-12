import type { INodeProperties } from 'n8n-workflow';

export const consumersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					]
				}
			},
			"options": [
				{
					"name": "GET Consumers",
					"value": "GET Consumers",
					"action": "Get consumers details",
					"description": "Currently this operation only supports retrieving a count of consumer accounts given an email address.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "POST Consumers",
					"value": "POST Consumers",
					"action": "Create consumer",
					"description": "Creates a consumer for the given tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}"
						}
					}
				},
				{
					"name": "GET Consumers Me Communication Preferences",
					"value": "GET Consumers Me Communication Preferences",
					"action": "Get communication preferences",
					"description": "Get all communication preferences for a given consumer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences"
						}
					}
				},
				{
					"name": "PUT Consumers Me Communication Preferences",
					"value": "PUT Consumers Me Communication Preferences",
					"action": "Set only the channel subscriptions for a given consumer's communication preference type",
					"description": "Set only the channel subscriptions for a given consumer's communication preference type. E.g., An empty list of subscribed Channels implies unsubscribe from all channels.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "DELETE Consumers Me Communication Preferences Subscribed Channels",
					"value": "DELETE Consumers Me Communication Preferences Subscribed Channels",
					"action": "Remove subscription of a specific communication preference channel",
					"description": "Remove subscription of a specific communication preference channel.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences/{{$parameter[\"type\"]}}/subscribedChannels/{{$parameter[\"channel\"]}}"
						}
					}
				},
				{
					"name": "POST Consumers Me Communication Preferences Subscribed Channels",
					"value": "POST Consumers Me Communication Preferences Subscribed Channels",
					"action": "Subscribe to a specific communication preference channel",
					"description": "Subscribe to a specific communication preference channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/consumers/{{$parameter[\"tenant\"]}}/me/communication-preferences/{{$parameter[\"type\"]}}/subscribedChannels/{{$parameter[\"channel\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /consumers/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Email Address",
			"name": "emailAddress",
			"required": true,
			"description": "Email address of the consumer.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "emailAddress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Account Type",
			"name": "accountType",
			"required": true,
			"description": "The account type of the consumer - currently only 'registered' accounts are supported.",
			"default": "registered",
			"type": "options",
			"options": [
				{
					"name": "Registered",
					"value": "registered"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "accountType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"required": true,
			"description": "Returns the number of consumers that matches the `emailAddress` and `accountType`. The query value should be empty, e.g. `/consumers/uk/?emailAddress=someone@email.com&accountType=registered&count`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"GET Consumers"
					]
				}
			}
		},
		{
			"displayName": "POST /consumers/{tenant}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"required": true,
			"description": "The identifier for the tenant. The only supported tenants are `uk`, `au` and `nz`",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email Address",
			"name": "emailAddress",
			"type": "string",
			"default": "",
			"description": "The consumer's email address",
			"routing": {
				"send": {
					"property": "emailAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "",
			"description": "The consumer's first name",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "",
			"description": "The consumer's last name",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Marketing Preferences",
			"name": "marketingPreferences",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The selected marketing preferences for the consumer",
			"routing": {
				"send": {
					"property": "marketingPreferences",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "The consumer's password",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "Registration Source",
			"name": "registrationSource",
			"type": "options",
			"default": "Native",
			"description": "The registration source of the consumer. Australia and New Zealand only support Guest",
			"options": [
				{
					"name": "Native",
					"value": "Native"
				},
				{
					"name": "Guest",
					"value": "Guest"
				}
			],
			"routing": {
				"send": {
					"property": "registrationSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers"
					]
				}
			}
		},
		{
			"displayName": "GET /consumers/{tenant}/me/communication-preferences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"GET Consumers Me Communication Preferences"
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
						"Consumers"
					],
					"operation": [
						"GET Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "PUT /consumers/{tenant}/me/communication-preferences/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
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
						"Consumers"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of communication preferences.",
			"default": "marketing",
			"type": "options",
			"options": [
				{
					"name": "Marketing",
					"value": "marketing"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "Subscribed Channels",
			"name": "subscribedChannels",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of channels that the consumer should only be subscribed to.",
			"routing": {
				"send": {
					"property": "subscribedChannels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"PUT Consumers Me Communication Preferences"
					]
				}
			}
		},
		{
			"displayName": "DELETE /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
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
						"Consumers"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of communication preference.",
			"default": "marketing",
			"type": "options",
			"options": [
				{
					"name": "Marketing",
					"value": "marketing"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"required": true,
			"description": "The channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"DELETE Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
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
						"Consumers"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of communication preferences.",
			"default": "marketing",
			"type": "options",
			"options": [
				{
					"name": "Marketing",
					"value": "marketing"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "Channel",
			"name": "channel",
			"required": true,
			"description": "The channel.",
			"default": "email",
			"type": "options",
			"options": [
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Sms",
					"value": "sms"
				},
				{
					"name": "Push",
					"value": "push"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consumers"
					],
					"operation": [
						"POST Consumers Me Communication Preferences Subscribed Channels"
					]
				}
			}
		},
];
