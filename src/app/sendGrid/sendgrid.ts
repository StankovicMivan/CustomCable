class sendgrid{
    
    constructor(msg: any ) {
        msg = {
            to: 'ivanjoca@gmail.com',
            from: 'stankovicmivan@gmail.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        
      };
}


module.exports.sendgrid  = sendgrid;