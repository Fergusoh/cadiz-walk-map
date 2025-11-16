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

  // 15 → 17 → 16
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
//  GLOBAL STATE & DOM
// ---------------------------
let map;
let allMarkers = [];
let locationMarker = null;
let accuracyCircle = null;
let locateWatchId = null;

let completedStopIds = new Set();
let currentTargetStopId = null;
let lastUserLatLng = null;
let navigationLocked = false;

const stopsListEl = document.getElementById("stops-list");
const locateButton = document.getElementById("locate-button");
const modalEl = document.getElementById("message-modal");
const modalTitleEl = document.getElementById("modal-title");
const modalTextEl = document.getElementById("modal-text");
const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const tourStatus = document.getElementById("tour-status");
const navBanner = document.getElementById("nav-banner");
const navResumeBtn = document.getElementById("nav-resume");

// ---------------------------
//  UTILITIES
// ---------------------------
function showMessageModal(title, text) {
  modalTitleEl.textContent = title;
  modalTextEl.textContent = text;
  modalEl.classList.remove("hidden");
  modalEl.classList.add("flex");
}

document.getElementById("modal-close-button").addEventListener("click", () => {
  modalEl.classList.add("hidden");
});

modalEl.addEventListener("click", (e) => {
  if (e.target.id === "message-modal") {
    modalEl.classList.add("hidden");
  }
});

function distanceMeters(lat1, lng1, lat2, lng2) {
  return L.latLng(lat1, lng1).distanceTo([lat2, lng2]);
}

// Bearing from A to B (degrees from North)
function bearingDegrees(lat1, lng1, lat2, lng2) {
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δλ = ((lng2 - lng1) * Math.PI) / 180;

  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x =
    Math.cos(φ1) * Math.sin(φ2) -
    Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);

  let θ = Math.atan2(y, x);
  θ = (θ * 180) / Math.PI;
  return (θ + 360) % 360;
}

// Convert bearing to text (N/NE/E/etc.)
function bearingToText(bearing) {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const idx = Math.round(bearing / 45) % 8;
  return dirs[idx];
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
  } else {
    tourStatus.classList.add("hidden");
  }
}

