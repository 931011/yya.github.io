document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const images = [
        'images/scene1.jpg',
        'images/scene2.jpg',
        'images/scene3.jpg',
        'images/scene4.jpg',
        'images/scene5.jpg'
    ];

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementsByClassName("close")[0];

    images.forEach(src => {
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'One Piece Scene';
        img.style.width = '100%';
        imgDiv.appendChild(img);
        galleryContainer.appendChild(imgDiv);

        imgDiv.setAttribute('data-aos', 'fade-up');  // Add AOS animation attribute

        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImage.src = src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    const characterModal = document.getElementById("characterModal");
    const characterImg = document.getElementById("characterImg");
    const characterName = document.getElementById("characterName");
    const characterDescription = document.getElementById("characterDescription");
    const characterItems = document.querySelectorAll('.character-item');

    characterItems.forEach(item => {
        item.addEventListener('click', () => {
            characterImg.src = item.getAttribute('data-img');
            characterName.textContent = item.getAttribute('data-name');
            characterDescription.textContent = item.getAttribute('data-description');
            characterModal.style.display = "block";
        });
    });

    const closeCharacterModal = document.getElementsByClassName("close")[1];
    closeCharacterModal.addEventListener('click', () => {
        characterModal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === characterModal) {
            characterModal.style.display = "none";
        }
    });

    AOS.init();  // Initialize AOS
});
