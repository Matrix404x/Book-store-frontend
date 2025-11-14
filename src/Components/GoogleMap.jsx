import React, { useEffect, useRef } from 'react';

function GoogleMap() {
  const mapRef = useRef(null);
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API key missing.');
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div style="color: red; text-align: center; padding: 2rem;">
            Please add your Google Maps API key to an .env file as <b>VITE_GOOGLE_MAPS_API_KEY</b>.
          </div>`;
      }
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const map = new window.google.maps.Map(mapRef.current, {
          center: userLocation,
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: userLocation,
          map,
          title: 'You are here',
        });

        new window.google.maps.Circle({
          strokeColor: '#4285F4',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#4285F4',
          fillOpacity: 0.2,
          map,
          center: userLocation,
          radius: position.coords.accuracy,
        });
      },
      (error) => {
        console.error('Error fetching location:', error);
        alert('Unable to retrieve your location. Please enable GPS and try again.');
      }
    );
  };

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}

export default GoogleMap;
