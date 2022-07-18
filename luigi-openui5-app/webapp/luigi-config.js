//you can now use ES6 goodies here
// importing from npm package directly not possible without bundling
// import oidcProvider from '@luigi-project/plugin-auth-oidc';

// using workaround for UMD packages
import './assets/auth-oidc/plugin.js';
const oidcProvider = window['LuigiPlugin-auth-oidc'];

Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: 'openui5.html#/home',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: 'sample1/sample1.html'
          },
          {
            pathSegment: 'sample2',
            label: 'Second',
            icon: 'paper-plane',
            viewUrl: 'sample2/sample2.html'
          },
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'OpenUI5',
            externalLink: {
              url: 'https://openui5.hana.ondemand.com/'
            }
          }
        ]
      }
    ]
  },
  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true
  },
  settings: {
    header: {
      title: 'Luigi OpenUI5',
      logo: '/logo.png',
      favicon: '/favicon.ico'
    },
    responsiveNavigation: 'simpleMobileOnly',
    appLoadingIndicator: {
      hideAutomatically: true
    }
  },
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
