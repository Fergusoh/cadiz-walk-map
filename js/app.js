// Data for all 19 stops
const stops = [
    { id: 1, name: "Plaza de San Juan de Dios", lat: 36.5303, lng: -6.2927, description: "City hall, fountains, palms — Cádiz’s traditional civic heart and perfect starting point." },
    { id: 2, name: "Arco de la Rosa (Medieval Gate)", lat: 36.5293, lng: -6.2943, description: "One of the original medieval gateways into Cádiz; connects Cathedral square to the old walls." },
    { id: 3, name: "Casa del Obispo (Archaeological Site)", lat: 36.5297, lng: -6.2955, description: "Layers of Roman, Visigothic, and Islamic Cádiz revealed underground beside the Cathedral." },
    { id: 4, name: "Teatro Romano", lat: 36.5317, lng: -6.2925, description: "1st-century BC Roman theatre hidden behind the cathedral. Free entry and surprisingly huge." },
    { id: 5, name: "Cádiz Cathedral (Baroque / Neo-classical)", lat: 36.5294, lng: -6.2952, description: "The “Cathedral of the Americas,” built with New World silver. Tower offers the best views in Cádiz." },
    { id: 6, name: "Barrio del Pópulo (Medieval Quarter)", lat: 36.5314, lng: -6.2934, description: "Oldest neighbourhood in Western Europe. Arches, tight alleyways, medieval atmosphere." },
    { id: 7, name: "Plaza de las Flores", lat: 36.5323, lng: -6.2979, description: "Cádiz’s liveliest square — flower stalls, cafés, and people-watching." },
    { id: 8, name: "Mercado Central (Central Market)", lat: 36.5318, lng: -6.2983, description: "Seafood hall, tapas stalls, fresh produce, vibrant energy." },
    { id: 9, name: "Plaza Mina (19th-Century Garden Square)", lat: 36.5352, lng: -6.2969, description: "Elegant shaded square filled with ficus trees; one of Cádiz’s most atmospheric plazas." },
    { id: 10, name: "Museo de Cádiz", lat: 36.5352, lng: -6.2965, description: "Phoenician sarcophagi, Roman statues, archaeology of ancient Gades, and a fine arts gallery." },
    { id: 11, name: "Torre Tavira (Camera Obscura)", lat: 36.5367, lng: -6.2950, description: "18th-century watchtower with Cádiz’s best panoramic view and a working camera obscura." },
    { id: 12, name: "Plaza del Mentidero", lat: 36.5356, lng: -6.3008, description: "Charming plaza known historically as a meeting place for gossip and debate (“mentidero”)." },
    { id: 13, name: "Oratorio de la Santa Cueva", lat: 36.5336, lng: -6.2953, description: "Quiet chapel with dramatic religious art and paintings attributed to Goya." },
    { id: 14, name: "Gran Teatro Falla", lat: 36.5358, lng: -6.3008, description: "Red-brick Neo-Mudejar theatre — the heart of the Cádiz Carnival and its famous chirigotas." },
    { id: 15, name: "Alameda Apodaca (Seaside Promenade)", lat: 36.5370, lng: -6.2983, description: "Beautiful waterfront walk with tile benches, gardens, lanterns, and huge ficus trees." },
    { id: 16, name: "Parque Genovés", lat: 36.5360, lng: -6.3040, description: "Romantic botanical garden with sculpted trees, lagoon, and cliffside views of the Atlantic." },
    { id: 17, name: "Baluarte de la Candelaria (17th-Century Bastion)", lat: 36.5377, lng: -6.2992, description: "Massive fortress guarding Cádiz from the sea; great lookout towards the bay." },
    { id: 18, name: "Castillo de Santa Catalina", lat: 36.5372, lng: -6.3040, description: "Star-shaped fortress overlooking La Caleta; atmospheric walk over the causeway." },
    { id: 19, name: "La Caleta Beach", lat: 36.5330, lng: -6.3045, description: "Small, sheltered beach with fishing boats and the historic Balneario. Magical at sunset." }
];

