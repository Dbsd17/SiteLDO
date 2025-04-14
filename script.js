document.addEventListener('DOMContentLoaded', function() {
    // Menu burger
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Changement du header au scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Menu items data
    const menuItems = {
        entrees: [
            {
                name: "Tartare de saumon",
                price: "14€",
                description: "Saumon frais, avocat, citron vert et coriandre",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Foie gras maison",
                price: "18€",
                description: "Foie gras de canard mi-cuit, chutney de figues et pain brioché toasté",
                image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Salade du lac",
                price: "12€",
                description: "Mélange de jeunes pousses, noix, fromage de chèvre et vinaigrette au miel",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        plats: [
            {
                name: "Filet de boeuf",
                price: "28€",
                description: "Filet de boeuf Charolais, sauce au vin rouge, gratin dauphinois et légumes de saison",
                image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Dos de bar",
                price: "24€",
                description: "Dos de bar rôti, écrasé de pommes de terre à l'huile d'olive et émulsion citronnée",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Risotto aux cèpes",
                price: "20€",
                description: "Risotto crémeux aux cèpes frais et parmesan Reggiano",
                image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        desserts: [
            {
                name: "Fondant au chocolat",
                price: "9€",
                description: "Fondant coulant au chocolat noir, glace vanille de Madagascar",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Tarte tatin",
                price: "8€",
                description: "Tarte tatin traditionnelle, crème fraîche fouettée",
                image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Assiette de fromages",
                price: "12€",
                description: "Sélection de fromages affinés, confiture de figues et noix",
                image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        boissons: [
            {
                name: "Vin rouge - Château Lacombe",
                price: "8€/verre",
                description: "Bordeaux rouge 2018, notes de fruits rouges et épices douces",
                image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Vin blanc - Domaine des Oliviers",
                price: "7€/verre",
                description: "Sancerre 2020, fraîcheur et minéralité",
                image: "https://images.unsplash.com/photo-1518818608552-195ed130cdf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Cocktail signature",
                price: "12€",
                description: "Le Lac de l'Ouest - Gin, liqueur de violette, jus de citron et tonic",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ]
    };

    // Gestion des onglets du menu
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuItemsContainer = document.querySelector('.menu-items');
    
    // Afficher les entrées par défaut
    displayMenuItems('entrees');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            // Afficher les items correspondants
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
    
    function displayMenuItems(category) {
        // Vider le conteneur
        menuItemsContainer.innerHTML = '';
        
        // Ajouter les items de la catégorie sélectionnée
        menuItems[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item', 'active');
            menuItem.innerHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h3>${item.name}</h3>
                        <span>${item.price}</span>
                    </div>
                    <p>${item.description}</p>
                </div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }

    // Gestion du formulaire de réservation
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        
        // Ici, vous pourriez envoyer ces données à un serveur
        console.log('Réservation:', { name, email, phone, date, time, guests });
        
        // Afficher un message de confirmation
        alert(`Merci ${name}, votre réservation pour ${guests} personnes le ${date} à ${time} a bien été enregistrée. Nous vous avons envoyé une confirmation par email.`);
        
        // Réinitialiser le formulaire
        reservationForm.reset();
    });

    // Gestion du formulaire de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        console.log('Inscription newsletter:', email);
        alert(`Merci pour votre inscription avec l'email ${email}.`);
        newsletterForm.querySelector('input').value = '';
    });

    // Animation au défilement
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.menu-item, .gallery-item, .about-content, .about-image, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialiser les éléments avec une opacité à 0 pour l'animation
    document.querySelectorAll('.menu-item, .gallery-item, .about-content, .about-image, .contact-info, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Écouter l'événement de défilement
    window.addEventListener('scroll', animateOnScroll);
    // Appeler une première fois au chargement
    animateOnScroll();
});