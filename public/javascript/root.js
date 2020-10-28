// include the navbar
$(function () {
  $(".insertnav").load("nav.html");
});

// email sending for contact.html
// function sendEmail() {
//   Email.send({
//     SecureToken: "f6ec5e19-7de1-4588-ad71-de2a3d407bd2",
//     To: 'aayushgen@gmail.com',
//     From: "aayushgen@gmail.com",
//     Subject: "Test email",
//     Body: "hey there"
//   }).then(
//     message => alert(message)
//   );
// }
function sendEmail(){
  Email.send({
    SecureToken : "84105ad9-429c-4f5c-b783-d60830c4576d",
    To : "aayushgen@gmail.com",
    From : "aayushgen@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert("yay")
  );
}
