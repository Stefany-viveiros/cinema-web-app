document.addEventListener("DOMContentLoaded", () => {

  const cinema = document.getElementById('cinema');
  if (!cinema) return;

  // 🎬 filme
  const movie = JSON.parse(localStorage.getItem("movie"));

  // 🎥 título
  if (movie) {
    const title = document.createElement('h2');
    title.style.textAlign = 'center';
    title.innerText = `🎬 ${movie.title}`;
    cinema.before(title);
  }

  // 🎟 controle de assentos
  let selectedSeats = [];
  const MAX_SEATS = 6;

  // TEXTO INFO
  const info = document.createElement('p');
  info.style.textAlign = 'center';
  info.style.marginTop = '15px';
  info.innerText = "Escolha até 6 assentos 🎟";
  cinema.after(info);

  const rows = ['A','B','C','D','E','F','G','H','I','J'];

  rows.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    const label = document.createElement('span');
    label.classList.add('row-label');
    label.innerText = row;
    rowDiv.appendChild(label);

    for (let i = 1; i <= 18; i++) {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      seat.innerText = i;

      // ocupados
      if (Math.random() < 0.3) {
        seat.classList.add('occupied');
      }

      seat.addEventListener('click', () => {
        if (seat.classList.contains('occupied')) return;

        const seatId = row + i;

        // 👉 remover se já selecionado
        if (selectedSeats.includes(seatId)) {
          selectedSeats = selectedSeats.filter(s => s !== seatId);
          seat.classList.remove('selected');
        } else {

          // 👉 limite
          if (selectedSeats.length >= MAX_SEATS) {
            alert(`Máximo de ${MAX_SEATS} ingressos`);
            return;
          }

          selectedSeats.push(seatId);
          seat.classList.add('selected');
        }

        // atualiza texto
        info.innerText = `Selecionados: ${selectedSeats.join(', ')} 🎟`;
      });

      rowDiv.appendChild(seat);
    }

    cinema.appendChild(rowDiv);
  });

  // CONFIRMAR
  window.confirmSeat = function() {

    if (selectedSeats.length === 0) {
      alert('Escolha pelo menos um assento!');
      return;
    }

    // salva TODOS
    localStorage.setItem("seats", JSON.stringify(selectedSeats));

    if (!movie) {
      alert("Nenhum filme selecionado!");
      window.location.href = "index.html";
      return;
    }

    window.location.href = "session.html";
  };

});