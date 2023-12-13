function emailSend(){
    Email.send({
            Host : "smtp.gmail.com",
            Username : "sales.minaniazzyllc@gmail.com",
            Password : "788Aa413121!",
            To : 'sales.minaniazzyllc@gmail.com',
            From : document.gotElementById("email").value,
            Subject : "New Contact Form Enquiry",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
}