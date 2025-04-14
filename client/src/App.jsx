import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { findAllPlaygroundEquipment } from './api'

import './App.css'

function UserLocation() {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  useEffect(() => {
    map.locate()
  }, [])

  return position && (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function EquipmentMarkers() {
  const map = useMap()

  const [mapBounds, setMapBounds] = useState(map.getBounds())
  const [equipment, setEquipment] = useState([])
  
  useMapEvent('moveend', (e) => {
    setMapBounds(map.getBounds())
  })

  useEffect(() => {
    console.log('Quering for playground equiment')
    findAllPlaygroundEquipment(
      mapBounds._northEast.lat, 
      mapBounds._northEast.lng,
      mapBounds._southWest.lat,
      mapBounds._southWest.lng,
    ).then((e) => {
      setEquipment(e)
      console.log('Found', e.length, 'pieces of equipment')
    })
  }, [mapBounds])

  return equipment.map((piece) => (
    <Marker 
      key={piece._id}
      position={[piece.location.coordinates[1], piece.location.coordinates[0]]}>
        <Popup>
          {piece.description}
        </Popup>
    </Marker>
  ))
}

function App() {

  return (
    <MapContainer center={[51.045136986742186, -114.05474883215655]} zoom={18} className="map-container">
       <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <EquipmentMarkers />
      <UserLocation />
   </MapContainer>
  )
}

export default App
