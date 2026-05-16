console.log("JavaScript fonctionne !");

const nom = document.getElementById("prenom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("btn");

const savedUser = JSON.parse(localStorage.getItem("user"));

submit.addEventListener('click', function(event) {  
  event.preventDefault();

  const name = nom.value;          
  const emailVal = email.value;    
  const passwordVal = password.value; 

  if (!name || !emailVal || !passwordVal) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  if (!emailVal.includes("@")) {      
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  if (passwordVal.length < 8) {       
    alert("Le mot de passe doit contenir au moins 8 caractères.");
    return;
  }

  const user = {                        
    name: name,
    email: emailVal,
    password: passwordVal
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Nom: " + name + "\nEmail: " + emailVal + "\nMot de passe: " + passwordVal);
});