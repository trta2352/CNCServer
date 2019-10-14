var nodemailer = require('nodemailer');

module.exports.sendEmail = async function (joke, recipients) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cncemailsender@gmail.com', 
            pass: 'Random_Password_34561' 
        }
    });

    await transporter.sendMail({
        from: '<cncemailsender@gmail.com>',
        to: recipients, 
        subject: 'A Chuck Norriss joke',
        html: '<HTML> <p>'+joke.value[0].joke+'<p></HTML>' 
    }, function(error, info){
        if(error){
            return false;
        }
        else {
            return true;
        }
    });
}