import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class JustEatApi implements ICredentialType {
        name = 'N8nDevJustEatApi';

        displayName = 'Just Eat API';

        icon: Icon = { light: 'file:../nodes/JustEat/just-eat.png', dark: 'file:../nodes/JustEat/just-eat.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://uk.api.just-eat.io',
                        required: true,
                        placeholder: 'https://uk.api.just-eat.io',
                        description: 'The base URL of your Just Eat API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
