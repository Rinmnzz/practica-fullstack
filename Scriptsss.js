document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita envío automático

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Validar nombre
  if (nombre === '') {
    alert('Por favor ingresa tu nombre completo.');
    return;
  }

  // Validar email con regex para gmail
  const gmailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    alert('Por favor ingresa un correo válido de Gmail.');
    return;
  }

  // Validar contraseña
  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  // Si todo está bien, puedes enviar el formulario o mostrar un mensaje
  alert('Registro exitoso. ¡Gracias!');
  // this.submit(); // Descomenta para enviar realmente el formulario
});