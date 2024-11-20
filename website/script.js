const logo = document.querySelector('.logo');

// Example of mouse movement interactivity
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;

    // Rotate the logo based on mouse position
    logo.style.transform = `rotate(${mouseX * 360}deg)`;
});
