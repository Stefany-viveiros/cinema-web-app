document.addEventListener("DOMContentLoaded", () => {

  const cinema = document.getElementById('cinema');

  // 🔥 segurança: evita erro se não existir
  if (!cinema) return;

  let selectedSeat = null;

  // LINHAS (cinema real)
  const rows = ['A','B','C','D','E'];

  // CRIA ASSENTOS
  rows.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // LETRA
    const label = document.createElement('span');
    label.classList.add('row-label');
    label.innerText = row;
    rowDiv.appendChild(label);

    // NUMERAÇÃO
    for (let i = 1; i <= 8; i++) {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      seat.innerText = i;

      // simulação de ocupados
      if (Math.random() < 0.3) {
        seat.classList.add('occupied');
      }

      seat.addEventListener('click', () => {
        if (seat.classList.contains('occupied')) return;

        document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));

        seat.classList.add('selected');
        selectedSeat = row + i;
      });

      rowDiv.appendChild(seat);
    }

    cinema.appendChild(rowDiv);
  });

  // CONFIRMAR
  window.confirmSeat = function() {
    if (!selectedSeat) {
      alert('Escolha um assento!');
      return;
    }

    // salva dados
    localStorage.setItem("seat", selectedSeat);

    // 🔥 garante que tem filme selecionado
    const movie = localStorage.getItem("movie");

    if (!movie) {
      alert("Nenhum filme selecionado!");
      window.location.href = "index.html";
      return;
    }

    // vai para sessão
    window.location.href = "session.html";
  };

});