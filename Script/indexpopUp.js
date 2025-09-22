const popUpContent = document.getElementById("content");
const popUp = document.getElementById("popUp");
const createdButton = document.getElementById("created");

createdButton.addEventListener("click", () =>{
    popUp.style.animationName = "ruf";
    popUpContent.style.animationName = "ruf";
    setTimeout(() => {
        popUp.style.display = "none";
        popUpContent.style.display = "none";
    }, 200  );

});