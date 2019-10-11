var nodemailer = require('nodemailer');

module.exports.sendEmail = async function (joke, recipients) {
    let testAccount = await nodemailer.createTestAccount();
    console.log(recipients);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cncemailsender@gmail.com', 
            pass: 'Random_Password_34561' 
        }
    });
    console.log("...........")
    console.log(recipients)

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '<cncemailsender@gmail.com>',
        to: recipients, 
        subject: 'A Chuck Norriss joke',
        html: '<HTML> <p>'+joke.value[0].joke+'<p></HTML>' 
    });
    console.log(info.response)
}