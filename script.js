const defaultConfig = {
    app_title: "Gestor de Rutas de Hoteles",
    instruction_text: "Selecciona los hoteles para calcular la ruta más eficiente",
    background_color: "#667eea",
    surface_color: "#ffffff",
    text_color: "#2d3748",
    primary_action_color: "#667eea",
    secondary_action_color: "#48bb78",
    font_family: "Inter",
    font_size: 16
};

const AIRPORT_ADDRESS = "Aeropuerto Josep Tarradellas Barcelona-El Prat";

let hotels = [];
let filteredHotels = [];

function getRouteColor(routeNumber) {
    return ROUTE_COLORS[routeNumber] || '#667eea';
}

function initializeHotels() {
    hotels = HOTELS_DATA.map((hotel, index) => ({
        ...hotel,
        id: `hotel-${index}`,
        selected: false,
        color: getRouteColor(hotel.route)
    }));
    filteredHotels = [...hotels];
    renderHotelsList();
    updateCounts();
}
//comment commit

function renderHotelsList() {
    const listContainer = document.getElementById('hotels-list');

    if (filteredHotels.length === 0) {
        listContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>No se encontraron hoteles con ese criterio de búsqueda.</p>
      </div>
    `;
        return;
    }

    listContainer.innerHTML = filteredHotels.map(hotel => `
    <div class="hotel-card ${hotel.selected ? 'selected' : ''}" data-id="${hotel.id}">
      <div class="hotel-header">
        <div class="hotel-info">
          <span class="hotel-route" style="background-color: ${hotel.color};">Ruta ${hotel.route}</span>
          <h3 class="hotel-name">${hotel.name}</h3>
          <p class="hotel-address">📍 ${hotel.address}</p>
          ${hotel.comment ? `<p class="hotel-comment">${hotel.comment}</p>` : ''}
        </div>
        <div class="checkbox-container">
          <input type="checkbox" class="checkbox" ${hotel.selected ? 'checked' : ''} 
                 data-id="${hotel.id}"
                 onclick="event.stopPropagation()">
        </div>
      </div>
    </div>
  `).join('');

    listContainer.querySelectorAll('.hotel-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('checkbox')) {
                const id = card.dataset.id;
                toggleHotelSelection(id);
            }
        });
    });

    listContainer.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const id = e.target.dataset.id;
            toggleHotelSelection(id);
        });
    });
}

function renderSelectedHotels() {
    const selectedContainer = document.getElementById('selected-hotels');
    const selectedHotels = hotels.filter(h => h.selected);

    let items = [];

    // Agregar el aeropuerto como primer item (origen fijo)
    items.push(`
    <div class="selected-hotel-item" style="border-left-color: #667eea;">
      <div>
        <div class="selected-hotel-name">1. ${AIRPORT_ADDRESS}</div>
        <div style="font-size: 12px; color: #718096; margin-top: 4px;">Origen (Aeropuerto)</div>
      </div>
      <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #667eea;"></div>
    </div>
  `);

    // Agregar los hoteles seleccionados, numerados después del origen
    selectedHotels.forEach((hotel, index) => {
        const num = items.length + index + 1;
        items.push(`
        <div class="selected-hotel-item" style="border-left-color: ${hotel.color};">
          <div>
            <div class="selected-hotel-name">${num}. ${hotel.name}</div>
            <div style="font-size: 12px; color: #718096; margin-top: 4px;">Ruta ${hotel.route}</div>
          </div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${hotel.color};"></div>
        </div>
      `);
    });

    if (selectedHotels.length === 0) {
        selectedContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📌</div>
        <p>Selecciona hoteles de la lista para comenzar a planificar tu ruta desde el aeropuerto.</p>
      </div>
    `;
        document.getElementById('calculate-route-btn').disabled = true;
        document.getElementById('clear-selection-btn').disabled = true;
        return;
    }

    selectedContainer.innerHTML = items.join('');

    // Habilitar el botón si hay al menos 1 hotel seleccionado (origen es fijo)
    document.getElementById('calculate-route-btn').disabled = selectedHotels.length < 1;
    document.getElementById('clear-selection-btn').disabled = false;
}

