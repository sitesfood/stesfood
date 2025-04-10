



  document.addEventListener("DOMContentLoaded", () => {
    const notif = document.getElementById("whatsappNotif");

    function showNotification() {
      notif.style.opacity = "1";
      // Esconde após 3 segundos
      setTimeout(() => {
        notif.style.opacity = "0";
      }, 3000);
    }

    // Dispara a primeira imediatamente
    showNotification();

    // Depois, a cada 10 segundos
    setInterval(showNotification, 10000);
  });

