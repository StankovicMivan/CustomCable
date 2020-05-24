//Install express server
const express = require('express');
const path = require('path');
// const sgMail = require('@sendgrid/mail');
const app = express();
// const sendgrid = require('./src/app/sendGrid/sendgrid');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// let msg = {
//     to: 'ivanjoca@gmail.com',
//     from: 'stankovicmivan@gmail.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(sendgrid);
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);