const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === 'IMG') {
        const smallSrc = e.target.getAttribute('src');
        const largeSrc = smallSrc.replace('-sm', '-lg');
        modalImage.src = largeSrc;
        modal.showModal();
    }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Close modal when pressing the Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.close();
    }
});


