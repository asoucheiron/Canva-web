// Estado de la app y eventos. Une los datos (hotels.js), el cálculo (route.js),
// la interfaz (ui.js) y el tema de Canva (theme.js).

let hotels = [];
let searchTerm = '';

function getRouteColor(routeNumber) {
    return ROUTE_COLORS[routeNumber] || '#667eea';
}

function selectedHotels() {
    return hotels.filter(h => h.selected);
}

function visibleHotels() {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return hotels;
    return hotels.filter(h =>
        h.name.toLowerCase().includes(term) ||
        h.address.toLowerCase().includes(term) ||
        h.route.toString().includes(term) ||
        (h.comment && h.comment.toLowerCase().includes(term))
    );
}

function render() {
    const visible = visibleHotels();
    const selected = selectedHotels();
    UI.renderHotelList(visible);
    UI.renderSelected(selected);
    UI.updateCounts(visible.length, selected.length);
}

function toggleHotel(id) {
    const hotel = hotels.find(h => h.id === id);
    if (!hotel) return;
    hotel.selected = !hotel.selected;
    render();
}

function calculateRoute() {
    const selected = selectedHotels();
    if (selected.length === 0) {
        UI.showToast('Selecciona al menos 1 hotel para calcular la ruta desde el aeropuerto', 'error');
        return;
    }

    try {
        const { route, distance } = nearestNeighborRoute(AIRPORT, selected);
        window.open(buildGoogleMapsUrl(route), '_blank', 'noopener noreferrer');
        UI.showToast(`Ruta calculada (${distance.toFixed(2)} km aproximados) con Google Maps 🚗`, 'success');
    } catch (err) {
        console.error('Error al calcular la ruta:', err);
        UI.showToast('Error al calcular la ruta', 'error');
    }
}

function clearSelection() {
    hotels.forEach(h => { h.selected = false; });
    render();
    UI.showToast('Selección limpiada', 'success');
}

function bindEvents() {
    UI.el.searchInput.addEventListener('input', e => {
        searchTerm = e.target.value;
        render();
    });

    // Un solo listener para toda la lista: vale tanto para la tarjeta como para su checkbox
    UI.el.hotelsList.addEventListener('click', e => {
        const card = e.target.closest('.hotel-card');
        if (card) toggleHotel(card.dataset.id);
    });

    UI.el.calculateBtn.addEventListener('click', calculateRoute);
    UI.el.clearBtn.addEventListener('click', clearSelection);
}

async function initApp() {
    try {
        await initTheme();
    } catch (err) {
        console.error('No se pudo iniciar el tema de Canva:', err);
    }

    hotels = HOTELS_DATA.map((hotel, index) => ({
        ...hotel,
        id: `hotel-${index}`,
        selected: false,
        color: getRouteColor(hotel.route)
    }));

    bindEvents();
    render();
}

initApp();
