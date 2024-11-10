// DOM-element för spelet och statusindikatorer
const buttonOn = document.querySelector('.button__on');
const buttonOff = document.querySelector('.button__off');
const lightSource = document.querySelector('.light__source');
const gameScreen = document.querySelector('.game__screen');
const escapeMessage = document.querySelector('.escape-message');
const catchBtn = document.querySelector('.catch__btn');
const freeBtn = document.querySelector('.free__btn');

const hungerFill = document.getElementById('mat-fill');
const energiFill = document.getElementById('energi-fill');
const gladjeFill = document.getElementById('gladje-fill');
const mainCharacter = document.querySelector('.main-character');

// Tangentbindningar för Numlock
const num7Button = document.querySelector('.button__num-7');
const num8Button = document.querySelector('.button__num-8');
const num9Button = document.querySelector('.button__num-9');
const startButton = document.querySelector('.button__start');

// Lyssna på tangenttryckningar och koppla dem till respektive funktioner
document.addEventListener('keydown', (event) => {
    switch(event.code) {
        case 'Numpad7': // Numlock 7
            feedCharacter();
            num7Button.classList.add('active');
            break;
        case 'Numpad8':
            playWithCharacter();
            num8Button.classList.add('active');
            break;
        case 'Numpad9': 
            restCharacter();
            num9Button.classList.add('active');
            break;
        case 'Enter':
            turnOn();
            startButton.classList.add('active');
            break;
    }
});

// Ta bort "tryck" från knapparna när tangenten släpps
document.addEventListener('keyup', (event) => {
    switch(event.code) {
        case 'Numpad7':
            num7Button.classList.remove('active');
            break;
        case 'Numpad8':
            num8Button.classList.remove('active');
            break;
        case 'Numpad9':
            num9Button.classList.remove('active');
            break;
        case 'Enter':
            startButton.classList.remove('active');
            break;
        case 'KeyW':
            dpadUp.classList.remove('active');
            break;
        case 'KeyA':
            dpadLeft.classList.remove('active');
            break;
        case 'KeyD':
            dpadRight.classList.remove('active');
            break;
        case 'KeyS':
            dpadDown.classList.remove('active');
            break;
    }
});

// Startstatus och konstanter
let isGameOn = false;
let hunger = 50, energi = 50, gladje = 50;
let feedCount = 0, playCount = 0, sleepCount = 0;
const decayRate = { hunger: 5, energi: 3, gladje: 4 };
let statusDecayInterval, startTime = Date.now();

const movementPositions = [
    { x: "5%", y: "5%" },   
    { x: "40%", y: "10%" },
    { x: "80%", y: "15%" },
    { x: "20%", y: "30%" },
    { x: "60%", y: "35%" },
    { x: "10%", y: "50%" },
    { x: "50%", y: "60%" },
    { x: "75%", y: "75%" }, 
    { x: "30%", y: "80%" },
    { x: "65%", y: "85%" }
];

let currentMovementIndex = 0;

// Funktion för att flytta karaktären till nästa position
function moveCharacterAutomatically() {
    if (isGameOn) { 
        const { x, y } = movementPositions[currentMovementIndex];
        mainCharacter.style.transform = `translate(${x}, ${y})`;

    
        currentMovementIndex = (currentMovementIndex + 1) % movementPositions.length;
    }
}

setInterval(moveCharacterAutomatically, 2000);


// Funktion för att starta och stänga av spelet
function turnOn() {
    isGameOn = true;
    lightSource.classList.add('active');
    gameScreen.classList.remove('hidden');
    gameScreen.classList.add('visible');
    statusDecayInterval = setInterval(decayStatus, 5000);
    startTime = Date.now();
}

function turnOff() {
    isGameOn = false;
    lightSource.classList.remove('active');
    gameScreen.classList.remove('visible');
    gameScreen.classList.add('hidden');
    clearInterval(statusDecayInterval);
    localStorage.removeItem('characterStatus');
}

// Uppdatera status och utseende
function updateStatusBars() {
    hungerFill.style.height = `${hunger}%`;
    energiFill.style.height = `${energi}%`;
    gladjeFill.style.height = `${gladje}%`;
    saveStatusToLocalStorage();
    updateCharacterAppearance();
}

// Karaktärens utseende baserat på hälsa
function updateCharacterAppearance() {
    const healthLevel = Math.min(hunger, energi, gladje);
    const color = healthLevel > 50 ? '#ffc0cb' : healthLevel > 20 ? '#fd7f7f' : '#fd1f44';
    mainCharacter.querySelectorAll('.main-character__head, .main-character__l-hand, .main-character__r-hand')
        .forEach(part => part.style.backgroundColor = color);
}

// Funktioner för interaktion med karaktären
function feedCharacter() { if (hunger < 100) hunger += 10; feedCount++; updateStatusBars(); }
function playWithCharacter() { if (gladje < 100) gladje += 10; playCount++; updateStatusBars(); }
function restCharacter() { if (energi < 100) energi += 10; sleepCount++; updateStatusBars(); }

// Funktion för statusminskning och kritiskt tillstånd
function decayStatus() {
    if (!isGameOn) return;
    hunger = Math.max(hunger - decayRate.hunger, 0);
    energi = Math.max(energi - decayRate.energi, 0);
    gladje = Math.max(gladje - decayRate.gladje, 0);
    updateStatusBars();
    if (hunger === 0 || energi === 0 || gladje === 0) handleCriticalStatus();
}

// Hantera kritiskt tillstånd (Rymningsförsök)
function handleCriticalStatus() {
    clearInterval(statusDecayInterval);
    mainCharacter.classList.add('hidden');
    escapeMessage.classList.remove('hidden');
}

// Knappar för att hantera rymning
catchBtn.addEventListener('click', () => location.reload());
freeBtn.addEventListener('click', () => {
    escapeMessage.innerHTML = `
        <h2>Spelets statistik</h2>
        <p>Mata: ${feedCount} gånger</p>
        <p>Leka: ${playCount} gånger</p>
        <p>Sova: ${sleepCount} gånger</p>
        <p>Speltid: ${Math.floor((Date.now() - startTime) / 1000)} sekunder</p>
        <button class="exit-btn">AVSLUTA</button>`;
    document.querySelector('.exit-btn').addEventListener('click', turnOff);
});


// Local Storage-funktioner
function saveStatusToLocalStorage() {
    const status = { hunger, energi, gladje, feedCount, playCount, sleepCount, startTime };
    localStorage.setItem('characterStatus', JSON.stringify(status));
}

function loadStatusFromLocalStorage() {
    const savedStatus = JSON.parse(localStorage.getItem('characterStatus'));
    if (savedStatus) {
        ({ hunger, energi, gladje, feedCount, playCount, sleepCount, startTime } = savedStatus);
        updateStatusBars();
    }
}

// Initiera laddning av sparad status och knapp-event
window.addEventListener('load', loadStatusFromLocalStorage);
buttonOn.addEventListener('click', turnOn);
buttonOff.addEventListener('click', turnOff);
document.querySelector('.button__num-7').addEventListener('click', feedCharacter);
document.querySelector('.button__num-8').addEventListener('click', playWithCharacter);
document.querySelector('.button__num-9').addEventListener('click', restCharacter);
