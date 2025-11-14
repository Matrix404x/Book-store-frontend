import React, { useEffect, useRef, useState } from 'react';

function GoogleMap() {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  // Read API key from Vite env. Create a .env with VITE_GOOGLE_MAPS_API_KEY=your_key
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  // Initialize the map once script is loaded and we have a location
  const initMap = (lat = null, lng = null) => {
    try {
      if (!window.google || !mapRef.current) return;

      const location = (lat && lng)
        ? { lat, lng }
        : currentLocation || { lat: 10.0261, lng: 76.3125 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }
        ],
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true
      });

      // Add a marker for current location
      new window.google.maps.Marker({
        position: location,
        map,
        title: 'Current Location',
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#4285F4',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        }
      });

      setIsLoading(false);
    } catch (error) {
      setMapError('Error initializing map: ' + error.message);
      setIsLoading(false);
    }
  };

  // Get current location from browser
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setMapError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = { lat: position.coords.latitude, lng: position.coords.longitude };
        setCurrentLocation(loc);
        setIsLoading(false);
      },
      (error) => {
        // If user denies permission, fall back to default location but still load map
        setMapError('Could not get current location: ' + error.message + '. Showing default location.');
        setIsLoading(false);
        // we do not return; allow map to initialize with default
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // Load the Google Maps script
  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      setMapError('Please add your Google Maps API key to an .env file as VITE_GOOGLE_MAPS_API_KEY');
      setIsLoading(false);
      return;
    }

    // If already loaded, set flag
    if (window.google && window.google.maps) {
      setIsScriptLoaded(true);
      return;
    }

    // Avoid adding the script multiple times
    const scriptId = 'google-maps-script';
    if (document.getElementById(scriptId)) {
      // script tag exists but maybe not loaded yet
      const existing = document.getElementById(scriptId);
      existing.addEventListener('load', () => setIsScriptLoaded(true));
      existing.addEventListener('error', () => setMapError('Failed to load Google Maps script'));
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => setMapError('Failed to load Google Maps. Please check your API key and internet connection.');
    document.head.appendChild(script);

    return () => {
      // optional: don't remove the script tag on unmount because other pages may reuse it
    };
  }, []);

  // When script is ready, try to get current location
  useEffect(() => {
    if (isScriptLoaded) {
      getCurrentLocation();
    }
  }, [isScriptLoaded]);

  // Initialize map when we have either script + location or script alone
  useEffect(() => {
    if (isScriptLoaded && (currentLocation || true)) {
      // call initMap with currentLocation if available
      if (currentLocation) initMap(currentLocation.lat, currentLocation.lng);
      else initMap();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScriptLoaded, currentLocation]);

  if (mapError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-red-500 text-center p-4">{mapError}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}

export default GoogleMap;
