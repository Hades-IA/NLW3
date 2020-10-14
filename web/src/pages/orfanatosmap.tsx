import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
function OrfMap() {
    return (
        <div>
            <h1>
                mapa
            </h1>

            <Map center={[-26.4145483, -50.1405573]} zoom={15}
                style={{ width: '100', height: '100' }}

            >
                <TileLayer url="htpps://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
        </div>
    )
}


export default OrfMap;