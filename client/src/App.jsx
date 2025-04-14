import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css'
import { useEffect, useState } from 'react'
import { findAllPlaygroundEquipment } from './api'

function App() {
  const [equipment, setEquipment] = useState([])
  
  useEffect(() => {
    findAllPlaygroundEquipment().then(setEquipment)
  }, [])

  return (
    <MapContainer center={[51.045136986742186, -114.05474883215655]} zoom={18} className="map-container">
       <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      { equipment.map((piece) => (
        <Marker 
          key={piece._id}
          position={[piece.location.coordinates[1], piece.location.coordinates[0]]}>
            <Popup>
              {piece.description}
            </Popup>
        </Marker>
      ))}
   </MapContainer>
  )
}

export default App
