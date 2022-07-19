# Luigi UI5 Example with OIDC Authentication
A simple example setting up a Luigi based microfrontend application with ui5 with openid connect as authentication mechanism


## OpenUI5 External Library Requirements

The following external libraries are included in the ui5.yaml file as resources
 - @luigi-project/plugin-auth-oidc
 - oidc-client
 - @luigi-project/core
 - @luigi-project/client

## Setting the Luigi Auth properties for OIDC configuration
You need to use the luigi auth plugins in your Luigi Config file.

You can use webpack to bundle the luigi config file so that you can include packages like plugin-auth-oidc directly in the file.

Then using the oidc-mockserver provided, the luigi config should look like this:
```
import oidcProvider from '@luigi-project/plugin-auth-oidc';

Luigi.setConfig({
  navigation: {
    nodes: () => []
  },
  routing: {...},
  settings: {...},
  auth: {
    use: 'openIdConnect',
    openIdConnect: {
      idpProvider: oidcProvider,
      authority: 'http://localhost:4011/',
      client_id: 'authorisation-code-pkce-mock-client', // example oidc-mockserver client id
      response_type: "code", // for PKCE
      response_mode: "fragment", // change between `query` and `fragment`
      scope: 'openid profile email',
      post_logout_redirect_uri: '/logout.html',
      redirect_uri: '/index.html',
      automaticSilentRenew: true,
      accessTokenExpiringNotificationTime: 60,
    },
    disableAutoLogin: false
  }
});

```

# Start the Application

## 1. Run the Mock server


```
   cd oidc-mockserver
   docker-compose up
```

## 2. Run the Luigi OpenUI5 App 


```
   cd luigi-openui5-app
   npm run start
```

