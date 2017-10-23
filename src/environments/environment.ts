// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDr-MGRshqw_YiZPOq_Ft1meJYG2oxSN6s",
    authDomain: "swyser-blog.firebaseapp.com",
    databaseURL: "https://swyser-blog.firebaseio.com",
    projectId: "swyser-blog",
    storageBucket: "swyser-blog.appspot.com",
    messagingSenderId: "502235209384"
  }
};
