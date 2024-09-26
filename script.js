const cube = document.querySelector('.cube');
let isMouseMoving = false;
let mouseX = 0;
let mouseY = 0;
const colorsSide = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const sidesElement = document.querySelectorAll('.face');
sidesElement.forEach((side, index) => {
    side.style.backgroundColor = colorsSide[index];
});

document.addEventListener('mousemove', (e) => {
    isMouseMoving = true;
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;  // normalize between -1 and 1
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    
    cube.style.transform = `rotateX(${mouseY * 180}deg) rotateY(${mouseX * 180}deg)`;
});

// Stop mouse rotation if no movement
setInterval(() => {
    if (!isMouseMoving) {
        cube.style.animation = 'rotate 10s infinite linear';
    } else {
        cube.style.animation = 'none';
        isMouseMoving = false;
    }
}, 1000);
