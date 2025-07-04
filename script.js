document.addEventListener('DOMContentLoaded', () => {

    // Definimos los datos del menú aquí mismo para simplicidad.
    // Usamos imágenes de alta calidad para un resultado profesional.
    const menuData = [
        {
            name: "STEAK DE LOMO",
            description: "Corte premium de lomo de res, jugoso, tierno y sellado a la perfección. Ideal para los amantes de la carne.",
            price: "$22.900",
            image: "https://images.pexels.com/photos/361184/pexels-photo-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "PAPAS RÚSTICAS",
            description: "Papas cortadas en gajos, sazonadas con especias y hierbas, horneadas o fritas hasta quedar...",
            price: "$6.900",
            image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "ENSALADA MIXTA",
            description: "Mezcla fresca de lechugas, jitomate, pepino y zanahoria, con aderezo a gusto. Ligera y refrescante.",
            price: "$4.900",
            image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "TARTA DE PRAMBUESA",
            description: "Base crujiente con un cremoso mousse de praliné y chocolate.",
            price: "$5.500",
            image: "https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

    const container = document.getElementById('menu-items-container');

    // Creamos las tarjetas de los platos dinámicamente
    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'plato-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="plato-imagen">
            <div class="plato-info">
                <h2>${item.name}</h2>
                <p class="descripcion">${item.description}</p>
                <span class="precio">${item.price}</span>
            </div>
            <button class="check-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `;
        container.appendChild(card);
    });

    // Añadimos la funcionalidad a los botones de check
    const checkButtons = document.querySelectorAll('.check-button');
    checkButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Simplemente añade o quita la clase 'selected'
            button.classList.toggle('selected');
        });
    });
});
