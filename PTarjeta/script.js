function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");
    let sobre = document.getElementById("sobre");
    let texto = document.getElementById("mensaje-texto");

    if (mensaje.style.display === "none" || mensaje.style.display === "") {
        mensaje.style.animation = "cartaVolando 2s ease-out, aparecer 1s ease-out forwards";
        mensaje.style.display = "block";
        sobre.classList.add("abierto");
        lanzarCorazones();

        // Reiniciar el scroll cuando se abre
        texto.scrollTop = 0;

        // Agregar el efecto de desplazamiento automático
        autoScroll(texto);
    } else {
        mensaje.style.display = "none";
        sobre.classList.remove("abierto");
    }
}

function autoScroll(elemento) {
    let scrollInterval = setInterval(() => {
        if (elemento.scrollTop < elemento.scrollHeight - elemento.clientHeight) {
            elemento.scrollTop += 1; // Mueve el scroll hacia abajo poco a poco
        } else {
            clearInterval(scrollInterval); // Detiene el scroll cuando llega al final
        }
    }, 50); // Velocidad del scroll (ajústala si es necesario)
}

function lanzarCorazones() {
    const contenedor = document.getElementById("corazones");

    for (let i = 0; i < 15; i++) {
        let corazon = document.createElement("div");
        corazon.innerHTML = "❤️";
        corazon.classList.add("corazon");

        let startX = Math.random() * window.innerWidth;
        let startY = window.innerHeight;
        let endX = startX + (Math.random() * 200 - 100);
        let endY = startY - 200 - Math.random() * 100;

        corazon.style.left = `${startX}px`;
        corazon.style.top = `${startY}px`;
        corazon.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        contenedor.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 3000);
    }
}

