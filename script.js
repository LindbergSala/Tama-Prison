// Hämtar elementen för ON-knapp, OFF-knapp, ljuskällan och spelskärmen
const buttonOn = document.querySelector('.button__on');
const buttonOff = document.querySelector('.button__off');
const lightSource = document.querySelector('.light__source');
const gameScreen = document.querySelector('.game__screen');

// Startvärden
let isGameOn = false;

// Initiering: Dölj spelskärmen och inaktivera alla funktioner
gameScreen.classList.add('hidden');

// Funktion för att starta spelet
function turnOn() {
    isGameOn = true;
    lightSource.classList.add('active');
    gameScreen.classList.remove('hidden');
    gameScreen.classList.add('visible');
    // Aktivera andra funktioner när spelet är på
}

// Funktion för att stänga av spelet
function turnOff() {
    isGameOn = false;
    lightSource.classList.remove('active');
    gameScreen.classList.remove('visible');
    gameScreen.classList.add('hidden');
    // Inaktivera andra funktioner när spelet är av
}

// Event listeners för knapparna
buttonOn.addEventListener('click', turnOn);
buttonOff.addEventListener('click', turnOff);


// Lista över positioner som husdjuret ska röra sig till automatiskt
const positions = [
    { x: "20%", y: "10%" }, // Position X1
    { x: "40%", y: "30%" }, // Position X2
    { x: "60%", y: "50%" }, // Position X3
    { x: "80%", y: "30%" }, // Position X4
    { x: "50%", y: "70%" }  // Position X5
];

let currentPosition = 0;
const mainCharacter = document.querySelector('.main-character');

// Funktion för att flytta husdjuret
function moveCharacter() {
    if (isGameOn) {
        const { x, y } = positions[currentPosition];
        mainCharacter.style.transform = `translate(${x}, ${y})`;

        // Uppdatera positionen för nästa rörelse
        currentPosition = (currentPosition + 1) % positions.length;
    }
}

// Starta rörelse varannan sekund
setInterval(moveCharacter, 2000);

// Statusvärden för husdjuret
let hunger = 50;
let energi = 50;
let gladje = 50;

// Element för statusindikatorer
const hungerFill = document.getElementById('mat-fill');
const energiFill = document.getElementById('energi-fill');
const gladjeFill = document.getElementById('gladje-fill');

// Uppdatera statusfält visuellt
function updateStatusBars() {
    hungerFill.style.height = `${hunger}%`;
    energiFill.style.height = `${energi}%`;
    gladjeFill.style.height = `${gladje}%`;
}

// Funktioner för varje statusknapp
function feedCharacter() {
    if (hunger < 100) hunger += 10;
    updateStatusBars();
    moveToPosition({ x: "20%", y: "50%" }); // Exempelposition för MAT
}

function playWithCharacter() {
    if (gladje < 100) gladje += 10;
    updateStatusBars();
    moveToPosition({ x: "60%", y: "30%" }); // Exempelposition för GLÄDJE
}

function restCharacter() {
    if (energi < 100) energi += 10;
    updateStatusBars();
    moveToPosition({ x: "10%", y: "20%" }); // Exempelposition för ENERGI
}

// Flytta karaktären till en viss position
function moveToPosition(position) {
    mainCharacter.style.transform = `translate(${position.x}, ${position.y})`;
}

// Event listeners för knapparna
document.querySelector('.button__num-7').addEventListener('click', feedCharacter);
document.querySelector('.button__num-8').addEventListener('click', playWithCharacter);
document.querySelector('.button__num-9').addEventListener('click', restCharacter);

// Uppdatera statusfält vid start
updateStatusBars();
