onload = () => {
  document.body.classList.remove("container");
  // Crear un elemento de texto
  let mensaje = document.createElement("p");
  mensaje.textContent = "Para ti mi hermosa dama";
  mensaje.style.position = "absolute";
  mensaje.style.top = "50%";
  mensaje.style.left = "50%";
  mensaje.style.transform = "translate(-50%, -50%)";
  mensaje.style.fontSize = "36px";
  mensaje.style.fontWeight = "bold";
  mensaje.style.color = "red";
  mensaje.style.textShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";

  // Agregar el mensaje al body
  document.body.appendChild(mensaje);
};
