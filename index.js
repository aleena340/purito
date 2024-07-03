const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.translate(window.innerWidth / 2, window.innerHeight / 2)
const catHeight = 500;
const catWidth = 495;

const ranks = {
    1: "Catdet",
    5: "Purrentice",
    15: "Clawventurer",
    30: "Meowgician",
    50: "Pawtector",
    90: "Meowrquis",
    120: "Duke of Paws",
    200: "Count Catula",
    300: "Vispurr",
    400: "Purrince",
    600: "Meowjesty",
    900: "Clawlord",
    1100: "Purragon",
    1500: "CatEO",
    1900: "Purfessor",
    2300: "Catstronaut",
    3000: "Pawrentice",
    5000: "Expawrt",
    6000: "Meowster",
    9000: "Grandmeowster",
    10000: "Champurion",
    13000: "Purince",
    16000: "Cat King",
    19000: "Empurror",
    20000: "Catmmander",
    22000: "Genpural",
    23000: "Admiral",
    240000: "Catptain",
    270000: "Clawonel",
    280000: "Meowjor",
    300000: "Meowyor",
    310000: "Chief Meowyor",
    320000: "Pawresident",
    340000: "Pawrector",
    350000: "Chairmeow",
    360000: "Cat Overlord",
    3800000: "Pawtriarch",
    200000000: "Bastet"

}




const image = new Image();
image.src = 'cat.png';

image.onload = () => {
    drawInLoop();
};

// Mouse position variables
let mouseX = 0;
let mouseY = 0;

// Event listeners based on device type
if (isDesktop()) {
    canvas.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
} else {
    canvas.addEventListener('touchmove', function (event) {
        event.preventDefault(); // Prevent default touch behavior
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
    });
}
function draw(count) {
    context.drawImage(image, mouseX / 8 - catWidth / 2 - count / 2, mouseY / 4 - catHeight / 2 - count / 2, catWidth + count, catHeight + count);
}




currentOffset = 0
const distance = 40
const count = 80
const startTime = Date.now();
const secondsCount = document.querySelector(".seconds");
const rank = document.querySelector(".rank");
function drawInLoop() {
    for (let i = count; i > 0; i--) {
        draw(i * distance + currentOffset)
    }
    draw(distance) //increment variable i will be 0 here
    currentOffset++
    //i will be 0 here
    if (currentOffset >= distance) {
        currentOffset = 0
    }
    const newTime = Math.floor((Date.now() - startTime) / 1000);

    secondsCount.innerText = newTime;

    if (ranks[newTime]) {
        rank.innerText = ranks[newTime];
    }
    requestAnimationFrame(drawInLoop)
}
function startLoop() {
    requestAnimationFrame(drawInLoop)
}