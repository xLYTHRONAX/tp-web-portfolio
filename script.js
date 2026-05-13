console.log("JavaScript fonctionne !");
const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("btnMessage");

btnMessage.addEventListener("click", function () {
  message.textContent = "Bravo, tu as cliqué sur le bouton !";
});

const inputNom = document.getElementById("nom");
const btnNom = document.getElementById("btnNom");
const resultatNom = document.getElementById("resultatNom");

btnNom.addEventListener("click", function () {
  resultatNom.textContent = "Bonjour " + inputNom.value;
});