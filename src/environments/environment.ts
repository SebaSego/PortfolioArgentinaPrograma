// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080',
  firebase: {
    projectId: 'portfolio-argentina-prog-4d15d',
    appId: '1:681464959377:web:3f92608a13eecfff14ca30',
    storageBucket: 'portfolio-argentina-prog-4d15d.appspot.com',
    apiKey: 'AIzaSyAM8sWJOkx2Q-WwWPsB1gfQ4ON5lpdKTC4',
    authDomain: 'portfolio-argentina-prog-4d15d.firebaseapp.com',
    messagingSenderId: '681464959377',
    measurementId: 'G-K3P4M8ZQ3R',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
