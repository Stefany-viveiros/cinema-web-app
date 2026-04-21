const seatsContainer = document.getElementById('seats');
let selectedSeat = null;

for (let i = 0; i < 40; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');

  if (Math.random() < 0.3) {
    seat.classList.add('occupied');
  }

  seat.addEventListener('click', () => {
    if (seat.classList.contains('occupied')) return;

    document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
    seat.classList.add('selected');
    selectedSeat = i;
  });

  seatsContainer.appendChild(seat);
}

window.confirmSeat = function() {
  if (selectedSeat === null) {
    alert('Escolha um assento!');
  } else {
    alert('Assento ' + selectedSeat + ' confirmado 🎟');
  }
}