document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementByID('theme-toggle');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gallery = document.getElementById('gallery');
    const imageCards = document.querySelectorAll('.image-card');
    const modalContainer = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('close-modal');
    
    // Event listeners
    themeToggle.addEventListener('change', toggleTheme);
    searchBtn.addEventListener('click', searchImages);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchImages();
        }
    });
    
    // Add event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterImages(category);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // Add click event to all image cards
    imageCards.forEach(card => {
        card.addEventListener('click', function() {
            openModal(this);
        });
    });
    
    // Close modal on X click
    closeModal.addEventListener('click', closeImageModal);
    
    // Close modal on outside click
    modalContainer.addEventListener('click', function(e) {
        if (e.target == modalContainer) {
            closeImageModal();
        }
    });
    
    // Functions
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }
    
    function filterImages(category) {
        imageCards.forEach(card => {
            if (category === 'all' || card.dataset.category == category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function searchImages() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm == '') return;
        
        imageCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const description = card.querySelector('p').innerText.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Reset active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterButtons[0].classList.add('active');
    }
    
    function openModal(card) {
        const img = card.querySelector('img');
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalTitle.textContent = title.textContent;
        modalDescription.textContent = description.textContent;
        
        modalContainer.classList.remove('hidden');
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = hidden;
    }
    
    function closeImageModal() {
        modalContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    // Initialize
    function init() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
        }
        
        // Set up theme change saving
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        })
    }
    
    init();
});
