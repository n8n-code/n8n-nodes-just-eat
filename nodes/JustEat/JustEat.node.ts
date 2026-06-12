import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { orderAcceptanceWebhooksDescription } from './resources/order-acceptance-webhooks';
import { publiclyAccessibleDescription } from './resources/publicly-accessible';
import { attemptedDeliveryWebhooksDescription } from './resources/attempted-delivery-webhooks';
import { checkoutDescription } from './resources/checkout';
import { consumersDescription } from './resources/consumers';
import { deliveryFeeDescription } from './resources/delivery-fee';
import { orderDeliveryApiDescription } from './resources/order-delivery-api';
import { deliveryPoolsApiDescription } from './resources/delivery-pools-api';
import { orderDeliveryWebhooksDescription } from './resources/order-delivery-webhooks';
import { consumerQueriesWebhooksDescription } from './resources/consumer-queries-webhooks';
import { restaurantWebhooksDescription } from './resources/restaurant-webhooks';
import { restaurantQueriesWebhooksDescription } from './resources/restaurant-queries-webhooks';
import { orderWebhooksDescription } from './resources/order-webhooks';
import { orderApiDescription } from './resources/order-api';
import { orderAcceptanceApiDescription } from './resources/order-acceptance-api';
import { consumerQueriesDescription } from './resources/consumer-queries';
import { restaurantQueriesDescription } from './resources/restaurant-queries';
import { restaurantEventsWebhooksDescription } from './resources/restaurant-events-webhooks';
import { restaurantsDescription } from './resources/restaurants';
import { restaurantClaimsDescription } from './resources/restaurant-claims';
import { restaurantOrderTimesDescription } from './resources/restaurant-order-times';
import { searchDescription } from './resources/search';
import { restaurantEventsDescription } from './resources/restaurant-events';
import { attemptedDeliveryApiDescription } from './resources/attempted-delivery-api';

export class JustEat implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Just Eat',
                name: 'N8nDevJustEat',
                icon: { light: 'file:./just-eat.png', dark: 'file:./just-eat.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Just Eat API integration',
                defaults: { name: 'Just Eat' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevJustEatApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Order Acceptance Webhooks",
					"value": "Order Acceptance Webhooks",
					"description": ""
				},
				{
					"name": "Publicly Accessible",
					"value": "Publicly Accessible",
					"description": ""
				},
				{
					"name": "Attempted Delivery Webhooks",
					"value": "Attempted Delivery Webhooks",
					"description": ""
				},
				{
					"name": "Checkout",
					"value": "Checkout",
					"description": ""
				},
				{
					"name": "Consumers",
					"value": "Consumers",
					"description": ""
				},
				{
					"name": "Delivery Fee",
					"value": "Delivery Fee",
					"description": ""
				},
				{
					"name": "Order Delivery API",
					"value": "Order Delivery API",
					"description": ""
				},
				{
					"name": "Delivery Pools API",
					"value": "Delivery Pools API",
					"description": ""
				},
				{
					"name": "Order Delivery Webhooks",
					"value": "Order Delivery Webhooks",
					"description": ""
				},
				{
					"name": "Consumer Queries Webhooks",
					"value": "Consumer Queries Webhooks",
					"description": ""
				},
				{
					"name": "Restaurant Webhooks",
					"value": "Restaurant Webhooks",
					"description": ""
				},
				{
					"name": "Restaurant Queries Webhooks",
					"value": "Restaurant Queries Webhooks",
					"description": ""
				},
				{
					"name": "Order Webhooks",
					"value": "Order Webhooks",
					"description": ""
				},
				{
					"name": "Order API",
					"value": "Order API",
					"description": ""
				},
				{
					"name": "Order Acceptance API",
					"value": "Order Acceptance API",
					"description": ""
				},
				{
					"name": "Consumer Queries",
					"value": "Consumer Queries",
					"description": ""
				},
				{
					"name": "Restaurant Queries",
					"value": "Restaurant Queries",
					"description": ""
				},
				{
					"name": "Restaurant Events Webhooks",
					"value": "Restaurant Events Webhooks",
					"description": ""
				},
				{
					"name": "Restaurants",
					"value": "Restaurants",
					"description": ""
				},
				{
					"name": "Restaurant Claims",
					"value": "Restaurant Claims",
					"description": ""
				},
				{
					"name": "Restaurant Order Times",
					"value": "Restaurant Order Times",
					"description": ""
				},
				{
					"name": "Search",
					"value": "Search",
					"description": ""
				},
				{
					"name": "Restaurant Events",
					"value": "Restaurant Events",
					"description": ""
				},
				{
					"name": "Attempted Delivery API",
					"value": "Attempted Delivery API",
					"description": ""
				}
			],
			"default": ""
		},
		...orderAcceptanceWebhooksDescription,
		...publiclyAccessibleDescription,
		...attemptedDeliveryWebhooksDescription,
		...checkoutDescription,
		...consumersDescription,
		...deliveryFeeDescription,
		...orderDeliveryApiDescription,
		...deliveryPoolsApiDescription,
		...orderDeliveryWebhooksDescription,
		...consumerQueriesWebhooksDescription,
		...restaurantWebhooksDescription,
		...restaurantQueriesWebhooksDescription,
		...orderWebhooksDescription,
		...orderApiDescription,
		...orderAcceptanceApiDescription,
		...consumerQueriesDescription,
		...restaurantQueriesDescription,
		...restaurantEventsWebhooksDescription,
		...restaurantsDescription,
		...restaurantClaimsDescription,
		...restaurantOrderTimesDescription,
		...searchDescription,
		...restaurantEventsDescription,
		...attemptedDeliveryApiDescription
                ],
        };
}
