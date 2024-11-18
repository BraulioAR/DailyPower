'use client';

import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

export default function LeafletMap() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = L.map('map').setView([18.468706110801868, -69.92460565018418], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([18.468706110801868, -69.92460565018418])
        .addTo(map)
        .bindPopup('Daily Power')
        .openPopup();

      return () => {
        if (map) {
          map.remove();
        }
      };
    }
  }, []);

  return <div id="map" className="h-96 w-full rounded-lg shadow-md"></div>;
}
