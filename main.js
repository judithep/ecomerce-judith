const bdark = document.querySelector("bdark");
const body = document.querySelector("body");

load();
bdark.addEventListener("click", e => {
    body.classList.toggle("darkmode");
    store(body.classList.contains("darkmode"));
});

function load(){
    const darkmode = localStorage.getItem("darkmode");
    if(!darkmode){
        StorageEvent("false");
    } else if (darkmode == "true"){
        body.classList.add("darkmode");
    }

}
function Store(value){
localStorage.setItem("darkmode", value);
}

const btnSwitch = document.querySelector("switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("::after")

})