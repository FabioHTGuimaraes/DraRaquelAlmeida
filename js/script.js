emailjs.send("service_xxx", "template_xxx", {
  nome: nome,
  email: email,
  mensagem: mensagem
}).then(() => {
  alert("Mensagem enviada com sucesso!");
});