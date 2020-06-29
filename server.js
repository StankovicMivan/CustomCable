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

    sendMongoDBInfo(mail);


    res.status(201).json({
        message: 'Email sent successfully'
    });
});
app.post("/api/order", (req, res, next) => {
    console.log('unutar server post-a order');
    const order = req.body;
    console.log(order);

    sendMongoDBOrder(order);


    res.status(201).json({
        message: order
    });
});

function sendMongoDBOrder(data) {
    var MongoClient = require('mongodb');
    var url = process.env.MONGODB_URI;

    MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db("heroku_r7k8xww0");
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("order").insertOne(data, function(err, res) {
            if (err) throw err;

            sendMailOrder(data);
            db.close();
        });
    });
}

function sendMailOrder(data) {
    firstrow = "<table class='table table-hover .w-auto'><thead id='thead' class='thead-light text-center '><tr><th class='col-1 col-xs-1'><span>#</span></th><th class='col-3 col-xs-3'><span *ngIf='lang == 'en''>Type</span><span *ngIf='lang == 'sr''>Tip</span></th><th class='col-1 col-xs-1'><span *ngIf='lang == 'en''>Length</span><span *ngIf='lang == 'sr''>Dužina</span></th><th class='col-3 col-xs-3'><span *ngIf='lang=='en' '>Pattern</span><span *ngIf='lang=='sr' '>Šablon</span></th><th class='col-2 col-xs-2'><span *ngIf='lang=='en' '>Jack shield</span><span *ngIf='lang=='sr' '>Zaštita konektora</span></th><th class='col-1 col-xs-1'><span *ngIf='lang=='en' '>Price</span><span *ngIf='lang=='sr' '>Cena</span></th><th class='col-1 col-xs-1'><span *ngIf='lang=='en' '>Price</span><span *ngIf='lang=='sr' '>Cena</span></th></tr></thead>";
    secondRow = "<tbody class='text-center'>"
    temp = "";
    orders = [];
    orders = data.orders;
    orders.forEach(i => {
        console.log(i);
        if (i != null) {
            temp = "<tr> <td class='col-1 col-xs-1'><span>" + i.orderId + 1 +
                "</span></td> <td class='col-3 col-xs-3'><span>" + i.cableType + "</span></td>" +
                "<td class='col-1 col-xs-1'><span>" + i.calbeLength + "m</span></td>" +
                "<td class='col-3 col-xs-3'><img id='patternPreview' src=" + i.srcFullPathForColor. + "></td>" +
                "<td class='col-2 col-xs-2'><span>" + i.cableJackProtection + "</span></td>" +
                "<td class='col-1 col-xs-1'><span>" + i.orderPrice + "RSD.</span></td></tr>"

        }
        secondRow += temp;

    });
    secondRow += "</tbody></table>";


    //         
    //         
    //         <td class="col-1 col-xs-1"><span class="item-remove" (click)='remove(i.orderId)'><i class="fa fa-times" aria-hidden="true" (click)='remove(i.orderId)'></i></span></td></tr></tbody></table>


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
    var MongoClient = require('mongodb');
    var url = process.env.MONGODB_URI;

    MongoClient.connect(url, function(err, db) {
        // if (err) throw err;
        var dbo = db.db("heroku_r7k8xww0");
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





var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// app.listen(process.env.PORT || 8080);
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});