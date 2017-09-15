const admin = require('firebase-admin');

const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

console.log('Firebase Admin Initialized');

module.exports = admin;


  // These registration tokens come from the client FCM SDKs.
  var registrationTokens = [
    "ckqqw6mbmr4:APA91bFMegkeHSpDRgU9n5HfagbgNYfgBpXOUOS-svfppchI0ievk5o5GHpt_RZcTQjeaOLK2knEE_8EoI8I3T5lgrjZz-BABX4ApksljQpQ66T-fnHBpxqbwC_GUmiUPls59h0TqD7x",
    "deEsZXjjh5E:APA91bFsjdAZQKF8c2UhTVm_OLARe7F3AcTrcItxEBQXnwm_5yBlyG2jcCgvbd_-hgvnmrrqx8buHSxJPznos7LIXmf1al6_T2W1NvykVM29Jmne9rQLp7kcsGhETxYo9aA6gF4rYIcI"
  ];

  // See the "Defining the message payload" section below for details
  // on how to define a message payload.
  var payload = {
      notification: {
          title: "Тайтл3+12))",
          body: "еще тогда",
      },
      data: {
          type: "дэйта?",
      }
  };

  // Send a message to the devices corresponding to the provided
  // registration tokens.
  admin.messaging().sendToDevice(registrationTokens, payload)
    .then(function(response) {
      // See the MessagingDevicesResponse reference documentation for
      // the contents of response.
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
