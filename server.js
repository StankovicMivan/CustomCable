//Install express server
const http = require("http");
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

    const sgMail = require('@sendgrid/mail');

    sgMail.setApiKey(process.env.SENDGRID);

    const msg = {
        to: mail.yourEmail,
        from: 'info@customcable.in.rs',
        subject: 'Contact',
        text: mail.yourMessage,

    };
    sgMail.send(msg);


    res.status(201).json({
        message: 'Email sent successfully'
    });
});
app.post("/api/order", (req, res, next) => {
    console.log('unutar server post-a order');
    const order = req.body;
    console.log(order);

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID);

    var MongoClient = require('mongodb');
    var url = process.env.MONGODB_URI;

    MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db("heroku_r7k8xww0");
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("order").insertOne(order, function(err, res) {
            if (err) throw err;

            sendMail(order);
            db.close();
        });
    });


    res.status(201).json({
        message: 'Successfully'
    });
});
sendMail(value: any) {
    const msg = {
        to: value.yourEmail,
        from: 'order@customcable.in.rs',
        subject: 'Order',
        text: value

    };
    sgMail.send(msg);
}
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// app.listen(process.env.PORT || 8080);
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});