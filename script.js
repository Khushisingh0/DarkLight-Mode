const switchs = document.querySelector(".switch");
const body = document.querySelector("#body");
const mode = document.querySelector(".mode");
const count = document.querySelector(".counting");
const countReset = document.querySelector(".count-reset");
const colorName = document.querySelector(".color-name");
const nameInput = document.querySelector(".name-input");
const speak = document.querySelector(".speak");


let eventCount = 0;
let darkMode = true;
let speaking = false;
let colors = ["lime", "blue", "gold", "bluevoilet", "silver", "maroon", "plum"];


countReset.addEventListener("click", () => {
    eventCount = 0;
    count.innerText = `Event Count: ${eventCount}`;
})

switchs.addEventListener("click", () => {
    if (darkMode) {
        darkMode = false;
        switchs.style.backgroundColor = `black`;
        switchs.style.color = `white`;
        switchs.style.transition = `all linear 0.5s`;
        switchs.style.transform = `translateX(159px)`;
        body.style.backgroundColor = `white`;
        body.style.color = `black`;
        mode.style.borderColor = `black`;
        switchs.innerText = `LIGHT`
        ++eventCount;
        count.innerText = `Event Count: ${eventCount}`;
        count.style.fontWeight = `bold`;
        modeVoice("Light")
    } else {
        darkMode = true;
        switchs.style.backgroundColor = `white`;
        switchs.style.color = `black`;
        switchs.style.transition = `all linear 0.5s`;
        switchs.style.transform = `translateX(1px)`;
        body.style.backgroundColor = `black`;
        body.style.color = `white`;
        mode.style.borderColor = `white`;
        switchs.innerText = `DARK`;
        ++eventCount;
        count.innerText = `Event Count: ${eventCount}`;
        count.style.fontWeight = `bold`;
        modeVoice("Dark")

    }
})

nameInput.addEventListener("keyup", (e) => {
    if (nameInput.value == "") {
        colorName.innerText = "KHUSHI"
    } else {
        colorName.innerText = nameInput.value;
        ++eventCount;
        count.innerText = `Event Count: ${eventCount}`;
    }
    setInterval(changeColor, 50);
})
function changeColor() {
    let str = "";
    for (let i = 0; i < colorName.innerText.length; i++) {
        str += `<span style="color: ${colors[Math.floor(Math.random() * colors.length)]};">${colorName.innerText.charAt(i)}</span>`;
    }
    colorName.innerHTML = str;
}
// setInterval(changeColor, 50);
function modeVoice(mode){
    let speech=window.speechSynthesis;
    let voices=speech.getVoices();
    const utterSpeech= new SpeechSynthesisUtterance(mode);
    utterSpeech.voice=voices[2];
    utterSpeech.volume=10000;
    speech.speak(utterSpeech);
}
speak.addEventListener("click",()=>{
    modeVoice(colorName.innerText)
})