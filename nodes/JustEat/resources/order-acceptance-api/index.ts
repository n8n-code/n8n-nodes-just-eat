import type { INodeProperties } from 'n8n-workflow';

export const orderAcceptanceApiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					]
				}
			},
			"options": [
				{
					"name": "PUT Orders Accept",
					"value": "PUT Orders Accept",
					"action": "Accept order",
					"description": "Call when an order has been accepted. An order can only be accepted if it hasn't previously been accepted, rejected, cancelled or ignored",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/accept"
						}
					}
				},
				{
					"name": "PUT Orders Cancel",
					"value": "PUT Orders Cancel",
					"action": "Cancel order",
					"description": "Call when an order has been cancelled by Ops. Cancelling an order overrides any previous accept/reject calls. This should not be used for restaurant rejection but only from Ops involvement",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/cancel"
						}
					}
				},
				{
					"name": "POST Orders Complete",
					"value": "POST Orders Complete",
					"action": "Complete order",
					"description": "Call when an order is complete. An order can only be marked as complete if it hasn't already been marked as cancelled or complete.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/complete"
						}
					}
				},
				{
					"name": "PUT Orders Duedate",
					"value": "PUT Orders Duedate",
					"action": "Update order ETA",
					"description": "Use this to update the estimated time of arrival for an order (i.e. when you expect the customer to receive the food). NOTE: An initial estimate is given [upon acceptance](#/paths/~1orders~1{orderId}~1accept/put). This endpoint can be used to update that estimate.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/duedate"
						}
					}
				},
				{
					"name": "PUT Orders Ignore",
					"value": "PUT Orders Ignore",
					"action": "Ignore order",
					"description": "Call when an order has been ignored by restaurant. An order can only be ignored if it hasn't previously been accepted, rejected, cancelled or ignored",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/ignore"
						}
					}
				},
				{
					"name": "POST Orders Readyforcollection",
					"value": "POST Orders Readyforcollection",
					"action": "Mark order as ready for collection",
					"description": "Call when a collection order is ready to be collected by the customer. An order can only be marked as ready for collection if it is a collection order in the accepted state.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/readyforcollection"
						}
					}
				},
				{
					"name": "PUT Orders Reject",
					"value": "PUT Orders Reject",
					"action": "Reject order",
					"description": "Call when an order has been rejected. An order can only be rejected if it hasn't previously been accepted, rejected, cancelled or ignored",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"orderId\"]}}/reject"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /orders/{orderId}/accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Accept"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Accept"
					]
				}
			}
		},
		{
			"displayName": "Time Accepted For",
			"name": "TimeAcceptedFor",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeAcceptedFor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Accept"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Cancel"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Cancel"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "Message",
			"type": "string",
			"default": "",
			"description": "Reason why this order is being cancelled.",
			"routing": {
				"send": {
					"property": "Message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{orderId}/complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"POST Orders Complete"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "The ID of the order to mark as complete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"POST Orders Complete"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/duedate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Duedate"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Duedate"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "DueDate",
			"type": "string",
			"default": "",
			"description": "The updated ETA for the order",
			"routing": {
				"send": {
					"property": "DueDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Duedate"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/ignore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Ignore"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Ignore"
					]
				}
			}
		},
		{
			"displayName": "POST /orders/{orderId}/readyforcollection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"POST Orders Readyforcollection"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "The ID of the order to mark as ready for collection",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"POST Orders Readyforcollection"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{orderId}/reject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Reject"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Reject"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "Message",
			"type": "string",
			"default": "",
			"description": "Reason why this order is being rejected.",
			"routing": {
				"send": {
					"property": "Message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance API"
					],
					"operation": [
						"PUT Orders Reject"
					]
				}
			}
		},
];
