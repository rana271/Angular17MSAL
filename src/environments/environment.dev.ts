export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '7d35da47-9a33-492f-b6f5-4901c9da6325',
            authority: 'https://login.microsoftonline.com/335ee130-0b44-4a3e-a78c-446fa16c9ad9',
            redirectUri: 'http://localhost:4200',

        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};