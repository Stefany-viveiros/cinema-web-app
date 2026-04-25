document.addEventListener("DOMContentLoaded", () => {

  const cinema = document.getElementById('cinema');
  if (!cinema) return;

  let selectedSeat = null;
  let currentSelected = null;

  // LINHAS DO CINEMA
  const rows = ['A','B','C','D','E'];

  // TEXTO DE STATUS
  const info = document.createElement('p');
  info.style.textAlign = 'center';
  info.style.marginTop = '15px';
  info.style.fontSize = '18px';
  info.innerText = "Escolha seu assento 🎟";
  cinema.after(info);

  // CRIAÇÃO DOS ASSENTOS
  rows.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // LETRA DA LINHA
    const label = document.createElement('span');
    label.classList.add('row-label');
    label.innerText = row;
    rowDiv.appendChild(label);

    // ASSENTOS (1 a 8)
    for (let i = 1; i <= 8; i++) {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      seat.innerText = i;

      // SIMULAÇÃO DE ASSENTOS OCUPADOS
      if (Math.random() < 0.3) {
        seat.classList.add('occupied');
      }

      // EVENTO DE CLICK
      seat.addEventListener('click', () => {
        if (seat.classList.contains('occupied')) return;

        // remove seleção anterior
        if (currentSelected) {
          currentSelected.classList.remove('selected');
        }

        // adiciona nova seleção
        seat.classList.add('selected');
        currentSelected = seat;
        selectedSeat = row + i;

        // atualiza texto
        info.innerText = `Assento selecionado: ${selectedSeat} 🎟`;
      });

      rowDiv.appendChild(seat);
    }

    cinema.appendChild(rowDiv);
  });

  // CONFIRMAR ASSENTO
  window.confirmSeat = function() {
    if (!selectedSeat) {
      alert('Escolha um assento!');
      return;
    }

    // salva assento
    localStorage.setItem("seat", selectedSeat);

    // verifica se tem filme
    const movie = localStorage.getItem("movie");

    if (!movie) {
      alert("Nenhum filme selecionado!");
      window.location.href = "index.html";
      return;
    }

    // redireciona
    window.location.href = "session.html";
  };

});