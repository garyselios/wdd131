// Poblar el select de productos
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM cargado - inicializando formulario');

    const productSelect = document.getElementById('productName');

    // Limpiar opciones existentes (excepto la primera)
    while (productSelect.children.length > 1) {
        productSelect.removeChild(productSelect.lastChild);
    }

    // Agregar opciones de productos
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} (Rating: ${product.averagerating}/5)`;
        productSelect.appendChild(option);
    });

    // Establecer la fecha actual como valor por defecto para la fecha de instalación
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('installDate').value = today;

    // SISTEMA DE ESTRELLAS - VERSIÓN SIMPLIFICADA Y FUNCIONAL
    const starElements = document.querySelectorAll('.star');
    const radioInputs = document.querySelectorAll('input[name="rating"]');

    console.log('Estrellas encontradas:', starElements.length);
    console.log('Radio inputs encontrados:', radioInputs.length);

    // Estado inicial: todas las estrellas grises
    resetStars();

    // Eventos para cada estrella
    starElements.forEach((star, index) => {
        const radioInput = radioInputs[index];

        console.log(`Configurando estrella ${index + 1}`);

        // Mouse sobre la estrella
        star.addEventListener('mouseenter', function () {
            console.log('Mouse enter en estrella:', index + 1);
            highlightStars(index + 1);
        });

        // Mouse sale de la estrella
        star.addEventListener('mouseleave', function () {
            console.log('Mouse leave en estrella:', index + 1);
            const checkedRadio = document.querySelector('input[name="rating"]:checked');
            if (checkedRadio) {
                highlightStars(parseInt(checkedRadio.value));
            } else {
                resetStars();
            }
        });

        // Click en la estrella
        star.addEventListener('click', function () {
            console.log('Click en estrella:', index + 1);
            radioInput.checked = true;
            highlightStars(index + 1);
        });
    });

    // También agregar eventos a los radio inputs por si el usuario hace click directamente
    radioInputs.forEach((radio, index) => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                console.log('Radio cambiado a:', this.value);
                highlightStars(parseInt(this.value));
            }
        });
    });

    function highlightStars(rating) {
        console.log('Resaltando estrellas hasta:', rating);
        resetStars();
        starElements.forEach((star, index) => {
            if (index < rating) {
                star.style.color = '#f1c40f';
            }
        });
    }

    function resetStars() {
        console.log('Reseteando estrellas a gris');
        starElements.forEach(star => {
            star.style.color = '#ddd';
        });
    }

    // Validación adicional del formulario
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validar que se haya seleccionado un producto
        const productName = document.getElementById('productName');
        if (!productName.value) {
            isValid = false;
            highlightError(productName);
        }

        // Validar que se haya seleccionado una calificación
        const ratingSelected = document.querySelector('input[name="rating"]:checked');
        if (!ratingSelected) {
            isValid = false;
            const starsContainer = document.querySelector('.stars');
            highlightError(starsContainer);
        }

        // Validar fecha de instalación
        const installDate = document.getElementById('installDate');
        if (!installDate.value) {
            isValid = false;
            highlightError(installDate);
        }

        if (!isValid) {
            event.preventDefault();
            alert('Por favor, completa todos los campos requeridos marcados con *.');
        }
    });

    function highlightError(element) {
        element.style.borderColor = 'var(--danger)';
        element.style.boxShadow = '0 0 5px var(--danger)';

        // Remover el highlight después de 3 segundos
        setTimeout(() => {
            element.style.borderColor = '';
            element.style.boxShadow = '';
        }, 3000);
    }
});