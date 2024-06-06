document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Tu compra se agrego al carrito.');
        });
    });
});