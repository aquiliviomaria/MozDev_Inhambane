document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-bio");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const bio = this.closest(".bio");
      const fullBio = bio.querySelector(".bio-full");
      const shortBio = bio.querySelector(".bio-short");

      const isHidden = fullBio.style.display === "none";

      fullBio.style.display = isHidden ? "block" : "none";
      shortBio.style.display = isHidden ? "none" : "block";
      this.textContent = isHidden ? "Ver menos" : "Ver mais";
    });
  });
});

// Formulário de inscrição em eventos
const eventoForm = document.getElementById("evento-form");
if (eventoForm) {
  eventoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validação dos campos
    const nome = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    const telefone = this.querySelector('input[type="tel"]');
    const evento = this.querySelector("select");

    // Simular envio (substituir por AJAX em produção)
    alert(
      "Inscrição enviada com sucesso! Entraremos em contato em breve com mais informações."
    );
    this.reset();
  });
}

// Função auxiliar para validar e-mail
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