// Global map variable and state
let map;
let locationMarker = null;
let accuracyCircle = null;
let locateWatchId = null;
// Index of the NEXT stop the user should be heading towards (0-indexed)
let currentStopIndex = 1;

// State for managing marker icon changes
let allMarkers = [];
let highlightedMarker = null;

// Custom Icon Options
const defaultIconOptions = {
    className: 'tour-marker',
    iconSize: [25, 25],
    iconAnchor: [12.5, 25]
};

// Custom style for the NEXT stop
const nextStopIconOptions = {
    className: 'tour-marker next-stop-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
};

// --- Manual Path Tracing Coordinates ---
const detailedCoords = [
    [36.5303, -6.2927],
    [36.5300, -6.2930],
    [36.5298, -6.2935],
    [36.5293, -6.2943],
    [36.5295, -6.2948],
    [36.5297, -6.2955],
    [36.5303, -6.2945],
    [36.5310, -6.2935],
    [36.5317, -6.2925],
    [36.5305, -6.2937],
    [36.5294, -6.2952],
    [36.5298, -6.2942],
    [36.5305, -6.2938],
    [36.5314, -6.2934],
    [36.5316, -6.2945],
    [36.5319, -6.2958],
    [36.5320, -6.2969],
    [36.5323, -6.2979],
    [36.5321, -6.2982],
    [36.5318, -6.2983],
    [36.5325, -6.2989],
    [36.5331, -6.2984],
    [36.5337, -6.2979],
    [36.5342, -6.2973],
    [36.5352, -6.2969],
    [36.5352, -6.2965],
    [36.5355, -6.2958],
    [36.5361, -6.2954],
    [36.5367, -6.2950],
    [36.5363, -6.2960],
    [36.5355, -6.2975],
    [36.5354, -6.2990],
    [36.5356, -6.3008],
    [36.5340, -6.3000],
    [36.5336, -6.2953],
    [36.5358, -6.3008],
    [36.5360, -6.3015],
    [36.5365, -6.3020],
    [36.5370, -6.2983],
    [36.5377, -6.2992],
    [36.5360, -6.3040],
    [36.5372, -6.3040],
    [36.5330, -6.3045]
];

function showMessageModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('message-modal').classList.remove('hidden');
    document.getElementById('message-modal').classList.add('flex');
}

function highlightMapMarker(idToHighlight) {
    if (highlightedMarker) {
        const prevStop = highlightedMarker.id;
        const markerToRevert = allMarkers.find(m => m.id === prevStop)?.marker;
        if (markerToRevert) {
            const defaultIcon = L.divIcon({
                ...defaultIconOptions,
                html: `<div>${prevStop}</div>`,
            });
            markerToRevert.setIcon(defaultIcon);
        }
        highlightedMarker = null;
    }

    if (idToHighlight) {
        const newMarkerData = allMarkers.find(m => m.id === idToHighlight);
        if (newMarkerData) {
            const newIcon = L.divIcon({
                ...nextStopIconOptions,
                html: `<div>${idToHighlight}</div>`,
            });
            newMarkerData.marker.setIcon(newIcon);
            highlightedMarker = newMarkerData;
        }
    }
}

