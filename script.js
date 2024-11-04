// Hämtar elementen för ON-knapp, OFF-knapp och ljuskällan
const buttonOn = document.querySelector('.button__on');
const buttonOff = document.querySelector('.button__off');
const lightSource = document.querySelector('.light__source');

// Funktion för att aktivera programmet
function turnOn() {
    lightSource.classList.add('active'); // Lägg till "active" klassen för att aktivera glow och fade
}

// Funktion för att stänga av programmet
function turnOff() {
    lightSource.classList.remove('active'); // Ta bort "active" klassen för att inaktivera glow och fade
}

// Event listeners för knapparna
buttonOn.addEventListener('click', turnOn);
buttonOff.addEventListener('click', turnOff);
