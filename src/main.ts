import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// //import dotenv
// require('dotenv').config();

// //import AWS SDK
// const AWS = require('aws-sdk');

// //Amazon SES configuration
// const SESConfig = {
//   apiVersion: '2010-12-01',
//   accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
//   region: process.env.AWS_SES_REGION
// };

// var params = {
//   Source: 'tristanogle1@gmail.com',
//   Destination: {
//     ToAddresses: [
//       'u18331085@tuks.co.za'
//     ]
//   },
//   ReplyToAddresses: [
//     'tristanogle1@gmail.com'
//   ],
//   Message: {
//     Body: {
//       Html: {
//         Charset: "UTF-8",
//         Data: 'IT IS <strong>WORKING</strong>!'
//       }
//     },
//     Subject: {
//       Charset: 'UTF-8',
//       Data: 'Node + SES Example'
//     }
//   }
// };

// new AWS.SES(SESConfig).sendEmail(params).promise().then((res) => {
//   console.log(res);
// });
