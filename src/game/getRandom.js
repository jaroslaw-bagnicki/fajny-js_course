function getRandom() {
  alert('Wylosowano liczbę z przedziału 1-10. Zgaduj!');
  return Math.floor(Math.random() * 10 + 1);
}

export default getRandom;
