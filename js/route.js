// Cálculo de la ruta. Solo funciones puras: no tocan el DOM.

const AIRPORT = {
    name: 'Aeropuerto Josep Tarradellas Barcelona-El Prat',
    lat: 41.2974,
    lng: 2.0785
};

// Distancia en línea recta entre dos puntos {lat, lng}, en km (fórmula de Haversine)
function distanceKm(a, b) {
    const R = 6371;
    const toRad = deg => deg * Math.PI / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

// Vecino más cercano: desde `start`, ir siempre al punto pendiente más próximo.
// Devuelve los puntos en el orden de visita y la distancia total aproximada.
function nearestNeighborRoute(start, points) {
    const pending = [...points];
    const route = [];
    let current = start;
    let distance = 0;

    while (pending.length > 0) {
        let nearestIndex = 0;
        let nearestDistance = Infinity;
        pending.forEach((point, i) => {
            const d = distanceKm(current, point);
            if (d < nearestDistance) {
                nearestDistance = d;
                nearestIndex = i;
            }
        });

        current = pending.splice(nearestIndex, 1)[0];
        route.push(current);
        distance += nearestDistance;
    }

    return { route, distance };
}

// URL de Google Maps con las paradas en el orden dado.
// El origen es la ubicación actual del conductor; la última parada es el destino.
function buildGoogleMapsUrl(route) {
    const toCoords = p => `${p.lat},${p.lng}`;
    const params = new URLSearchParams({
        api: '1',
        origin: 'My Location',
        destination: toCoords(route[route.length - 1]),
        travelmode: 'driving'
    });
    const waypoints = route.slice(0, -1).map(toCoords).join('|');
    if (waypoints) params.set('waypoints', waypoints);
    return `https://www.google.com/maps/dir/?${params}`;
}