function updateGuidanceInSidebar(userLat, userLng) {
    document.querySelectorAll('.guidance-info').forEach(el => el.remove());
    if (locateWatchId === null) return;

    if (currentStopIndex >= stops.length) {
        const lastStop = stops[stops.length - 1];
        const lastItem = document.getElementById(`stop-${lastStop.id}`);
        if (lastItem) {
            const completeMsg = document.createElement('div');
            completeMsg.className = 'guidance-info pt-1 mt-2 border-t border-green-400';
            completeMsg.innerHTML = '<p class="text-sm font-bold text-green-700">✨ Tour Complete! Enjoy your stay.</p>';
            lastItem.appendChild(completeMsg);

            highlightSidebarStop(-1);
            highlightMapMarker(null);
        }
        return;
    }

    const nextStop = stops[currentStopIndex];
    const userLatLng = L.latLng(userLat, userLng);
    const stopLatLng = L.latLng(nextStop.lat, nextStop.lng);

    const distance = userLatLng.distanceTo(stopLatLng);

    let distanceText;
    if (distance < 5) distanceText = `Very close! (${Math.round(distance)} m)`;
    else if (distance < 1000) distanceText = `${Math.round(distance)} meters`;
    else distanceText = `${(distance / 1000).toFixed(2)} km`;

    if (distance < 50) {
        showMessageModal("Stop Reached!", `You are within 50 meters of Stop ${nextStop.id}: ${nextStop.name}. Moving to the next stop.`);
        currentStopIndex++;
        updateGuidanceInSidebar(userLat, userLng);
        return;
    }

    const itemToUpdate = document.getElementById(`stop-${nextStop.id}`);
    if (itemToUpdate) {
        const guidanceDiv = document.createElement('div');
        guidanceDiv.className = 'guidance-info pt-1 mt-2 border-t border-red-300';
        guidanceDiv.innerHTML = `
            <div aria-live="polite"> 
                <p class="text-xs font-medium text-gray-500 uppercase">Current Target:</p>
                <p class="text-sm font-bold text-red-700">Distance: ${distanceText}</p>
            </div>
        `;
        itemToUpdate.appendChild(guidanceDiv);
    }

    highlightSidebarStop(nextStop.id);
    highlightMapMarker(nextStop.id);
}

function highlightSidebarStop(id) {
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('bg-red-100', 'border-red-600');
    });
    const itemToHighlight = document.getElementById(`stop-${id}`);
    if (itemToHighlight) {
        itemToHighlight.classList.add('bg-red-100', 'border-red-600');
        itemToHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function initMap() {
    const startCoords = [stops[0].lat, stops[0].lng];

    map = L.map('map', {
        center: startCoords,
        zoom: 16,
        zoomControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    document.getElementById('locate-button')
        .addEventListener('click', toggleLocationTracking);

    document.getElementById('modal-close-button')
        .addEventListener('click', () => {
            document.getElementById('message-modal').classList.add('hidden');
        });
}

function onLocationFound(e) {
    const radius = e.coords.accuracy;
    const latlng = [e.coords.latitude, e.coords.longitude];

    if (locationMarker) {
        locationMarker.setLatLng(latlng);
    } else {
        locationMarker = L.circleMarker(latlng, {
            radius: 8,
            color: '#1D4ED8',
            fillColor: '#3B82F6',
            fillOpacity: 1,
            stroke: true
        }).addTo(map)
            .bindPopup(`You are here (Accuracy: ${Math.round(radius)} m)`).openPopup();
    }

    if (accuracyCircle) {
        accuracyCircle.setLatLng(latlng);
        accuracyCircle.setRadius(radius);
    } else {
        accuracyCircle = L.circle(latlng, radius, {
            color: '#3B82F6',
            fillColor: '#60A5FA',
            fillOpacity: 0.2,
            weight: 2,
            opacity: 0.5
        }).addTo(map);
    }

    if (map.isUserLocating) {
        map.flyTo(latlng, Math.min(17, map.getZoom()), { duration: 1.5 });
        map.isUserLocating = false;
    }

    updateGuidanceInSidebar(e.coords.latitude, e.coords.longitude);
}

function onLocationError(e) {
    let errorMessage = "Could not retrieve location.";
    if (e.code === 1) errorMessage = "Location access denied. Please allow location services for this page.";
    else if (e.code === 3) errorMessage = "Location timeout. Please ensure you have a clear GPS signal.";

    showMessageModal("Location Error", errorMessage);
    stopLocationTracking();
}

function startLocationTracking() {
    if (!("geolocation" in navigator)) {
        showMessageModal("Location Not Supported", "Geolocation is not supported by your browser.");
        return;
    }

    map.isUserLocating = true;
    currentStopIndex = 1;

    locateWatchId = navigator.geolocation.watchPosition(onLocationFound, onLocationError, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });

    document.getElementById('locate-button').classList.add('text-red-600', 'font-bold');
    showMessageModal("Location Started", "Tracking your position! The next stop is now highlighted on the map and in the sidebar.");
}

function stopLocationTracking() {
    if (locateWatchId !== null) {
        navigator.geolocation.clearWatch(locateWatchId);
        locateWatchId = null;
    }
    if (locationMarker) {
        map.removeLayer(locationMarker);
        locationMarker = null;
    }
    if (accuracyCircle) {
        map.removeLayer(accuracyCircle);
        accuracyCircle = null;
    }

    highlightMapMarker(null);
    document.querySelectorAll('.guidance-info').forEach(el => el.remove());
    document.getElementById('locate-button').classList.remove('text-red-600', 'font-bold');

    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('bg-red-100', 'border-red-600');
    });

    showMessageModal("Location Stopped", "Location tracking has been turned off.");
}

