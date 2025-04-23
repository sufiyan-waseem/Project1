// JavaScript for the Amazon clone

// Simulate a sign-in button functionality
document.querySelector('.nav-signin').addEventListener('click', () => {
    alert('Sign-in functionality is not implemented yet.');
});

// Simulate a cart update
document.querySelector('.nav-cart').addEventListener('click', () => {
    alert('Your cart is empty! Add some items.');
});

// Handle search functionality
document.querySelector('.search-icon').addEventListener('click', () => {
    const searchValue = document.querySelector('.search-input').value;
    if (searchValue) {
        alert(`Searching for: ${searchValue}`);
    } else {
        alert('Please enter a search term.');
    }
});

// Add hover effect on the navigation menu items
document.querySelectorAll('.panel-options p').forEach(option => {
    option.addEventListener('mouseover', () => {
        option.style.textDecoration = 'underline';
    });
    option.addEventListener('mouseout', () => {
        option.style.textDecoration = 'none';
    });
});

// Add functionality to "See more" links in the shop-section
document.querySelectorAll('.shop-section .box-content p').forEach(link => {
    link.addEventListener('click', () => {
        alert('This section is under construction.');
    });
});

// Toggle dropdown for "All" category in search bar
document.querySelector('.serach-select').addEventListener('click', () => {
    alert('Category dropdown clicked. Add categories as needed.');
});

// Add location update functionality
document.querySelector('.nav-address').addEventListener('click', () => {
    const newLocation = prompt('Enter your new delivery location:', 'India');
    if (newLocation) {
        document.querySelector('.add-second').textContent = newLocation;
    }
});

document.querySelector('.footer-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

