document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu-container');
    const orderFooter = document.getElementById('order-footer');
    const itemCountSpan = document.getElementById('item-count');
    let selectedItems = new Set(); // Usamos un Set para evitar duplicados

    // Datos del menú (esto vendría de un menu.json en un caso real)
    const menuData = [
        { id: 1, nombre: "STEAK DE LOMO", descripcion: "Corte premium de lomo de res...", precio: "22.900", imagen: "url_de_la_imagen_del_steak.jpg" },
        { id: 2, nombre: "PAPAS RÚSTICAS", descripcion: "Papas cortadas en gajos, sazonadas...", precio: "6.900", imagen: "url_de_la_imagen_de_papas.jpg" },
        { id: 3, nombre: "ENSALADA MIXTA", descripcion: "Mezcla fresca de lechugas, tomate...", precio: "4.900", imagen: "url_de_la_imagen_de_ensalada.jpg" }
    ];

    function renderMenu() {
        menuContainer.innerHTML = '';
        menuData.forEach(plato => {
            const isSelected = selectedItems.has(plato.id);
            const buttonClass = isSelected ? 'add-button selected' : 'add-button';
            const buttonIcon = isSelected ? '✓' : '+';

            const platoHTML = `
                <article class="plato-card" data-id="${plato.id}">
                    <img src="https://via.placeholder.com/110" alt="${plato.nombre}" class="plato-imagen">
                    <div class="plato-info">
                        <div>
                            <h2>${plato.nombre}</h2>
                            <p class="descripcion">${plato.descripcion}</p>
                        </div>
                        <p class="precio">$${plato.precio}</p>
                    </div>
                    <button class="${buttonClass}">${buttonIcon}</button>
                </article>
            `;
            menuContainer.innerHTML += platoHTML;
        });
        addEventListenersToButtons();
    }

    function addEventListenersToButtons() {
        document.querySelectorAll('.plato-card').forEach(card => {
            card.querySelector('.add-button').addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que el click se propague a la card
                const platoId = parseInt(card.dataset.id);
                toggleSelection(platoId);
            });
        });
    }

    function toggleSelection(platoId) {
        if (selectedItems.has(platoId)) {
            selectedItems.delete(platoId);
        } else {
            selectedItems.add(platoId);
        }
        updateUI();
    }
    
    function updateUI() {
        // Actualizar contador
        const count = selectedItems.size;
        itemCountSpan.textContent = count;
        
        // Actualizar visibilidad del footer
        if (count > 0) {
            orderFooter.classList.add('visible');
        } else {
            orderFooter.classList.remove('visible');
        }
        
        // Volver a dibujar el menú para reflejar los botones seleccionados
        renderMenu();
    }
    
    // Carga inicial
    renderMenu();
});
