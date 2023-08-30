const videoPopup = document.getElementById('videoPopup');
const closeButton = document.getElementById('closeButton');
const imageLink = document.querySelector('.work-item a');

function openPopup() {
    videoPopup.style.display = 'block';
}

function closePopup() {
    videoPopup.style.display = 'none';
}

imageLink.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);