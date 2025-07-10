
document.getElementById('ticketForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const titel = document.getElementById('titel').value;
  const beschreibung = document.getElementById('beschreibung').value;
  const prio = document.getElementById('prio').value;

  const eintrag = document.createElement('li');
  eintrag.textContent = `[${prio}] ${titel} - ${beschreibung}`;

  document.getElementById('ticketListe').appendChild(eintrag);
  this.reset();
});
