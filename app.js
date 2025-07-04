document.addEventListener('DOMContentLoaded', () => {

    // NUESTRA "LISTA DE COMPRAS" (LOS DATOS DEL MENÚ)
    // Usamos imágenes reales de alta calidad para que se vea bien al instante.
    const menuItems = [
        {
            id: 1,
            name: "STEAK DE LOMO",
            description: "Corte premium de lomo de res, jugoso, tierno y sellado a la perfección.",
            price: "22.900",
            image: "https://images.pexels.com/photos/361184/pexels-photo-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2,
            name: "PAPAS RÚSTICAS",
            description: "Papas cortadas en gajos, sazonadas con especias y hierbas horneadas.",
            price: "6.900",
            image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 3,
            name: "ENSALADA MIXTA",
            description: "Mezcla fresca de lechugas, tomate, pepino y zanahoria con aderezo a gusto.",
            price: "4.900",
            image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 4,
            name: "TARTA DE CHOCOLATE",
            description: "Base crujiente y corazón cremoso de praliné y avellanas.",
            price: "5.500",
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

    const menuContainer = document.getElementById('menu-container');
    const orderFooter = document.getElementById('order-footer');
    const itemCountSpan = document.getElementById('item-count');
    const selectedItems = new Set();

    // El "Chef" lee la lista de compras y empieza a "emplatar"
    menuItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'plato-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="plato-imagen">
            <div class="plato-info">
                <h2>${item.name}</h2>
                <p class="descripcion">${item.description}</p>
                <p class="precio">$${item.price}</p>
            </div>
            <button class="add-button" data-id="${item.id}">+</button>
        `;
        menuContainer.appendChild(card);
    });

    // El "Chef" está atento a cuando tocas un botón "+"
    menuContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-button')) {
            const button = event.target;
            const itemId = button.dataset.id;

            // Cambiamos el estado: seleccionado o no seleccionado
            if (selectedItems.has(itemId)) {
                selectedItems.delete(itemId);
                button.classList.remove('selected');
                button.textContent = '+';
            } else {
                selectedItems.add(itemId);
                button.classList.add('selected');
                button.textContent = '−'; // Cambiamos a un signo de menos
            }

            // Actualizamos el contador y mostramos/ocultamos el botón de pedir
            itemCountSpan.textContent = selectedItems.size;
            if (selectedItems.size > 0) {
                orderFooter.classList.add('visible');
            } else {
                orderFooter.classList.remove('visible');
            }
        }
    });
});
