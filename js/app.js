// ---------------------------
//  STOP DATA (Corrected)
// ---------------------------
const stops = [
  { id: 1, name: "Plaza de San Juan de Dios", lat: 36.5303, lng: -6.2927, category: "history",
    description: "City hall, fountains, palms — Cádiz’s traditional civic heart and perfect starting point." },

  { id: 2, name: "Arco de la Rosa (Medieval Gate)", lat: 36.5310, lng: -6.2942, category: "history",
    description: "One of the original medieval gateways into Cádiz; connects Cathedral square to the old walls." },

  { id: 3, name: "Casa del Obispo (Archaeological Site)", lat: 36.5299, lng: -6.2951, category: "history",
    description: "Layers of Roman, Visigothic, and Islamic Cádiz revealed underground beside the Cathedral." },

  { id: 4, name: "Teatro Romano", lat: 36.5317, lng: -6.2925, category: "history",
    description: "1st-century BC Roman theatre hidden behind the cathedral. Free entry and surprisingly huge." },

  { id: 5, name: "Cádiz Cathedral", lat: 36.5294, lng: -6.2952, category: "religious",
    description: "The “Cathedral of the Americas,” built with New World silver. Tower offers the best views in Cádiz." },

  { id: 6, name: "Barrio del Pópulo", lat: 36.5314, lng: -6.2934, category: "history",
    description: "Oldest neighbourhood in Western Europe. Arches, tight alleyways, medieval atmosphere." },

  { id: 7, name: "Plaza de las Flores", lat: 36.5323, lng: -6.2979, category: "culture",
    description: "Cádiz’s liveliest square — flower stalls, cafés, and people-watching." },

  { id: 8, name: "Mercado Central", lat: 36.5318, lng: -6.2983, category: "food",
    description: "Seafood hall, tapas stalls, fresh produce, vibrant energy." },

  { id: 9, name: "Plaza Mina", lat: 36.5330, lng: -6.2997, category: "culture",
    description: "Elegant shaded square filled with ficus trees; one of Cádiz’s most atmospheric plazas." },

  { id: 10, name: "Museo de Cádiz", lat: 36.5331, lng: -6.2990, category: "culture",
    description: "Phoenician sarcophagi, Roman statues, archaeology of ancient Gades, and a fine arts gallery." },

  { id: 11, name: "Torre Tavira", lat: 36.5324, lng: -6.3005, category: "history",
    description: "18th-century watchtower with Cádiz’s best panoramic view and a working camera obscura." },

  { id: 12, name: "Plaza del Mentidero", lat: 36.5339, lng: -6.3010, category: "culture",
    description: "Charming plaza known historically as a meeting place for gossip and debate ('mentidero')." },

  { id: 13, name: "Oratorio de la Santa Cueva", lat: 36.5336, lng: -6.2953, category: "religious",
    description: "Quiet chapel with dramatic religious art and paintings attributed to Goya." },

  { id: 14, name: "Gran Teatro Falla", lat: 36.5336, lng: -6.3025, category: "culture",
    description: "Red-brick Neo-Mudejar theatre — the heart of the Cádiz Carnival and its famous chirigotas." },

  { id: 15, name: "Alameda Apodaca", lat: 36.5356, lng: -6.3070, category: "nature",
    description: "Beautiful waterfront walk with tile benches, gardens, lanterns, and huge ficus trees." },

  { id: 16, name: "Parque Genovés", lat: 36.5360, lng: -6.3040, category: "nature",
    description: "Romantic botanical garden with sculpted trees, lagoon, and cliffside views of the Atlantic." },

  { id: 17, name: "Baluarte de la Candelaria", lat: 36.5350, lng: -6.3073, category: "history",
    description: "Massive fortress guarding Cádiz from the sea; great lookout towards the bay." },

  { id: 18, name: "Castillo de Santa Catalina", lat: 36.5327, lng: -6.3080, category: "history",
    description: "Star-shaped fortress overlooking La Caleta; atmospheric walk over the causeway." },

  { id: 19, name: "La Caleta Beach", lat: 36.5330, lng: -6.3045, category: "nature",
    description: "Small, sheltered beach with fishing boats and the historic Balneario. Magical at sunset." }
];


