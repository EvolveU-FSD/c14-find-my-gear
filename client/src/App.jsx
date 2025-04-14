import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css'

function App() {

  return (
    <MapContainer center={[51.045136986742186, -114.05474883215655]} zoom={18} className="map-container">
       <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.045136986742186, -114.05474883215655]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
   </MapContainer>
  )
}

export default App
