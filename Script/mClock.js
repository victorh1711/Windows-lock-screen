
function clock(){
    const dateReal = document.getElementById("dateReal");
    const data = new Date();
    const day = String(data.getDate()).padStart(2, '0');
    const month = String(data.getMonth() +1).padStart(2, '0');
    const year = String(data.getFullYear()).padStart(2, '0');
    const hour = String(data.getHours()).padStart(2, '0');
    const minutes = String(data.getMinutes()).padStart(2, '0');
    const dataText = `${day}/${month}/${year}  ${hour}:${minutes}`;
    dateReal.textContent = dataText
}
setInterval(clock, 1000)
clock()