// ---------------------------
//  DETAILED ROUTE PATH (Corrected)
// ---------------------------
const detailedCoords = [
  // 1 → 2
  [36.5303, -6.2927],
  [36.5308, -6.2933],
  [36.5310, -6.2942],

  // 2 → 3
  [36.5305, -6.2947],
  [36.5299, -6.2951],

  // 3 → 4
  [36.5303, -6.2945],
  [36.5310, -6.2935],
  [36.5317, -6.2925],

  // 4 → 5
  [36.5308, -6.2938],
  [36.5299, -6.2949],
  [36.5294, -6.2952],

  // 5 → 6
  [36.5300, -6.2944],
  [36.5308, -6.2939],
  [36.5314, -6.2934],

  // 6 → 7
  [36.5316, -6.2945],
  [36.5319, -6.2958],
  [36.5320, -6.2969],
  [36.5323, -6.2979],

  // 7 → 8
  [36.5321, -6.2982],
  [36.5318, -6.2983],

  // 8 → 9
  [36.5322, -6.2986],
  [36.5326, -6.2992],
  [36.5330, -6.2997],

  // 9 → 10
  [36.5331, -6.2990],

  // 10 → 11
  [36.5328, -6.2995],
  [36.5324, -6.3005],

  // 11 → 12
  [36.5330, -6.3004],
  [36.5339, -6.3010],

  // 12 → 13
  [36.5333, -6.2988],
  [36.5336, -6.2953],

  // 13 → 14
  [36.5336, -6.2980],
  [36.5336, -6.3025],

  // 14 → 15
  [36.5342, -6.3030],
  [36.5350, -6.3041],
  [36.5356, -6.3070],

  // 15 → 17 → 16 (corrected natural order)
  [36.5350, -6.3073], // Candelaria
  [36.5356, -6.3055],
  [36.5360, -6.3040], // Genovés

  // 16 → 18
  [36.5370, -6.3040],
  [36.5354, -6.3055],
  [36.5327, -6.3080],

  // 18 → 19
  [36.5330, -6.3045]
];

// ---------------------------
//  GLOBAL STATE
// ---------------------------
let map;
let allMarkers = [];
let locationMarker = null;
let accuracyCircle = null;
let locateWatchId = null;

let completedStopIds = new Set();
let currentTargetStopId = null;
let deviceHeading = null;
let lastUserLatLng = null;

// DOM
const stopsListEl = document.getElementById("stops-list");
const locateButton = document.getElementById("locate-button");
const modalEl = document.getElementById("message-modal");
const modalTitleEl = document.getElementById("modal-title");
const modalTextEl = document.getElementById("modal-text");
const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const tourStatus = document.getElementById("tour-status");
const compassArrow = document.getElementById("compass-arrow");

// ---------------------------
//  HELPER FUNCTIONS
// ---------------------------
function showMessageModal(title, text) {
  modalTitleEl.textContent = title;
  modalTextEl.textContent = text;
  modalEl.classList.remove("hidden");
  modalEl.classList.add("flex");
}

modalEl.addEventListener("click", (e) => {
  if (e.target.id === "message-modal") {
    modalEl.classList.add("hidden");
  }
});

function distanceMeters(lat1, lng1, lat2, lng2) {
  return L.latLng(lat1, lng1).distanceTo([lat2, lng2]);
}

function bearingDegrees(lat1, lng1, lat2, lng2) {
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δλ = (lng2 - lng1) * Math.PI / 180;

  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) -
            Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);

  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function getMarkerClassName(category, extra = "") {
  return ["tour-marker", `marker-${category}`, extra].filter(Boolean).join(" ");
}

function updateProgressUI() {
  const total = stops.length;
  const completed = completedStopIds.size;
  const pct = Math.round((completed / total) * 100);

  progressLabel.textContent = `Stop ${completed} of ${total}`;
  progressPercent.textContent = `${pct}%`;
  progressBar.style.width = `${pct}%`;

  if (completed === total) {
    tourStatus.classList.remove("hidden");
  }
}

