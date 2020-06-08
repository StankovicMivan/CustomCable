//Install express server
const http = require("http");
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const sgMail = require('@sendgrid/mail');

app.use(cors());
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
// const { SENDGRID_API_KEY } = require('./sendgrid');


app.post("/api/contact", (req, res, next) => {
    console.log('unutar server post-a contact');
    const mail = req.body;
    console.log(mail);
    // sgMail.setApiKey('');
    // let msg = {
    //     to: 'info@customcable.in.rs',
    //     from: mail.yourEmail,
    //     subject: 'Custom Cable: contact form',
    //     // text: 'and easy to do anywhere, even with Node.js',
    //     html: mail.yourMessage,
    // };
    // sgMail.send(msg);
    // let msg2 = {
    //     to: mail.yourEmail,
    //     from: mail.yourEmail,
    //     subject: 'Custom Cable: contact form',
    //     // text: 'and easy to do anywhere, even with Node.js',
    //     html: mail.yourMessage,
    // };
    // sgMail.send(msg2);


    // const sgMail = require('@sendgrid/mail');

    sgMail.setApiKey("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");
    const msg = {
        to: 'test@example.com',
        from: 'test@example.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);


    res.status(201).json({
        message: 'Email sent successfully'
    });
});
app.post("/api/order", (req, res, next) => {
    console.log('unutar server post-a order');
    const mail = req.body;
    console.log(mail);
    sgMail.setApiKey("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");
    let msg = {
        to: 'ivanjoca@gmail.com',
        from: mail.yourEmail,
        subject: 'Custom Cable: contact form',
        // text: 'and easy to do anywhere, even with Node.js',
        html: mail.yourMessage,
    };
    sgMail.send(msg);
    res.status(201).json({
        message: 'Email sent successfully'
    });
});
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// app.listen(process.env.PORT || 8080);
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});
});
