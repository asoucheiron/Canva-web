BACKUP DE TOMTOM API:
```Javascript
document.getElementById('calculate-route-btn').addEventListener('click', async () => {
      const selectedHotels = hotels.filter(h => h.selected);
      if (selectedHotels.length < 2) {
        showToast('Selecciona al menos 2 hoteles para calcular la ruta', 'error');
        return;
      }

      /* --- Aquí obtenim les coordenades de cada hotel ---
      // Si tens coordenades predefinides al JSON, millor. Si no, pots fer un geocoding prèviament.*/
      const points = selectedHotels.map(h => ({
        lat: h.lat,  // afegeix aquests camps al teu JSON
        lng: h.lng
      }));

      /*Funció per optimitzar els diferents punts d'interès de la ruta */
      async function optimizeTomTom(points) {
        const apiKey = 'TU_API_KEY_DE_TOMTOM'; // no subir nunca la clave real al repositorio
        /*CORRECCIÓN: El formato correcto es lat1,lon1:lat2,lon2:...*/
        const locations = points.map(p => `${p.lat},${p.lng}`).join(':');
        /*La URL de TomTom para Waypoint Optimization*/
        const url = `https://api.tomtom.com/routing/waypointoptimization/1?key=${apiKey}&locations=${locations}&travelMode=car`;

        const resp = await fetch(url);
        const data = await resp.json();

        console.log('Resposta TomTom:', data);

        if (!data.optimizedOrder) {
          /*Mensaje de error más detallado*/
          const errorMessage = data.detailedErrors && data.detailedErrors.length > 0
            ? data.detailedErrors[0].message
            : 'TomTom API no retornó optimizedOrder. Verifica la clave API o las ubicaciones.';
          throw new Error(errorMessage);
        }

        /*Mapeamos el orden optimizado a los objetos de hotel originales*/
        const optimizedHotels = data.optimizedOrder.map(index => selectedHotels.find(h =>
          h.lat === points[index].lat && h.lng === points[index].lng));

        return optimizedHotels;
      }

      try {
        const optimizedHotels = await optimizeTomTom(points);

        /*Obtenemos las direcciones optimizadas*/
        const optimizedAddresses = optimizedHotels.map(h => h.address);

        const origin = encodeURIComponent(optimizedAddresses[0]);
        const destination = encodeURIComponent(optimizedAddresses[optimizedAddresses.length - 1]);
        /*Los waypoints son los puntos intermedios (todos excepto el primero y el último)*/
        const waypoints = optimizedAddresses.slice(1, -1).map(encodeURIComponent).join('|');

        /*CORRECCIÓN: Construcción correcta de la URL de Google Maps*/
        let mapsUrl = `https://www.google.com/maps/dir/${origin}/${destination}`;
        if (waypoints.length > 0) {
          /*Si hay waypoints, los añadimos a la URL.
          // Es más simple usar el formato /dir/origen/punto1/punto2/destino
          // o usar el formato de URL de búsqueda detallada para waypoints.
          // Usaremos un formato simple para la mayoría de navegadores:*/
          mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}&travelmode=driving`;
        } else {
          mapsUrl = `https://www.google.com/maps/dir/${origin}/${destination}/?travelmode=driving`;
        }

        window.open(mapsUrl, '_blank', 'noopener noreferrer');
        showToast('Ruta optimizada calculada con TomTom y abierta en Google Maps 🚗', 'success');

        /*
        // Opcional: Actualizar la lista de seleccionados con el orden optimizado*/
        hotels.forEach(h => { h.selected = false; });
        optimizedHotels.forEach(h => {
          const originalHotel = hotels.find(item => item.id === h.id);
          if (originalHotel) originalHotel.selected = true;
        });
        renderSelectedHotels(); /*Renderiza la lista con el nuevo orden*/

      } catch (err) {
        console.error(err);
        showToast(`Error al optimizar la ruta: ${err.message}`, 'error');
      }
    });
```