function toggleLocationTracking() {
    if (locateWatchId === null) startLocationTracking();
    else stopLocationTracking();
}

function addStopsToMapAndSidebar() {
    const stopsList = document.getElementById('stops-list');

    stops.forEach(stop => {
        const coords = [stop.lat, stop.lng];

        const defaultIcon = L.divIcon({
            ...defaultIconOptions,
            html: `<div>${stop.id}</div>`,
        });

        const marker = L.marker(coords, {
            icon: defaultIcon
        }).addTo(map);

        allMarkers.push({ id: stop.id, marker: marker });

        const popupContent = `
            <div class="font-bold text-red-600 text-lg mb-1">STOP ${stop.id}: ${stop.name}</div>
            <p class="text-gray-700 text-sm">${stop.description}</p>
        `;
        marker.bindPopup(popupContent, { offset: L.point(0, -10) });

        const listItem = document.createElement('div');
        listItem.id = `stop-${stop.id}`;
        listItem.setAttribute('role', 'button');
        listItem.setAttribute('tabindex', '0');
        listItem.className = 'sidebar-item p-3 border border-gray-200 rounded-lg cursor-pointer transition-all hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50';

        listItem.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white font-bold text-sm shadow-md flex-shrink-0">${stop.id}</div>
                <div class="flex-grow">
                    <h3 class="text-base font-semibold text-gray-800">${stop.name}</h3>
                    <p class="text-xs text-gray-500 truncate">${stop.description}</p>
                </div>
            </div>
        `;

        listItem.addEventListener('click', () => handleStopClick(stop.id, marker));
        listItem.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleStopClick(stop.id, marker);
            }
        });

        stopsList.appendChild(listItem);
    });

    L.polyline(detailedCoords, {
        className: 'tour-path'
    }).addTo(map);

    const mainStopCoords = stops.map(stop => [stop.lat, stop.lng]);
    const bounds = L.latLngBounds(mainStopCoords);
    map.fitBounds(bounds, { padding: [50, 50] });

    function handleStopClick(id, marker) {
        map.flyTo(marker.getLatLng(), 17, { duration: 1.0 });
        marker.openPopup();

        if (id < stops.length) {
            currentStopIndex = id;
            if (locateWatchId !== null) {
                showMessageModal("Navigation Updated", `Now navigating toward STOP ${currentStopIndex + 1}.`);
                updateGuidanceInSidebar(
                    locationMarker ? locationMarker.getLatLng().lat : map.getCenter().lat,
                    locationMarker ? locationMarker.getLatLng().lng : map.getCenter().lng
                );
            }
        }

        highlightSidebarStop(id);
    }
}

function checkLeafletReady() {
    if (typeof L !== 'undefined' && L.map) {
        try {
            initMap();
            addStopsToMapAndSidebar();
        } catch (error) {
            console.error("Map initialization failed:", error);
        }
    } else setTimeout(checkLeafletReady, 10);
}

checkLeafletReady();
