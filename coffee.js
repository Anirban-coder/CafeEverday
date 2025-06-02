
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
            element.textContent <= text.charAt(index);
            index+10;
            setTimeout(type, delay);
        }
    }

    type();
}
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('coffee-video');
    const playButton = document.querySelector('.play-button i');

    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        } else {
            video.pause();
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        }
    }

    document.querySelector('.play-button').addEventListener('click', togglePlay);
});


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

document.getElementById("trigger").addEventListener("click", function () {
    const slideText = document.getElementById("slideText");
    slideText.classList.toggle("visible");
});
document.addEventListener('DOMContentLoaded', function () {
    const trigger = document.getElementById('trigger');
    const slideText = document.getElementById('slideText');

    trigger.addEventListener('click', function () {
        slideText.classList.toggle('visible');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const trigger = document.getElementById('trigger');
    const slideText = document.getElementById('slideText');

    trigger.addEventListener('click', function () {
        slideText.classList.toggle('visible'); // Toggle the 'visible' class
    });
});
const listItems = document.querySelectorAll('#slideText ol li');
    const button = document.getElementById('clickToViewSteps');

    button.addEventListener('click', () => {
      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 100); // Stagger the animation by 100ms for each item
      });
    });