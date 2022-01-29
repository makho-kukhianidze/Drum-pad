// Variable block - Start.
// Button section - Start.
let drum = document.getElementById('drum'); // Drum sound - button.
let drumTwo = document.getElementById('drumTwo'); // Drum sound - button.
let drumThree = document.getElementById('drumThree'); // Drum sound - button.
let drumFour = document.getElementById('drumFour'); // Drum sound - button.
let drumFive = document.getElementById('drumFive'); // Drum sound - button.
let drumSix = document.getElementById('drumSix'); // Drum sound - button.
let drumSeven = document.getElementById('drumSeven'); // Drum sound - button.
let drumEight = document.getElementById('drumEight'); // Drum sound - button.
let drumNine = document.getElementById('drumNine'); // Drum sound - button.
// Button section - End.
// Drum pad - sound section - Start.
let drumSoundOne = new Audio(); // Drum sound.
drumSoundOne.src = "assets/sounds/cymbal.wav"; // Drum sound - src.
let drumSoundTwo = new Audio(); // Drum sound.
drumSoundTwo.src = "assets/sounds/hihat.wav"; // Drum sound - src.
let drumSoundThree = new Audio(); // Drum sound.
drumSoundThree.src = "assets/sounds/kick.wav"; // Drum sound - src.
let drumSoundFour = new Audio(); // Drum sound.
drumSoundFour.src = "assets/sounds/kick.wav"; // Drum sound - src.
let drumSoundFive = new Audio(); // Drum sound.
drumSoundFive.src = "assets/sounds/long-crash.wav"; // Drum sound - src.
let drumSoundSix = new Audio(); // Drum sound.
drumSoundSix.src = "assets/sounds/openhat.wav"; // Drum sound - src.
let drumSoundSeven = new Audio(); // Drum sound.
drumSoundSeven.src = "assets/sounds/snare.wav"; // Drum sound - src.
let drumSoundEight = new Audio(); // Drum sound.
drumSoundEight.src = "assets/sounds/snareTwo.wav"; // Drum sound - src.
let drumSoundNine = new Audio(); // Drum sound.
drumSoundNine.src = "assets/sounds/tom.wav"; // Drum sound - src.
// Drum pad - sound section - End.
// Variable block - End.

// Function block - Start.
// Function - drum pad's sounds and currentTime - Start. 
function drumSoundOneA() {
    drumSoundOne.currentTime = 0;
    drumSoundOne.play();
}
function drumSoundTwoB() {
    drumSoundTwo.currentTime = 0;
    drumSoundTwo.play();
}
function drumSoundThreeC() {
    drumSoundThree.currentTime = 0;
    drumSoundThree.play();
}
function drumSoundFourD() {
    drumSoundFour.currentTime = 0;
    drumSoundFour.play();
}
function drumSoundFiveE() {
    drumSoundFive.currentTime = 0;
    drumSoundFive.play();
}
function drumSoundSixF() {
    drumSoundSix.currentTime = 0;
    drumSoundSix.play();
}
function drumSoundSevenG() {
    drumSoundSeven.currentTime = 0;
    drumSoundSeven.play();
}
function drumSoundEightH() {
    drumSoundEight.currentTime = 0;
    drumSoundEight.play();
}
function drumSoundNineI() {
    drumSoundNine.currentTime = 0;
    drumSoundNine.play();
}
// Function - drum pad's sounds and currentTime - End. 
// Function block - End.

// Drum pad's addEventListener - Start.
// Drum pad's - Keyboard keys: "A,S,D,F,G,H,J,K,L" - Start.
document.addEventListener("keypress", (e) => {
    if (e.key == "a" || e.key == "A") {  // Keyboard key.
        drum.classList.toggle("a_key"); // Keyboard key - button style.
        drumSoundOneA(); // Keyboard key - sound.
    }
    if (e.key == "s" || e.key == "S") { // Keyboard key.
        drumTwo.classList.toggle("s_key"); // Keyboard key - button style.
        drumSoundTwoB(); // Keyboard key - sound.
    }
    if (e.key == "d" || e.key == "D") { // Keyboard key.
        drumThree.classList.toggle("d_key"); // Keyboard key - button style.
        drumSoundThreeC(); // Keyboard key - sound.
    }
    if (e.key == "f" || e.key == "F") { // Keyboard key.
        drumFour.classList.toggle("f_key"); // Keyboard key - button style.
        drumSoundFourD(); // Keyboard key - sound.
    }
    if (e.key == "g" || e.key == "G") { // Keyboard key.
        drumFive.classList.toggle("g_key"); // Keyboard key - button style.
        drumSoundFiveE(); // Keyboard key - sound.
    }
    if (e.key == "h" || e.key == "H") { // Keyboard key.
        drumSix.classList.toggle("h_key"); // Keyboard key - button style.
        drumSoundSixF(); // Keyboard key - sound.
    }
    if (e.key == "j" || e.key == "J") { // Keyboard key.
        drumSeven.classList.toggle("j_key"); // Keyboard key - button style.
        drumSoundSevenG(); // Keyboard key - sound.
    }
    if (e.key == "k" || e.key == "K") { // Keyboard key.
        drumEight.classList.toggle("k_key"); // Keyboard key - button style.
        drumSoundEightH(); // Keyboard key - sound.
    }
    if (e.key == "l" || e.key == "L") { // Keyboard key.
        drumNine.classList.toggle("l_key"); // Keyboard key - button style.
        drumSoundNineI(); // Keyboard key - sound.
    }
});
// Drum pad's - Keyboard keys: "A,S,D,F,G,H,J,K,L" - End.

// Drum pad's addEventListener - buttons - Start.
document.addEventListener('click', function (e) {
    if (e.target.id === "drum") { // Drum pad - button.
        drumSoundOneA(); // Drum pad - sound.
    }
    if (e.target.id === "drumTwo") { // Drum pad - button.
        drumSoundTwoB(); // Drum pad - sound.
    }
    if (e.target.id === "drumThree") { // Drum pad - button.
        drumSoundThreeC(); // Drum pad - sound.
    }
    if (e.target.id === "drumFour") { // Drum pad - button.
        drumSoundFourD(); // Drum pad - sound.
    }
    if (e.target.id === "drumFive") { // Drum pad - button.
        drumSoundFiveE(); // Drum pad - sound.
    }
    if (e.target.id === "drumSix") { // Drum pad - button.
        drumSoundSixF(); // Drum pad - sound.
    }
    if (e.target.id === "drumSeven") { // Drum pad - button.
        drumSoundSevenG(); // Drum pad - sound.
    }
    if (e.target.id === "drumEight") { // Drum pad - button.
        drumSoundEightH(); // Drum pad - sound.
    }
    if (e.target.id === "drumNine") { // Drum pad - button.
        drumSoundNineI(); // Drum pad - sound.
    }
});
// Drum pad's addEventListener - buttons - End.
// Drum pad's addEventListener - End.