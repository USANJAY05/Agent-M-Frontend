import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: 'a58c187a-ffad-4cb0-a36e-f9ba1d0425b6', // Replace with your Application (client) ID
    authority: 'https://login.microsoftonline.com/a5f26ada-3efd-4be5-853c-0a0b5f301a25', // Replace with your Directory (tenant) ID
    redirectUri: 'http://localhost:3000/desktop2', // Replace with your app's redirect URI
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you're experiencing issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};