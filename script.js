console.log("JavaScript fonctionne !");

const nom = document.getElementById("prenom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("btn");

const savedUser= JSON.parse(localStorage.getItem("user"))

submit.addEventListener('click', function(event) {  
  event.preventDefault();

  const user= {
    name: nom.value,
    email: email.value,
    password: password.value
  };

  const name = nom.value;          
  const emailVal = email.value;    
  const passwordVal = password.value; 

  if (!passwordVal) {
    alert("Veuillez remplir le champ du mot de passe.");
    return;
  }
  else if (!emailVal.value.includes("@")) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }
  else if (passwordVal.val.length < 8) {
    alert("Le mot de passe doit contenir au moins 8 caractères.");
    return;
  }
  else if (!name || !emailVal || !passwordVal) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  const user= {
    name: nom.value,
    email: email.value,
    password: password.value
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Nom: " + name + "\nEmail: " + emailVal + "\nMot de passe: " + passwordVal);
});