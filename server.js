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

app.post("/api/contact", (req, res, next) => {
    const mail = req.body;
    sendMongoDBInfo(mail);
    res.status(201).json({
        message: 'Email sent successfully'
    });
});

app.post("/api/order", (req, res, next) => {
    const order = req.body;
    sendMongoDBOrder(order);
    res.status(201).json({
        message: order
    });
});

app.post("/api/discount", (req, res) => {
    const MongoClient = require('mongodb').MongoClient;
    var url = process.env.MONGODB_ATLAS_URI;
    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function(err, db) {
        if (err) throw err;
        var dbo = db.db("customcable");
        dbo.collection("discount").find({}).toArray(function(err, result) {
            if (err) throw err;
            rezultat = result;
            console.log(rezultat)
            res.status(201).json({
                discounts: JSON.stringify(rezultat)
            })
            db.close();
        });
    });
});

function sendMongoDBOrder(data) {
    const MongoClient = require('mongodb').MongoClient;
    var url = process.env.MONGODB_ATLAS_URI;

    const client = new MongoClient(url, { useNewUrlParser: true });
    var ObjectID = require("bson-objectid");
    client.connect(function(err, db) {
        var dbo = db.db("customcable");
        data.id = ObjectID.generate();
        data._id = {
            oid: string = data.id
        }
        console.log(data);
        dbo.collection("order").insertOne(data, function(err, res) {
            if (err) throw err;

            // sendMailOrder(data);
            db.close();
        });
    });
}

function sendMailOrder(data) {
    type = '';
    length = '';
    pattern = '';
    shild = '';
    price = '';
    lang = 'en';
    if (lang == 'en') {
        type = "Type";
        length = 'Length';
        pattern = 'Pattern';
        shild = 'Jack shield';
        price = 'Price';
    }
    if (lang == 'sr') {
        type = "Tip";
        length = 'Dužina';
        pattern = 'Šablon';
        shild = 'Zaštita konektora';
        price = 'Cena';
    }

    firstrow = "<table><thead style='text-align: center;'>" +
        "<tr>" +
        "<th><span>#</span></th>" +
        "<th><span>" + type + "</span></th>" +
        "<th><span>" + length + "</span></th>" +
        "<th><span>" + pattern + "</span></th>" +
        "<th><span>" + shild + "</span></th>" +
        "<th><span>" + price + "</span></th>" +
        "</tr></thead>";
    secondRow = "<tbody class='text-center'>"
    temp = "";
    orders = [];
    orders = data.orders;
    orders.forEach(i => {
        console.log(i);
        if (i != null) {
            temp = "<tr>" +
                "<td><span>" + (i.orderId + 1) + "</span></td>" +
                "<td><span>" + i.cableType + "</span></td>" +
                "<td><span>" + i.calbeLength + "m</span></td>" +
                "<td><img src=" + photoSrcParser(i.srcFullPathForColor) + "></td>" +
                "<td><span>" + i.cableJackProtection + "</span></td>" +
                "<td><span>" + i.orderPrice + "RSD.</span></td></tr>"

        }
        secondRow += temp;

    });

    secondRow += "</tbody></table>";

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID);
    const msg = {
        to: data.yourEmail,
        from: 'order@customcable.in.rs',
        subject: 'Order',
        html: firstrow + secondRow

    };
    sgMail.send(msg);
    const msg2 = {
        to: 'order@customcable.in.rs',
        from: 'order@customcable.in.rs',
        subject: 'Order',
        html: firstrow + secondRow

    };
    sgMail.send(msg2);
};

function sendMongoDBInfo(data) {
    const MongoClient = require('mongodb').MongoClient;
    var url = process.env.MONGODB_ATLAS_URI;

    const client = new MongoClient(url, { useNewUrlParser: true });
    client.connect(function(err, db) {
        // if (err) throw err;
        var dbo = db.db("customcable");
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("contact").insertOne(data, function(err, res) {
            if (err) throw err;

            sendMailContact(data);
            db.close();
        });
    });
}

function sendMailContact(data) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID);
    const msg = {
        to: data.yourEmail,
        from: 'info@customcable.in.rs',
        subject: 'Contact',
        text: data.yourMessage

    };
    sgMail.send(msg);
    const msg2 = {
        to: 'info@customcable.in.rs',
        from: 'info@customcable.in.rs',
        subject: 'Contact',
        text: data.yourMessage

    };
    sgMail.send(msg2);
};


function photoSrcParser(src) {
    return ("https://raw.githubusercontent.com/StankovicMivan/CustomCable/master/src/" + src.substr(6));
}

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// app.listen(process.env.PORT || 8080);
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});