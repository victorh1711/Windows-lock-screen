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
            if(res.setPassword.length >= 6){
                localStorage.setItem("setName", res.setName);
                localStorage.setItem("setPassword", res.setPassword);
                title.textContent = "Aguarde...";
                title.classList.remove("title")
                title.classList.add("titleA")
                nameInput.style.display = "none";
                passwordInput.style.display = "none";
                setData.style.display = "none";
                passwordMessage.style.display = "block";
                passwordMessage.style.color = "white";
                passwordMessage.textContent = "cadastrando usuário...";
                passwordMessage.style.borderBottom = "none"
                nameMessage.style.display = "none"
                setTimeout(() => {
                    window.location.href = "main.html";
                }, 5000);
            }else{
                passwordInput.value = ""
                alert("A senha deve ter mais de 6 dígitos...")
                setTimeout(() => {
                nameMessage.style.display = "none"
                passwordMessage.style.display = "none";
                passwordMessage.style.color = "none";
                passwordMessage.style.borderBottom = "none"
                passwordInput.Placeholder = "Defina uma senha...";
                }, 1000);
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
            else if(err.setName === "" && err.setPassword != ""){
                nameMessage.style.display = "block";
                nameMessage.style.color = "red";
                nameMessage.textContent = "Defina um nome";
                passwordMessage.style.display = "none";
            }
            else if(err.setPassword === "" && err.setName !== ""){
                passwordMessage.style.display = "block";
                passwordMessage.style.color = "red";
                passwordMessage.textContent = "Defina uma senha";
                nameMessage.style.display = "none";
            }
        });
});
