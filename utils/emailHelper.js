var nodemailer = require('nodemailer');

module.exports.sendEmail = async function (joke) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cncemailsender@gmail.com', 
            pass: 'Random_Password_34561' 
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '<cncemailsender@gmail.com>',
        to: 'tertinek.jaka@gmail.com', 
        subject: 'A  Chuck Norriss joke',
        text: 'Hello world?', 
        html: '<HTML> <p>'+joke.value[0].joke+'<p></HTML>' 
    });

    console.log(info.response)
}