import type { INodeProperties } from 'n8n-workflow';

export const orderAcceptanceWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "POST Acceptance Requested",
					"value": "POST Acceptance Requested",
					"action": "Acceptance requested",
					"description": "This webhook will be invoked whenever acceptance has been requested for the order.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/acceptance-requested"
						}
					}
				},
				{
					"name": "POST Order Accepted",
					"value": "POST Order Accepted",
					"action": "Order accepted",
					"description": "This webhook will be invoked whenever the order was accepted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-accepted"
						}
					}
				},
				{
					"name": "POST Order Cancelled",
					"value": "POST Order Cancelled",
					"action": "Order cancelled",
					"description": "This webhook will be invoked whenever the order was cancelled.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-cancelled"
						}
					}
				},
				{
					"name": "POST Order Rejected",
					"value": "POST Order Rejected",
					"action": "Order rejected",
					"description": "This webhook will be invoked whenever the order was rejected.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/order-rejected"
						}
					}
				},
				{
					"name": "PUT Redelivery Requested",
					"value": "PUT Redelivery Requested",
					"action": "Customer Requested Redelivery",
					"description": "This webhook will be invoked whenever the customer responds to the attempted delivery notification.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/redelivery-requested"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /acceptance-requested",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "Currency",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Customer",
			"name": "Customer",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "Customer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Customer Notes",
			"name": "CustomerNotes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "CustomerNotes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Friendly Order Reference",
			"name": "FriendlyOrderReference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "FriendlyOrderReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Fulfilment",
			"name": "Fulfilment",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {},\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Fulfilment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Is Test",
			"name": "IsTest",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsTest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "Items",
			"type": "json",
			"default": "[\n  {\n    \"Items\": [\n      {\n        \"Items\": {}\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "Items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Payment",
			"name": "Payment",
			"type": "json",
			"default": "{\n  \"Lines\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "Payment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Placed Date",
			"name": "PlacedDate",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "PlacedDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Price Breakdown",
			"name": "PriceBreakdown",
			"type": "json",
			"default": "{\n  \"Fees\": {}\n}",
			"routing": {
				"send": {
					"property": "PriceBreakdown",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Restaurant",
			"name": "Restaurant",
			"type": "json",
			"default": "{\n  \"Address\": {\n    \"Geolocation\": {},\n    \"Lines\": [\n      null\n    ]\n  }\n}",
			"routing": {
				"send": {
					"property": "Restaurant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Restrictions",
			"name": "Restrictions",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "This is a list of types of restricted items contained in the order.",
			"routing": {
				"send": {
					"property": "Restrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "Total Price",
			"name": "TotalPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "TotalPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Acceptance Requested"
					]
				}
			}
		},
		{
			"displayName": "POST /order-accepted",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "Accepted For",
			"name": "AcceptedFor",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "AcceptedFor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Accepted"
					]
				}
			}
		},
		{
			"displayName": "POST /order-cancelled",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "Reason",
			"type": "options",
			"default": "cust_cancelled_changed_mind",
			"description": "The reason the order was cancelled.",
			"options": [
				{
					"name": "Cust Cancelled Changed Mind",
					"value": "cust_cancelled_changed_mind"
				},
				{
					"name": "Cust Cancelled Delivery Too Long",
					"value": "cust_cancelled_delivery_too_long"
				},
				{
					"name": "Cust Cancelled Made Mistake",
					"value": "cust_cancelled_made_mistake"
				},
				{
					"name": "Cust Cancelled Other",
					"value": "cust_cancelled_other"
				},
				{
					"name": "Delivery Partner Cancelled",
					"value": "delivery_partner_cancelled"
				},
				{
					"name": "Rest Cancelled Customer Absent",
					"value": "rest_cancelled_customer_absent"
				},
				{
					"name": "Rest Cancelled Customer Requested",
					"value": "rest_cancelled_customer_requested"
				},
				{
					"name": "Rest Cancelled Declined",
					"value": "rest_cancelled_declined"
				},
				{
					"name": "Rest Cancelled Drivers Unavailable",
					"value": "rest_cancelled_drivers_unavailable"
				},
				{
					"name": "Rest Cancelled Fake Order",
					"value": "rest_cancelled_fake_order"
				},
				{
					"name": "Rest Cancelled Other",
					"value": "rest_cancelled_other"
				},
				{
					"name": "Rest Cancelled Out Of Stock",
					"value": "rest_cancelled_out_of_stock"
				},
				{
					"name": "Rest Cancelled Too Busy",
					"value": "rest_cancelled_too_busy"
				},
				{
					"name": "System Cancelled Other",
					"value": "system_cancelled_other"
				},
				{
					"name": "System Cancelled Test Order",
					"value": "system_cancelled_test_order"
				}
			],
			"routing": {
				"send": {
					"property": "Reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Cancelled"
					]
				}
			}
		},
		{
			"displayName": "POST /order-rejected",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Rejected At",
			"name": "RejectedAt",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "RejectedAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Rejected By",
			"name": "RejectedBy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "RejectedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "Rejected Reason",
			"name": "RejectedReason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "RejectedReason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"POST Order Rejected"
					]
				}
			}
		},
		{
			"displayName": "PUT /redelivery-requested",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "Notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "OrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "OrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "Tenant",
			"type": "string",
			"default": "",
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
						"Order Acceptance Webhooks"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
		{
			"displayName": "Update",
			"name": "Update",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Acceptance Webhooks"
					],
					"operation": [
						"PUT Redelivery Requested"
					]
				}
			}
		},
];
