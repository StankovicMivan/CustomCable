//Install express server
const http = require("http");
const express = require('express');
const path = require('path');
// const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const sgMail = require('@sendgrid/mail');

// app.use(cors());
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/contact", (req, res, next) => {
    console.log('unutar server post-a');
    const mail = req.body;
    console.log(mail);
    sgMail.setApiKey('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');
    let msg = {
        to: 'ivanjoca@gmail.com',
        from: mail.yourEmail,
        subject: 'Custom Cable: contact form',
        // text: 'and easy to do anywhere, even with Node.js',
        html: yourMessage,
    };
    sgMail.send(msg);
    res.status(201).json({
        message: 'Email sent successfully'
    });
});
// app.post("/api/contact", function(req) {
//     console.log('unutar server post-a');
//     var newContact = req.body;
//     // newContact.createDate = new Date();

//     // if (!req.body.name) {
//     //     handleError(res, "Invalid user input", "Must provide a name.", 400);
//     // } else {
//     //     console.log(this.newContact);
//     // }

// });
app.listen(process.env.PORT || 8080);





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