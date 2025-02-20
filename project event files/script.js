
// Carousel code
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;

function moveToNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const offset = -currentIndex * (images[0].width + 20); // Adding 20px margin for spacing
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}px)`; // Fixed the syntax here
}

setInterval(moveToNextImage, 3000); // Change image every 3 seconds
function toggleMenu() {
    let sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === "-220px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-220px";
    }
}
// Event Data
const events = [
    { name: "TechFest 2025", date: "March 15, 2025", description: "A technology festival with workshops and hackathons." },
    { name: "Cultural Day", date: "April 10, 2025", description: "A day to celebrate cultural diversity with performances and food." },
    { name: "Sports Meet", date: "May 5, 2025", description: "A sports event featuring various competitions and activities." }
];

const eventList = document.getElementById('eventList');

events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>${event.date}</p>
        <p>${event.description}</p>
    `;
    eventList.appendChild(card);
});
