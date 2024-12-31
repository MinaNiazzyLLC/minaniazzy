const form = document.querySelector("form");
const fullName = doucment.getElementById("name");
const email = doucment.getElementById("email");
const phone = doucment.getElementById("phone");
const subject = doucment.getElementById("subject");
const mess = doucment.getElementById("message");

function sendEmail() {
    const bodyMessage = Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value};

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sales.minaniazzyllc@gmail.com",
        Password : "53AD02115BF140561C336B16F1CF39E5EE3B",
        To : 'sales.minaniazzyllc@gmail.com',
        From : "sales.minaniazzyllc@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})