import type { INodeProperties } from 'n8n-workflow';

export const orderDeliveryWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "PUT Driver Assigned To Delivery",
					"value": "PUT Driver Assigned To Delivery",
					"action": "Driver Assigned to Delivery",
					"description": "Driver Assigned to Delivery",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-assigned-to-delivery"
						}
					}
				},
				{
					"name": "PUT Driver At Delivery Address",
					"value": "PUT Driver At Delivery Address",
					"action": "Driver at delivery address",
					"description": "Driver at delivery address",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-at-delivery-address"
						}
					}
				},
				{
					"name": "PUT Driver At Restaurant",
					"value": "PUT Driver At Restaurant",
					"action": "Driver at restaurant",
					"description": "Driver at restaurant",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-at-restaurant"
						}
					}
				},
				{
					"name": "PUT Driver Has Delivered Order",
					"value": "PUT Driver Has Delivered Order",
					"action": "Driver has delivered order",
					"description": "Driver has delivered order",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-has-delivered-order"
						}
					}
				},
				{
					"name": "PUT Driver Location",
					"value": "PUT Driver Location",
					"action": "Driver Location",
					"description": "Driver Location",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-location"
						}
					}
				},
				{
					"name": "PUT Driver On Their Way To Delivery Address",
					"value": "PUT Driver On Their Way To Delivery Address",
					"action": "Driver on their way to delivery address",
					"description": "Driver on their way to delivery address",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/driver-on-their-way-to-delivery-address"
						}
					}
				},
				{
					"name": "PUT Order Is Ready For Pickup",
					"value": "PUT Order Is Ready For Pickup",
					"action": "Order ready for pickup",
					"description": "<p>The \"Ready for pickup\" event lets the delivery partner know that the food has been cooked and is now ready for collection up from the restaurant.</p><p>When this event is received, it is important that you let your driver know that the order should now be collected from inside the restaurant. For example, this driver notification could take the form of an in-app notification or an SMS message.</p><p>This communication is needed to support restaurants who are unable to accommodate drivers inside their premises, as it allows restaurants to notify drivers waiting outside that they should come inside to collect their order.</p><p>NB&semi; This event can be sent by the restaurant at any point after the order is accepted by the restaurant (for instance, this event may be sent before the driver has arrived at the restaurant).</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/order-is-ready-for-pickup"
						}
					}
				},
				{
					"name": "PUT Order Requires Delivery Acceptance",
					"value": "PUT Order Requires Delivery Acceptance",
					"action": "Order requires delivery acceptance",
					"description": "This webhook will be invoked when we have determined that an order is required acceptance for delivery. Upon receiving the request, the order should be scheduled for pickup by a courier/driver. We expect an immediate `201` response from this webhook to denote that you have received the request.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/order-requires-delivery-acceptance"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /driver-assigned-to-delivery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Assigned To Delivery"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-at-delivery-address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-at-restaurant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver At Restaurant"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-has-delivered-order",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Has Delivered Order"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-location",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Location"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "Location",
			"type": "json",
			"default": "{\n  \"Latitude\": 51.51641,\n  \"Longitude\": -0.103198\n}",
			"routing": {
				"send": {
					"property": "Location",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Location"
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Location"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver Location"
					]
				}
			}
		},
		{
			"displayName": "PUT /driver-on-their-way-to-delivery-address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Contact Number",
			"name": "DriverContactNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverContactNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Driver Name",
			"name": "DriverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "DriverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Delivery Time",
			"name": "EstimatedDeliveryTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedDeliveryTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Estimated Pickup Time",
			"name": "EstimatedPickupTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "EstimatedPickupTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "DriverAssigned",
			"options": [
				{
					"name": "Driver Assigned",
					"value": "DriverAssigned"
				},
				{
					"name": "Driver At Restaurant",
					"value": "DriverAtRestaurant"
				},
				{
					"name": "On Its Way",
					"value": "OnItsWay"
				},
				{
					"name": "At Delivery Address",
					"value": "AtDeliveryAddress"
				},
				{
					"name": "Delivered",
					"value": "Delivered"
				}
			],
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "Time Stamp",
			"name": "TimeStamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "TimeStamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Driver On Their Way To Delivery Address"
					]
				}
			}
		},
		{
			"displayName": "PUT /order-is-ready-for-pickup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Order Is Ready For Pickup"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "Ready for pickup",
			"options": [
				{
					"name": "Ready For Pickup",
					"value": "Ready for pickup"
				}
			],
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
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Order Is Ready For Pickup"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "Timestamp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Order Is Ready For Pickup"
					]
				}
			}
		},
		{
			"displayName": "PUT /order-requires-delivery-acceptance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Order Requires Delivery Acceptance"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"BasketInfo\": {\n    \"BasketId\": \"ABCb8DzdnUy7G481b0JN5g\",\n    \"DeliveryCharge\": 5,\n    \"Discount\": 4.78,\n    \"Discounts\": [\n      {\n        \"Discount\": 10,\n        \"DiscountType\": \"Percent\",\n        \"Id\": 21950,\n        \"QualifyingValue\": 4.78\n      }\n    ],\n    \"GroupedBasketItems\": [\n      {\n        \"BasketItem\": {\n          \"CombinedPrice\": 3.58,\n          \"Discounts\": [\n            {\n              \"Amount\": 4.5,\n              \"DiscountType\": \"Percent\"\n            }\n          ],\n          \"MealParts\": [\n            {\n              \"GroupId\": 1,\n              \"MealPartId\": 45822750,\n              \"Name\": \"Any Sides?\",\n              \"OptionalAccessories\": [\n                {\n                  \"Name\": \"Add Bacon\",\n                  \"OptionalAccessoryId\": 56168,\n                  \"Quantity\": 1,\n                  \"UnitPrice\": 0.5\n                }\n              ],\n              \"RequiredAccessories\": [\n                {\n                  \"GroupId\": 3,\n                  \"Name\": \"Coca-Cola Original Taste\",\n                  \"RequiredAccessoryId\": 225025,\n                  \"UnitPrice\": 0.16\n                }\n              ]\n            }\n          ],\n          \"MenuCardNumber\": \"1\",\n          \"MultiBuyDiscounts\": [\n            {\n              \"Amount\": 4.5,\n              \"DiscountType\": \"Percent\"\n            }\n          ],\n          \"Name\": \"Mini Fillet Burger\",\n          \"OptionalAccessories\": [\n            {\n              \"Name\": \"Add Bacon\",\n              \"OptionalAccessoryId\": 56168,\n              \"Quantity\": 1,\n              \"UnitPrice\": 0.5\n            }\n          ],\n          \"ProductId\": 45858074,\n          \"ProductTypeId\": 428,\n          \"RequiredAccessories\": [\n            {\n              \"GroupId\": 3,\n              \"Name\": \"Large Meal\",\n              \"RequiredAccessoryId\": 225025,\n              \"UnitPrice\": 0.1\n            }\n          ],\n          \"UnitPrice\": 1.79\n        },\n        \"CombinedPrice\": 3.58,\n        \"MenuCardNumber\": \"1\",\n        \"OrderSubId\": 0,\n        \"Quantity\": 2\n      }\n    ],\n    \"MenuId\": 777890,\n    \"MultiBuyDiscount\": 0,\n    \"SubTotal\": 47.75,\n    \"ToSpend\": 0,\n    \"Total\": 47.97\n  },\n  \"CustomerInfo\": {\n    \"Address\": \"Fleet Place House, 2 Fleet Place, London\",\n    \"City\": \"London\",\n    \"DisplayPhoneNumber\": \"(01) 872 7863\",\n    \"Email\": \"contact@just-eat.com\",\n    \"Id\": \"123456\",\n    \"Latitude\": 51.50015,\n    \"LocationAccuracyDescription\": \"ROOFTOP\",\n    \"LocationAccuracyInMeters\": 0,\n    \"LocationSource\": \"GeodataGeocoder\",\n    \"Longitude\": -0.12624,\n    \"Name\": \"Just Eat\",\n    \"PhoneMaskingCode\": \"444333222\",\n    \"PhoneNumber\": \"018727863\",\n    \"Postcode\": \"EC4M 7RF\",\n    \"TimeZone\": \"GMT Standard Time\"\n  },\n  \"CustomerOrderId\": 348322088,\n  \"FriendlyOrderReference\": \"348322088\",\n  \"Id\": \"348322088\",\n  \"Order\": {\n    \"NoteToRestaurant\": \"Contact-free delivery\",\n    \"PickupNoticePeriod\": \"00:10:00\"\n  },\n  \"OrderId\": \"ijdhpy7bdusgtc28bapspa\",\n  \"OrderReference\": \"39cce3f0-0278-dd25-ae32-e8effe1ce4eb\",\n  \"PaymentInfo\": {\n    \"DriverTipValue\": 0,\n    \"PaymentLines\": [\n      {\n        \"CardFee\": 0.5,\n        \"Value\": 22.05\n      }\n    ],\n    \"Total\": 22.55,\n    \"TotalComplementary\": 0\n  },\n  \"RestaurantInfo\": {\n    \"AddressLines\": [\n      \"Fleet Place House 2, Fleet Place, London\"\n    ],\n    \"City\": \"London\",\n    \"DispatchMethod\": \"Phone\",\n    \"EmailAddress\": \"contact@testrestaurant.com\",\n    \"Id\": \"123456\",\n    \"Latitude\": 51.50015,\n    \"Longitude\": -0.12624,\n    \"Name\": \"Test Restaurant\",\n    \"PhoneNumber\": \"07123456789\",\n    \"PickupNotes\": \"Use the back entrance\",\n    \"Postcode\": \"EC4M 7RF\"\n  },\n  \"Restrictions\": [\n    {}\n  ]\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Order Delivery Webhooks"
					],
					"operation": [
						"PUT Order Requires Delivery Acceptance"
					]
				}
			}
		},
];
