const kC = document.querySelector("#keyCode h1");
const kP = document.querySelector("#key h2");
const divK = document.getElementById("key");
const isH = document.createElement("h2");

window.addEventListener("keydown", (key) => {
    kC.innerText = `${key.code}`;
    kP.innerText = `${key.key}`;
    isH.innerText = `repeat: ${key.repeat}`;
    divK.append(isH);
})