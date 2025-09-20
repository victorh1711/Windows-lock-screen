const userName = document.getElementById("userName");
const Tinput = document.getElementById("testPassword");
const toSend = document.getElementById("toSend");
const Showhide = document.getElementById("Showhide");
const message = document.getElementById("message");
const dateReal = document.getElementById("dateReal");
const icon = document.getElementById("iconImagem")

userName.textContent = localStorage.getItem("setName")
const userPassword = localStorage.getItem("setPassword")

Showhide.addEventListener("click", function(){
    if(Tinput.type == "password"){
        Tinput.type = "text"
        icon.src = "Imagens/Adobe Express - file.png"
    } 
    else if(Tinput.type == "text"){
        Tinput.type = "password"
        icon.src = "Imagens/Olho aberto.png"
    }
})

function testInput(){
    if(Tinput.value != ""){
        Showhide.style.display = "block"
    }else{
        Showhide.style.display = "none"
    }
}
loop = setInterval(testInput, 500)
testInput()

async function autent(){
    return new Promise((resolve, reject) => {
        if(Tinput.value.trim() == userPassword){
            resolve()
        }
        else if(Tinput.value.trim() != userPassword){
            reject()
        }
    })
}
toSend.addEventListener("click", () => {
    autent()
        .then(res => {
            clearInterval(loop)
            const UserNamebefore = userName.textContent
            userName.textContent = `Bem-vindo ${UserNamebefore}`
            Tinput.style.display = "none"
            message.style.display = "block"
            message.textContent = "carregando sistema..."
            Showhide.style.display = "none"
            toSend.style.display = "none"
            setTimeout(() => {
                window.location.href = "home.html"
            }, 5000);
        })
})