function updateCounts() {
    document.getElementById('hotel-count').textContent = `${filteredHotels.length} hoteles`;
    const selectedCount = hotels.filter(h => h.selected).length;
    document.getElementById('selected-count').textContent = `${selectedCount} seleccionados`;
}

function toggleHotelSelection(id) {
    const hotel = hotels.find(h => h.id === id);
    if (!hotel) return;

    hotel.selected = !hotel.selected;
    renderHotelsList();
    renderSelectedHotels();
    updateCounts();
}

function filterHotels(searchTerm) {
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
        filteredHotels = [...hotels];
    } else {
        filteredHotels = hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(term) ||
            hotel.address.toLowerCase().includes(term) ||
            hotel.route.toString().includes(term) ||
            (hotel.comment && hotel.comment.toLowerCase().includes(term))
        );
    }

    renderHotelsList();
    updateCounts();
}

function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
    <span>${type === 'success' ? '✅' : '❌'}</span>
    <span>${message}</span>
  `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

document.getElementById('search-input').addEventListener('input', (e) => {
    filterHotels(e.target.value);
});

document.getElementById('calculate-route-btn').addEventListener('click', async () => {
    const selectedHotels = hotels.filter(h => h.selected);

    if (selectedHotels.length < 1) {
        showToast('Selecciona al menos 1 hotel para calcular la ruta desde el aeropuerto', 'error');
        return;
    }

    try {
        // Coordenadas del aeropuerto (agrega estas constantes si no las tienes)
        const AIRPORT_LAT = 41.2974; // Latitud del aeropuerto
        const AIRPORT_LNG = 2.0785; // Longitud del aeropuerto

        // Calcular la ruta usando Nearest Neighbor
        const { route: optimalRoute, distance } = calculateNearestNeighborRoute(AIRPORT_LAT, AIRPORT_LNG, selectedHotels);

        // Construir waypoints con el orden calculado (todos menos el último)
        const waypoints = optimalRoute.slice(0, -1).map(h => `${h.lat},${h.lng}`).join('|');
        const destination = `${optimalRoute[optimalRoute.length - 1].lat},${optimalRoute[optimalRoute.length - 1].lng}`;
        const origin = 'My+Location';

        // URL de Google Maps con el orden calculado (sin optimize=true, ya que lo calculamos nosotros)
        let mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${destination}&waypoints=${waypoints}&travelmode=driving`;

        window.open(mapsUrl, '_blank', 'noopener noreferrer');
        showToast(`Ruta calculada (${distance.toFixed(2)} km aproximados) con Google Maps 🚗`, 'success');

    } catch (err) {
        console.error("Error al calcular la ruta:", err);
        showToast('Error al calcular la ruta', 'error');
    }
});


document.getElementById('clear-selection-btn').addEventListener('click', () => {
    hotels.forEach(hotel => hotel.selected = false);
    renderHotelsList();
    renderSelectedHotels();
    updateCounts();
    showToast('Selección limpiada', 'success');
});

