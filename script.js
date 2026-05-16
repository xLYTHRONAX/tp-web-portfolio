console.log("JavaScript fonctionne !");

const nom = document.getElementById("prenom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("btn");

submit.addEventListener('click', function(event) {  
  event.preventDefault();

  const name = nom.value;          
  const emailVal = email.value;    
  const passwordVal = password.value; 

  if (!name || !emailVal || !passwordVal) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  alert("Nom: " + name + "\nEmail: " + emailVal + "\nMot de passe: " + passwordVal);
});