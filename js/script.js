const btn = document.getElementById("enviarEmail");

document.getElementById("formContacto").addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_icq90ra";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      Swal.fire(
        'Mensaje enviado con exito',
        'En breve nuestro equipo se pondrá en contacto',
        'success'
      )
    },
    err => {
      Swal.fire(
        'Mensaje no enviado',
        'Intente más tarde.',
        'error'
      )
    }
  );
  document.getElementById("nombre").value ="";
  document.getElementById("apellido").value ="";
  document.getElementById("email").value ="";
  document.getElementById("asunto").value ="";
  document.getElementById("mensaje").value ="";
});
