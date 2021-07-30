// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:3000',
  // API_URL: 'https://zoom-test-api.foodnicher.com',
  // API_URL: 'https://api.foodnicher.com',

  FE_URL: 'http://localhost:4200',
  API_GOOGLE: '788806065600-r29lafc85gkr58nkc2991str3414l7oo.apps.googleusercontent.com',
  STRIPE: {
    PUB_KEY: 'pk_test_51IUEyXLGqUhNytyozW3SaQ2sdbqhTvM00hVRAw9eJ5Kas8Zpi04rQb4GSTZtSib2AOo7wRb0ajk0Xp5SK4SkfMrq00pKysbdmH',
    BUSINESS: 'price_1IZVohLGqUhNytyo1HNRpPDw',
    REGULAR: 'price_1IaE1ULGqUhNytyoB7yoOjM5',
    M3: 'price_1IzmkyLGqUhNytyomfV5rEs6',
    M6: 'price_1IzmlHLGqUhNytyoQsThyw0l',
    M12: 'price_1IzmlbLGqUhNytyo15Yl1cth'
  },
  ZOOM_SDK: 'ZKojIHxKSK6hHgPp4lG8Cg',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
