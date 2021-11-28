document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  
  sendEmail(name, email, message);
}



function sendEmail(name, email, message) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "zaradiodnule@gmail.com",
	Password : "zaradiprekoneta123",
	To : 'jovan99djokicpn@gmail.com',
	From : "zaradiodnule@gmail.com",
	Subject : `Name: ${name}`,
	Body : `Name: ${name} <br/> email: ${email} <br/> message: ${message}`,
	}).then((message) => alert("Email je poslat"))
}