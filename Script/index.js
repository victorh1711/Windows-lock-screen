const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("passwordInput");
const nameMessage = document.getElementById("nameMessage");
const passwordMessage = document.getElementById("passwordMessage");
const setData = document.getElementById("setData");

function test(){
    return new Promise((resolve, reject) => {
        const setName = nameInput.value.trim();
        const setPassword = passwordInput.value.trim();
        setTimeout(() => {
            if(setName != "" && setPassword != ""){
                resolve({setName, setPassword});
            } else{
                reject({setName, setPassword})
            };
        })
        }, 2000);
}

setData.addEventListener("click", () =>{
    test()
        .then(res =>{
            if(res.setPassword.length > 6){
                localStorage.setItem("setName", res.setName);
                localStorage.setItem("setPassword", res.setPassword);
                title.textContent = "Aguarde...";
                title.style.animation = "pulse "
                title.style.animationIterationCount = "infinite"
                nameInput.style.display = "none";
                passwordInput.style.display = "none";
                setData.style.display = "none";
                passwordMessage.style.display = "block";
                passwordMessage.style.color = "white";
                passwordMessage.textContent = "cadastrando usuário...";
                passwordMessage.style.borderBottom = "none"
                setTimeout(() => {
                    window.location.href = "main.html";
                }, 5000);
            }else{
                nameMessage.style.display = "none"
                passwordMessage.style.display = "block";
                passwordMessage.style.color = "yellow";
                passwordMessage.style.borderBottom = "2px solid yellow"
                passwordMessage.textContent = "A senha deve ter mais de 6 dígitos";
            }
        })
        .catch(err =>{
            if(err.setName === "" && err.setPassword === ""){
                nameMessage.style.display = "block";
                nameMessage.style.color = "red";
                nameMessage.textContent = "Defina um nome";
                passwordMessage.style.display = "block";
                passwordMessage.style.color = "red";
                passwordMessage.textContent = "Defina uma senha";
            }
            else if(err.setName === ""){
                nameMessage.style.display = "block";
                nameMessage.style.color = "red";
                nameMessage.textContent = "Defina um nome";
                passwordMessage.style.display = "none";
            }
            else if(err.setPassword === ""){
                passwordMessage.style.display = "block";
                passwordMessage.style.color = "red";
                passwordInput.textContent = "Defina uma senha";
                nameMessage.style.display = "none";
            }
        });
});
