document.addEventListener('DOMContentLoaded', () => {

    // 1. REESTRUCTURAMOS LOS DATOS POR CATEGORÍAS
    const menuData = [
        {
            category: "Para Partir",
            id: "para-partir",
            items: [
                {
                    name: "STEAK DE LOMO",
                    description: "Corte premium de lomo de res, jugoso, tierno y sellado a la perfección.",
                    price: "$22.900",
                    image: "https://images.pexels.com/photos/361184/pexels-photo-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    name: "SHOT DE ALGAS",
                    description: "Aguachile verde / Apio / Palta / Manzana verde / 3 tipos de algas, ulte, luche y cochayuyo.",
                    price: "$3.900",
                    image: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
            ]
        },
        {
            category: "Para Picar y Compartir",
            id: "para-picar",
            items: [
                {
                    name: "CEVICHE DE LOS PIURES",
                    description: "Pesca fresca / Leche de tigre / Palta / Camote crocante + Tostadas de foccacia.",
                    price: "Desde: $15.900",
                    image: "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    name: "PAPAS RÚSTICAS",
                    description: "Papas cortadas en gajos, sazonadas con especias y hierbas, horneadas o fritas.",
                    price: "$6.900",
                    image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
            ]
        },
        {
            category: "Postres",
            id: "postres",
            items: [
                {
                    name: "TARTA DE FRAMBUESA",
                    description: "Base crujiente con un cremoso mousse de praliné y chocolate.",
                    price: "$5.500",
                    image: "https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                 {
                    name: "ENSALADA MIXTA",
                    description: "Mezcla fresca de lechugas, jitomate, pepino y zanahoria, con aderezo a gusto.",
                    price: "$4.900",
                    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
            ]
        }
    ];

    const menuContainer = document.getElementById('menu-items-container');
    const navContainer = document.getElementById('category-nav');
    const menuContent = document.getElementById('menu-content');

    // 2. GENERAMOS EL MENÚ Y LA NAVEGACIÓN DINÁMICAMENTE
    menuData.forEach((category, index) => {
        // Crear link en la barra de navegación
        const navLink = document.createElement('a');
        navLink.href = `#${category.id}`;
        navLink.textContent = category.category;
        if (index === 0) {
            navLink.classList.add('active'); // Activamos el primer link
        }
        navContainer.appendChild(navLink);

        // Crear la sección para la categoría
        const section = document.createElement('section');
        section.id = category.id;
        section.className = 'category-section';

        // Crear el título de la categoría
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = category.category;
        section.appendChild(title);

        // Crear las tarjetas de los platos para esta categoría
        category.items.forEach(item => {
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
            section.appendChild(card);
        });

        menuContainer.appendChild(section);
    });

    // 3. AÑADIMOS LA FUNCIONALIDAD A LOS BOTONES DE CHECK
    const checkButtons = document.querySelectorAll('.check-button');
    checkButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('selected');
        });
    });
    
    // 4. LÓGICA PARA ACTUALIZAR EL LINK ACTIVO AL HACER SCROLL
    const sections = document.querySelectorAll('.category-section');
    const navLinks = document.querySelectorAll('.category-nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { root: menuContent, threshold: 0.5 }); // Usamos menuContent como raíz y un umbral de 50%

    sections.forEach(section => {
        observer.observe(section);
    });

});
