
const paragraphText = "Join us on a journey to explore the best cold brew coffee recipes and tips.";
const video = document.querySelector(".video-section");
const headingText = "By the way just forgot to say you that thee coffee is already ready scrole down to see";
function typeEffect(elementId, text, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 3;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index+10;
            setTimeout(type, delay);
        }
    }

    type();
}
function typeEffect(elementId, text, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 5;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index+10;
            setTimeout(type, delay);
        }
    }

    type();
}

// Start typing effect for both lines
window.onload = function () {
    typeEffect("typing-heading", headingText, 100);
    setTimeout(() => typeEffect("typing-paragraph", paragraphText, 100), 3000);
    
    // Delay for the second line
};
window.onclick = function () {
    typeEffect("typing-heading", headingText, 100);
    setTimeout(() => typeEffect("typing-paragraph", paragraphText, 100), 3000); 
}