// ---------------------------
//  MAP INITIALISATION
// ---------------------------
function initMap() {
  map = L.map("map", {
    center: [stops[0].lat, stops[0].lng],
    zoom: 16
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Draw walking path
  L.polyline(detailedCoords, {
    color: "#EF4444",
    weight: 5,
    opacity: 0.85
  }).addTo(map);

  addStopsToMapAndSidebar();

  map.fitBounds(L.latLngBounds(detailedCoords), {
    padding: [50, 50]
  });

  locateButton.addEventListener("click", toggleLocationTracking);

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (event) => {
      if (event.alpha !== null) {
        deviceHeading = event.alpha;
        updateCompass();
      }
    });
  }
}

// ---------------------------
//  ADD MARKERS + SIDEBAR
// ---------------------------
function addStopsToMapAndSidebar() {
  stops.forEach((stop) => {
    const icon = L.divIcon({
      className: getMarkerClassName(stop.category),
      iconSize: [25, 25],
      iconAnchor: [12.5, 25],
      html: `<div>${stop.id}</div>`
    });

    const marker = L.marker([stop.lat, stop.lng], { icon }).addTo(map);

    allMarkers.push({ stop, marker });

    marker.bindPopup(`
      <div class="font-bold text-red-600">STOP ${stop.id}: ${stop.name}</div>
      <p class="text-gray-700 text-sm">${stop.description}</p>
    `);

    const item = document.createElement("div");
    item.id = `stop-${stop.id}`;
    item.className = "sidebar-item p-3 border border-gray-200 rounded-lg cursor-pointer transition-all hover:border-red-400";
    item.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="w-7 h-7 flex items-center justify-center rounded-full text-white font-bold marker-dot marker-${stop.category}">${stop.id}</div>
        <div>
          <h3 class="font-semibold text-sm">${stop.name}</h3>
          <p class="text-xs text-gray-500">${stop.description}</p>
        </div>
      </div>
      <div class="sidebar-details hidden text-xs text-gray-600 mt-2"></div>
    `;

    item.addEventListener("click", () => {
      map.flyTo([stop.lat, stop.lng], 17);
      marker.openPopup();

      expandSidebarItem(stop.id);
      highlightSidebarStop(stop.id);
      highlightMapMarker(stop.id);

      currentTargetStopId = stop.id;
      updateCompass();
    });

    stopsListEl.appendChild(item);
  });
}

// Highlight single sidebar item
function highlightSidebarStop(id) {
  document.querySelectorAll(".sidebar-item").forEach(el =>
    el.classList.remove("bg-red-50", "border-red-500", "shadow-md")
  );
  const el = document.getElementById(`stop-${id}`);
  if (!el) return;
  el.classList.add("bg-red-50", "border-red-500", "shadow-md");
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function expandSidebarItem(id) {
  document.querySelectorAll(".sidebar-details").forEach(e => e.classList.add("hidden"));
  const el = document.querySelector(`#stop-${id} .sidebar-details`);
  if (el) el.classList.remove("hidden");
}

function highlightMapMarker(id) {
  allMarkers.forEach(({ stop, marker }) => {
    const isTarget = stop.id === id;
    const icon = L.divIcon({
      className: getMarkerClassName(stop.category, isTarget ? "next-stop-marker" : ""),
      iconSize: isTarget ? [30, 30] : [25, 25],
      iconAnchor: isTarget ? [15, 30] : [12.5, 25],
      html: `<div>${stop.id}</div>`
    });
    marker.setIcon(icon);
  });
}

// ---------------------------
//  LOCATION + NAVIGATION
// ---------------------------
function onLocationFound(e) {
  const { latitude, longitude, accuracy } = e.coords;
  lastUserLatLng = [latitude, longitude];

  if (!locationMarker) {
    locationMarker = L.circleMarker(lastUserLatLng, {
      radius: 7,
      color: "#1D4ED8",
      fillColor: "#3B82F6",
      fillOpacity: 1
    }).addTo(map);

    accuracyCircle = L.circle(lastUserLatLng, accuracy, {
      color: "#3B82F6",
      fillColor: "#60A5FA",
      fillOpacity: 0.15
    }).addTo(map);
  } else {
    locationMarker.setLatLng(lastUserLatLng);
    accuracyCircle.setLatLng(lastUserLatLng);
    accuracyCircle.setRadius(accuracy);
  }

  updateNavigation(latitude, longitude);
}

// Error handler
function onLocationError(e) {
  showMessageModal("Location Error", "Unable to access GPS. Please allow location permissions.");
  stopLocationTracking();
}

// Start GPS
function startLocationTracking() {
  locateWatchId = navigator.geolocation.watchPosition(onLocationFound, onLocationError, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });
  locateButton.classList.add("text-red-600");
  showMessageModal("Location On", "You are now being located. The nearest stop will be highlighted.");
}

// Stop GPS
function stopLocationTracking() {
  if (locateWatchId !== null) {
    navigator.geolocation.clearWatch(locateWatchId);
    locateWatchId = null;
  }

  locationMarker && map.removeLayer(locationMarker);
  accuracyCircle && map.removeLayer(accuracyCircle);

  locationMarker = null;
  accuracyCircle = null;

  highlightMapMarker(null);
  highlightSidebarStop(null);

  locateButton.classList.remove("text-red-600");
}

// Toggle GPS
function toggleLocationTracking() {
  if (locateWatchId === null) startLocationTracking();
  else stopLocationTracking();
}

// Determine nearest remaining stop
function findNearestStop(lat, lng) {
  let nearest = null;
  let best = Infinity;

  stops.forEach(stop => {
    if (completedStopIds.has(stop.id)) return;
    const d = distanceMeters(lat, lng, stop.lat, stop.lng);
    if (d < best) {
      best = d;
      nearest = stop;
    }
  });

  return { nearest, distance: best };
}

// Main navigation logic
function updateNavigation(lat, lng) {
  // Mark stops as completed when close
  stops.forEach(stop => {
    if (!completedStopIds.has(stop.id)) {
      const d = distanceMeters(lat, lng, stop.lat, stop.lng);
      if (d < 30) {
        completedStopIds.add(stop.id);
        updateProgressUI();
      }
    }
  });

  if (completedStopIds.size === stops.length) {
    showMessageModal("Tour Complete 🎉", "You’ve reached all 19 stops. Enjoy Cádiz!");
    currentTargetStopId = null;
    highlightMapMarker(null);
    return;
  }

  const { nearest, distance } = findNearestStop(lat, lng);
  if (!nearest) return;

  currentTargetStopId = nearest.id;

  highlightMapMarker(nearest.id);
  highlightSidebarStop(nearest.id);
  expandSidebarItem(nearest.id);
  updateCompass();

  // Update sidebar guidance
  document.querySelectorAll(".guidance-info").forEach(e => e.remove());
  const card = document.getElementById(`stop-${nearest.id}`);
  const guide = document.createElement("div");
  guide.className = "guidance-info mt-2 pt-2 border-t border-red-200 text-xs";
  guide.innerHTML = `
    <p class="text-gray-500 uppercase text-[10px]">Next Stop</p>
    <p class="font-semibold text-red-700">Distance: ${Math.round(distance)} m</p>
  `;
  card.appendChild(guide);
}

// ---------------------------
//  COMPASS
// ---------------------------
function updateCompass() {
  if (!currentTargetStopId || !lastUserLatLng) {
    compassArrow.style.opacity = "0.3";
    compassArrow.style.transform = "rotate(0deg)";
    return;
  }

  const stop = stops.find(s => s.id === currentTargetStopId);
  const [lat, lng] = lastUserLatLng;

  const bearing = bearingDegrees(lat, lng, stop.lat, stop.lng);
  let rotation = bearing;

  if (deviceHeading !== null) {
    rotation = bearing - deviceHeading;
  }

  compassArrow.style.opacity = "1";
  compassArrow.style.transform = `rotate(${rotation}deg)`;
}

// ---------------------------
//  START APP
// ---------------------------
function boot() {
  if (typeof L !== "undefined" && L.map) {
    initMap();
    updateProgressUI();
  } else {
    setTimeout(boot, 20);
  }
}

boot();

