let rangerElement = document.querySelector("#range");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let copy = document.querySelector(".copy");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@?/-+*";
let novaSenha = "";

sizePassword.innerHTML = rangerElement.value;

range.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < rangerElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  //console.log(pass)
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  copy.style.visibility = "visible";
  copy.textContent = "Senha copiada com sucesso!";
  let yesCopy = setTimeout(() => {
    copy.style.visibility = "hidden";
  }, 1500);

  //alert("Senha copiada com sucesso!")

  navigator.clipboard.writeText(novaSenha);
}
