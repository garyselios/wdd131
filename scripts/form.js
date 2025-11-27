// Populate product select
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded - initializing form');

    const productSelect = document.getElementById('productName');

    // Clear existing options (except the first one)
    while (productSelect.children.length > 1) {
        productSelect.removeChild(productSelect.lastChild);
    }

    // Add product options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} (Rating: ${product.averagerating}/5)`;
        productSelect.appendChild(option);
    });

    // Set current date as default value for installation date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('installDate').value = today;

    // STAR RATING SYSTEM - SIMPLIFIED AND FUNCTIONAL VERSION
    const starElements = document.querySelectorAll('.star');
    const radioInputs = document.querySelectorAll('input[name="rating"]');

    console.log('Stars found:', starElements.length);
    console.log('Radio inputs found:', radioInputs.length);

    // Initial state: all stars gray
    resetStars();

    // Events for each star
    starElements.forEach((star, index) => {
        const radioInput = radioInputs[index];

        console.log(`Setting up star ${index + 1}`);

        // Mouse over star
        star.addEventListener('mouseenter', function () {
            console.log('Mouse enter on star:', index + 1);
            highlightStars(index + 1);
        });

        // Mouse leaves star
        star.addEventListener('mouseleave', function () {
            console.log('Mouse leave on star:', index + 1);
            const checkedRadio = document.querySelector('input[name="rating"]:checked');
            if (checkedRadio) {
                highlightStars(parseInt(checkedRadio.value));
            } else {
                resetStars();
            }
        });

        // Click on star
        star.addEventListener('click', function () {
            console.log('Click on star:', index + 1);
            radioInput.checked = true;
            highlightStars(index + 1);
        });
    });

    // Also add events to radio inputs in case user clicks directly
    radioInputs.forEach((radio, index) => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                console.log('Radio changed to:', this.value);
                highlightStars(parseInt(this.value));
            }
        });
    });

    function highlightStars(rating) {
        console.log('Highlighting stars up to:', rating);
        resetStars();
        starElements.forEach((star, index) => {
            if (index < rating) {
                star.style.color = '#f1c40f';
            }
        });
    }

    function resetStars() {
        console.log('Resetting stars to gray');
        starElements.forEach(star => {
            star.style.color = '#ddd';
        });
    }

    // Additional form validation
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validate that a product has been selected
        const productName = document.getElementById('productName');
        if (!productName.value) {
            isValid = false;
            highlightError(productName);
        }

        // Validate that a rating has been selected
        const ratingSelected = document.querySelector('input[name="rating"]:checked');
        if (!ratingSelected) {
            isValid = false;
            const starsContainer = document.querySelector('.stars');
            highlightError(starsContainer);
        }

        // Validate installation date
        const installDate = document.getElementById('installDate');
        if (!installDate.value) {
            isValid = false;
            highlightError(installDate);
        }

        if (!isValid) {
            event.preventDefault();
            alert('Please complete all required fields marked with *.');
        }
    });

    function highlightError(element) {
        element.style.borderColor = 'var(--danger)';
        element.style.boxShadow = '0 0 5px var(--danger)';

        // Remove highlight after 3 seconds
        setTimeout(() => {
            element.style.borderColor = '';
            element.style.boxShadow = '';
        }, 3000);
    }
});