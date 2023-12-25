const form = document.querySelector('form');

function emailSend(){
    Email.send({
            Host : "smtp.elasticemail.com",
            Username : "sales.minaniazzy@gmail.com",
            Password : "DFF7D1CBFDACF4F547C608EACAD2F5E3109D",
            To : 'sales.minaniazzyllc@gmail.com',
            From : sales@minaniazzy.com,
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailSend();
});
