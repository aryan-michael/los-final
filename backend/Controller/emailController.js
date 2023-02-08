const nodemailer = require('nodemailer')
require('dotenv').config()
const sendMail = async (data, req, res) => {
    let transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        // service:'gmail',
        port: 2525,
        // secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_ID, // generated ethereal user
            pass: process.env.MAIL_PASS, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        // from: '"Hey 👻" <hey@gamil.com>', // sender address
        from: '<endsemproject@zohomail.in>',
        to: data.to, // list of receivers
        subject: data.subject, // Subject line
        text: data.text, // plain text body
        html: data.html, // html body
    });

    //   console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = sendMail;