const nodemailer = require('nodemailer');

const mail = (receiver, sender, subject, text, html) => {
  return new Promise((resolve, reject) => {
    const message = {
      from: sender,
      to: receiver,
      subject: subject,
      text: text
    };
    if (html) {
      message.html = html;
    }
    console.log(message);
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });
    /*console.log(transporter);
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log('Server is ready to take our messages');
          }
        });*/

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      console.log(info.envelope);
      console.log(info.messageId);
      resolve('Success');
    });
  });
};

module.exports = mail;
