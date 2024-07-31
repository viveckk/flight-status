import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function HomeMap() {
    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '16.625rem', borderTopLeftRadius: '0.375rem', borderTopRightRadius: '0.375rem' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    )
}