function setNavigationLocked(lock) {
  navigationLocked = lock;
  if (navBanner) {
    navBanner.classList.toggle("hidden", !lock);
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

  // Zoom controls in top-right
  L.control.zoom({ position: "topright" }).addTo(map);

  // Route line
  L.polyline(detailedCoords, {
    color: "#EF4444",
    weight: 5,
    opacity: 0.85
  }).addTo(map);

  addStopsToMapAndSidebar();

  map.fitBounds(L.latLngBounds(detailedCoords), {
    padding: [50, 50]
  });

  // Tap map to close popups
  map.on("click", () => {
    map.closePopup();
  });

  locateButton.addEventListener("click", toggleLocationTracking);

  if (navResumeBtn) {
    navResumeBtn.addEventListener("click", () => {
      setNavigationLocked(false);
      if (lastUserLatLng) {
        updateNavigation(lastUserLatLng[0], lastUserLatLng[1]);
      }
    });
  }
}

// ---------------------------
//  MARKERS + SIDEBAR
// ---------------------------
function addStopsToMapAndSidebar() {
  stops.forEach((stop) => {
    const icon = L.divIcon({
      className: getMarkerClassName(stop.category),
      iconSize: [28, 28],
      iconAnchor: [14, 28],
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
    item.className =
      "sidebar-item p-3 border border-gray-200 rounded-lg cursor-pointer transition-all hover:border-red-400";
    item.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="marker-dot marker-${stop.category}">
          ${stop.id}
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-sm">${stop.name}</h3>
          <p class="text-xs text-gray-500">${stop.description}</p>
        </div>
      </div>
      <div class="sidebar-details hidden text-xs text-gray-600 mt-2"></div>
    `;

    item.addEventListener("click", () => {
      // Lock navigation on manual selection
      setNavigationLocked(true);
      currentTargetStopId = stop.id;

      map.flyTo([stop.lat, stop.lng], 17);
      marker.openPopup();

      expandSidebarItem(stop.id);
      highlightSidebarStop(stop.id);
      highlightMapMarker(stop.id);

      if (lastUserLatLng) {
        updateHeadingIndicator(stop, lastUserLatLng[0], lastUserLatLng[1]);
      }
    });

    stopsListEl.appendChild(item);
  });
}

function highlightSidebarStop(id) {
  document.querySelectorAll(".sidebar-item").forEach((el) => {
    el.classList.remove("bg-red-50", "border-red-500", "shadow-md");
  });
  if (!id) return;
  const el = document.getElementById(`stop-${id}`);
  if (!el) return;
  el.classList.add("bg-red-50", "border-red-500", "shadow-md");
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function expandSidebarItem(id) {
  document.querySelectorAll(".sidebar-details").forEach((e) =>
    e.classList.add("hidden")
  );
  const el = document.querySelector(`#stop-${id} .sidebar-details`);
  if (el) el.classList.remove("hidden");
}

function highlightMapMarker(id) {
  allMarkers.forEach(({ stop, marker }) => {
    const isTarget = stop.id === id;
    const icon = L.divIcon({
      className: getMarkerClassName(
        stop.category,
        isTarget ? "next-stop-marker" : ""
      ),
      iconSize: isTarget ? [30, 30] : [28, 28],
      iconAnchor: isTarget ? [15, 30] : [14, 28],
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

function onLocationError() {
  showMessageModal(
    "Location Error",
    "Unable to access GPS. Please allow location permissions."
  );
  stopLocationTracking();
}

function startLocationTracking() {
  if (!navigator.geolocation) {
    showMessageModal("Not Supported", "Geolocation is not supported.");
    return;
  }

  // Resume auto navigation when location tracking starts
  setNavigationLocked(false);

  locateWatchId = navigator.geolocation.watchPosition(
    onLocationFound,
    onLocationError,
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
  locateButton.classList.add("text-red-600", "font-bold");
  showMessageModal(
    "Location On",
    "You are now being located. The nearest stop will be highlighted."
  );
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

  lastUserLatLng = null;
  highlightMapMarker(null);
  highlightSidebarStop(null);

  locateButton.classList.remove("text-red-600", "font-bold");
  showMessageModal("Location Off", "Location tracking has been turned off.");
}

function toggleLocationTracking() {
  if (locateWatchId === null) startLocationTracking();
  else stopLocationTracking();
}

function findNearestStop(lat, lng) {
  let nearest = null;
  let bestDist = Infinity;

  stops.forEach((stop) => {
    if (completedStopIds.has(stop.id)) return;
    const d = distanceMeters(lat, lng, stop.lat, stop.lng);
    if (d < bestDist) {
      bestDist = d;
      nearest = stop;
    }
  });

  return { nearest, distance: bestDist };
}

function updateNavigation(lat, lng) {
  // Mark stops complete when close
  stops.forEach((stop) => {
    if (!completedStopIds.has(stop.id)) {
      const d = distanceMeters(lat, lng, stop.lat, stop.lng);
      if (d < 30) {
        completedStopIds.add(stop.id);
        updateProgressUI();
      }
    }
  });

  if (completedStopIds.size === stops.length) {
    showMessageModal(
      "Tour Complete 🎉",
      "You’ve reached all 19 stops. Enjoy Cádiz!"
    );
    currentTargetStopId = null;
    highlightMapMarker(null);
    highlightSidebarStop(null);
    return;
  }

  // Determine target stop
  let targetStop = null;
  let distance = null;

  if (navigationLocked && currentTargetStopId) {
    targetStop = stops.find((s) => s.id === currentTargetStopId);
    if (!targetStop) return;
    distance = distanceMeters(lat, lng, targetStop.lat, targetStop.lng);
  } else {
    const res = findNearestStop(lat, lng);
    if (!res.nearest) return;
    targetStop = res.nearest;
    distance = res.distance;
    currentTargetStopId = targetStop.id;
  }

  highlightMapMarker(targetStop.id);
  highlightSidebarStop(targetStop.id);
  expandSidebarItem(targetStop.id);

  // Sidebar guidance update
  document.querySelectorAll(".guidance-info").forEach((e) => e.remove());
  const card = document.getElementById(`stop-${targetStop.id}`);
  if (card) {
    const guide = document.createElement("div");
    guide.className =
      "guidance-info mt-2 pt-2 border-t border-red-200 text-xs";
    const distText =
      distance < 1000
        ? `${Math.round(distance)} m`
        : `${(distance / 1000).toFixed(2)} km`;
    guide.innerHTML = `
      <p class="text-gray-500 uppercase text-[10px]">Next Stop</p>
      <p class="font-semibold text-red-700">Distance: ${distText}</p>
    `;
    card.appendChild(guide);

    // Heading indicator
    updateHeadingIndicator(targetStop, lat, lng, card);
  }
}

// ---------------------------
//  SIDEBAR HEADING INDICATOR
// ---------------------------
function updateHeadingIndicator(stop, userLat, userLng, cardEl = null) {
  if (!stop || userLat == null || userLng == null) return;
  const bearing = bearingDegrees(userLat, userLng, stop.lat, stop.lng);
  const directionText = bearingToText(bearing);

  const card =
    cardEl || document.getElementById(`stop-${stop.id}`);
  if (!card) return;

  // Remove old heading-indicator
  card.querySelectorAll(".heading-indicator").forEach((e) => e.remove());

  const wrap = document.createElement("div");
  wrap.className = "heading-indicator";
  wrap.innerHTML = `
    <div class="heading-circle">
      <div class="heading-arrow" style="transform: rotate(${bearing}deg);"></div>
    </div>
    <p class="text-[11px] text-gray-600">Head ${directionText}</p>
  `;
  card.appendChild(wrap);
}

// ---------------------------
//  BOOT
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
