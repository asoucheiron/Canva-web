// Pintado de la interfaz. El HTML vive en las <template> de index.html y los estilos en styles.css;
// aquí solo se clonan las plantillas y se rellenan con texto.

const UI = (() => {
    const el = {
        hotelsList: document.getElementById('hotels-list'),
        selectedList: document.getElementById('selected-hotels'),
        hotelCount: document.getElementById('hotel-count'),
        selectedCount: document.getElementById('selected-count'),
        calculateBtn: document.getElementById('calculate-route-btn'),
        clearBtn: document.getElementById('clear-selection-btn'),
        searchInput: document.getElementById('search-input')
    };

    function fromTemplate(id, fields = {}) {
        const node = document.getElementById(id).content.firstElementChild.cloneNode(true);
        for (const [field, value] of Object.entries(fields)) {
            node.querySelector(`[data-field="${field}"]`).textContent = value;
        }
        return node;
    }

    // Texto oscuro sobre colores claros (blanco, amarillo, cian...) y blanco sobre los oscuros
    function readableTextColor(hex) {
        const n = parseInt(hex.slice(1), 16);
        const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
        return (0.299 * r + 0.587 * g + 0.114 * b) > 160 ? '#1a202c' : '#ffffff';
    }

    function setRouteColor(node, color) {
        node.style.setProperty('--route-color', color);
        node.style.setProperty('--route-text', readableTextColor(color));
    }

    function emptyState(icon, message) {
        return fromTemplate('empty-state-template', { icon, message });
    }

    function renderHotelList(hotels) {
        if (hotels.length === 0) {
            el.hotelsList.replaceChildren(
                emptyState('🔍', 'No se encontraron hoteles con ese criterio de búsqueda.'));
            return;
        }

        el.hotelsList.replaceChildren(...hotels.map(hotel => {
            const card = fromTemplate('hotel-card-template', {
                route: `Ruta ${hotel.route}`,
                name: hotel.name,
                address: hotel.address,
                comment: hotel.comment || ''
            });
            card.dataset.id = hotel.id;
            card.classList.toggle('selected', hotel.selected);
            card.querySelector('.checkbox').checked = hotel.selected;
            setRouteColor(card, hotel.color);
            return card;
        }));
    }

    function renderSelected(selected) {
        el.calculateBtn.disabled = selected.length === 0;
        el.clearBtn.disabled = selected.length === 0;

        if (selected.length === 0) {
            el.selectedList.replaceChildren(emptyState('📌',
                'Selecciona hoteles de la lista para comenzar a planificar tu ruta desde el aeropuerto.'));
            return;
        }

        // El aeropuerto es siempre la parada 1; los hoteles van a continuación
        const airport = fromTemplate('selected-item-template', {
            name: `1. ${AIRPORT.name}`,
            meta: 'Origen (Aeropuerto)'
        });
        const items = selected.map((hotel, i) => {
            const item = fromTemplate('selected-item-template', {
                name: `${i + 2}. ${hotel.name}`,
                meta: `Ruta ${hotel.route}`
            });
            setRouteColor(item, hotel.color);
            return item;
        });
        el.selectedList.replaceChildren(airport, ...items);
    }

    function updateCounts(visibleCount, selectedCount) {
        el.hotelCount.textContent = `${visibleCount} hoteles`;
        el.selectedCount.textContent = `${selectedCount} seleccionados`;
    }

    let toastTimer;
    function showToast(message, type = 'success') {
        document.querySelector('.toast')?.remove();
        clearTimeout(toastTimer);
        const toast = fromTemplate('toast-template', {
            icon: type === 'success' ? '✅' : '❌',
            message
        });
        toast.classList.add(type);
        document.body.appendChild(toast);
        toastTimer = setTimeout(() => toast.remove(), 3000);
    }

    return { el, renderHotelList, renderSelected, updateCounts, showToast };
})();
