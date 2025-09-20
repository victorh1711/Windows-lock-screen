const userName = document.getElementById("userName");
const testPassword = document.getElementById("testPassword");
const toSend = document.getElementById("toSend");
const Showhide = document.getElementById("Showhide");
const message = document.getElementById("message");
const dateReal = document.getElementById("dateReal");
const icon = document.getElementById("iconImagem")

userName.textContent = localStorage.getItem("setName")
const userPassword = localStorage.getItem("setPassword")

