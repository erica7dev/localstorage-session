const nameForm = document.querySelector("#name-form");
const btnLogout = document.querySelector("#logout");
const occultContainer = document.querySelector("#occult-container");

var occultSpan = document.querySelector("#username");


nameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");

  localStorage.setItem("name", nameInput.value)

  nameInput.value = ''

  validateUser();
})


btnLogout.addEventListener("click", () => {
  localStorage.removeItem("name");
  occultContainer.style.display = 'none';

  validateUser();
})

function validateUser() {
  const userName = localStorage.getItem("name")

  if (userName) {
    nameForm.style.display = 'none';
    occultContainer.style.display = 'block';

    var y = document.createTextNode(userName);
    occultSpan.appendChild(y);

  } else {
    
  }
}

//inicia app
validateUser();
