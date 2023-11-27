let nome, xp, nivel;

nome = "Tomas Bruno"
xp = 2001

if (xp <= 1000) {
  nivel = "Ferro";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
} else if (1001 <= xp && xp <= 2000) {
  nivel = "Bronze";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
} else if (2001 <= xp && xp <= 5000) {
  nivel = "Prata";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
} else if (6001 <= xp && xp <= 7000) {
  nivel = "Ouro";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
} else if (7001 <= xp && xp <= 8000) {
  nivel = "Platina";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
} else if (8001 <= xp && xp <= 9000) {
  nivel = "Ascendente";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
} else if (9001 <= xp && xp <= 10000) {
  nivel = "Imortal";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
} else {
  nivel = "Radiante";
  console.log("O Herói: " + nome + " está no nível: " + nivel);
}

