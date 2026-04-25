document.addEventListener("DOMContentLoaded", () => {

  const cinema = document.getElementById('cinema');
  if (!cinema) return;

  let selectedSeat = null;
  let currentSelected = null;

  // 🎬 PEGA FILME
  const movie = JSON.parse(localStorage.getItem("movie"));

  // 🎥 TÍTULO DO FILME
  if (movie) {
    const title = document.createElement('h2');
    title.style.textAlign = 'center';
    title.style.marginBottom = '10px';
    title.innerText = `🎬 ${movie.title}`;
    cinema.before(title);
  }

  // TEXTO DE STATUS
  const info = document.createElement('p');
  info.style.textAlign = 'center';
  info.style.marginTop = '15px';
  info.style.fontSize = '18px';
  info.innerText = "Escolha seu assento 🎟";
  cinema.after(info);

  // LINHAS DO CINEMA
  const rows = ['A','B','C','D','E'];

  // CRIAÇÃO DOS ASSENTOS
  rows.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // LETRA
    const label = document.createElement('span');
    label.classList.add('row-label');
    label.innerText = row;
    rowDiv.appendChild(label);

    // ASSENTOS
    for (let i = 1; i <= 8; i++) {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      seat.innerText = i;

      // SIMULAÇÃO DE OCUPADOS
      if (Math.random() < 0.3) {
        seat.classList.add('occupied');
      }

      // CLICK
      seat.addEventListener('click', () => {
        if (seat.classList.contains('occupied')) return;

        if (currentSelected) {
          currentSelected.classList.remove('selected');
        }

        seat.classList.add('selected');
        currentSelected = seat;
        selectedSeat = row + i;

        info.innerText = `Assento selecionado: ${selectedSeat} 🎟`;
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

    localStorage.setItem("seat", selectedSeat);

    if (!movie) {
      alert("Nenhum filme selecionado!");
      window.location.href = "index.html";
      return;
    }

    window.location.href = "session.html";
  };

});