async function initializeApp() {
    if (window.elementSdk) {
        await window.elementSdk.init({
            defaultConfig,
            onConfigChange: async (config) => {
                const appTitle = document.getElementById('app-title');
                const instructionText = document.getElementById('instruction-text');
                const customFont = config.font_family || defaultConfig.font_family;
                const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
                const baseSize = config.font_size || defaultConfig.font_size;

                if (appTitle) {
                    appTitle.textContent = config.app_title || defaultConfig.app_title;
                    appTitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
                    appTitle.style.fontSize = `${baseSize * 2}px`;
                    appTitle.style.color = config.text_color || defaultConfig.text_color;
                }

                if (instructionText) {
                    instructionText.textContent = config.instruction_text || defaultConfig.instruction_text;
                    instructionText.style.fontFamily = `${customFont}, ${baseFontStack}`;
                    instructionText.style.fontSize = `${baseSize}px`;
                }

                document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, #764ba2 100%)`;

                const surfaces = document.querySelectorAll('.header, .hotels-section, .sidebar, .hotel-card, .selected-hotel-item');
                surfaces.forEach(el => {
                    el.style.background = config.surface_color || defaultConfig.surface_color;
                });

                const textElements = document.querySelectorAll('.section-title, .hotel-name, .hotel-address, .hotel-comment, .selected-hotel-name');
                textElements.forEach(el => {
                    el.style.color = config.text_color || defaultConfig.text_color;
                    el.style.fontFamily = `${customFont}, ${baseFontStack}`;
                });

                const primaryBtns = document.querySelectorAll('.btn-primary, .hotel-count, .hotel-route');
                primaryBtns.forEach(el => {
                    el.style.background = config.primary_action_color || defaultConfig.primary_action_color;
                });

                const successBtns = document.querySelectorAll('.btn-success');
                successBtns.forEach(el => {
                    el.style.background = config.secondary_action_color || defaultConfig.secondary_action_color;
                });

                const checkboxes = document.querySelectorAll('.checkbox');
                checkboxes.forEach(el => {
                    el.style.accentColor = config.primary_action_color || defaultConfig.primary_action_color;
                });

                const selectedItems = document.querySelectorAll('.selected-hotel-item');
                selectedItems.forEach(el => {
                    el.style.borderLeftColor = config.primary_action_color || defaultConfig.primary_action_color;
                });
            },
            mapToCapabilities: (config) => ({
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            config.background_color = value;
                            window.elementSdk.setConfig({ background_color: value });
                        }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (value) => {
                            config.surface_color = value;
                            window.elementSdk.setConfig({ surface_color: value });
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            config.text_color = value;
                            window.elementSdk.setConfig({ text_color: value });
                        }
                    },
                    {
                        get: () => config.primary_action_color || defaultConfig.primary_action_color,
                        set: (value) => {
                            config.primary_action_color = value;
                            window.elementSdk.setConfig({ primary_action_color: value });
                        }
                    },
                    {
                        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                        set: (value) => {
                            config.secondary_action_color = value;
                            window.elementSdk.setConfig({ secondary_action_color: value });
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (value) => {
                        config.font_family = value;
                        window.elementSdk.setConfig({ font_family: value });
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (value) => {
                        config.font_size = value;
                        window.elementSdk.setConfig({ font_size: value });
                    }
                }
            }),
            mapToEditPanelValues: (config) => new Map([
                ["app_title", config.app_title || defaultConfig.app_title],
                ["instruction_text", config.instruction_text || defaultConfig.instruction_text]
            ])
        });
    }

    initializeHotels();
}

// Función para calcular distancia entre dos puntos (fórmula de Haversine en km)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Función para calcular la ruta usando Nearest Neighbor
function calculateNearestNeighborRoute(airportLat, airportLng, selectedHotels) {
    const hotelCoords = selectedHotels.map(h => ({ lat: h.lat, lng: h.lng, name: h.name }));
    const route = [];
    let currentLat = airportLat;
    let currentLng = airportLng;
    let remainingHotels = [...hotelCoords];
    let totalDistance = 0;

    while (remainingHotels.length > 0) {
        let nearestIndex = -1;
        let minDistance = Infinity;

        // Encontrar el hotel más cercano al punto actual
        for (let i = 0; i < remainingHotels.length; i++) {
            const dist = calculateDistance(currentLat, currentLng, remainingHotels[i].lat, remainingHotels[i].lng);
            if (dist < minDistance) {
                minDistance = dist;
                nearestIndex = i;
            }
        }

        // Agregar el hotel más cercano a la ruta
        const nearestHotel = remainingHotels.splice(nearestIndex, 1)[0];
        route.push(nearestHotel);
        totalDistance += minDistance;

        // Actualizar el punto actual
        currentLat = nearestHotel.lat;
        currentLng = nearestHotel.lng;
    }

    return { route, distance: totalDistance };
}


initializeApp();
