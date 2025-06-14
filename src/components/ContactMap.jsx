import React, { useEffect, useState, useRef } from 'react'

const ContactMap = ({ center, address }) => {
  const [isClient, setIsClient] = useState(false)
  const [mapComponents, setMapComponents] = useState(null)
  const mapRef = useRef(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Import CSS first
      import('leaflet/dist/leaflet.css')

      // Then import React Leaflet and Leaflet
      Promise.all([import('react-leaflet'), import('leaflet')])
        .then(([reactLeaflet, leaflet]) => {
          const L = leaflet.default

          // Fix for default markers
          delete L.Icon.Default.prototype._getIconUrl
          L.Icon.Default.mergeOptions({
            iconRetinaUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          })

          // Create custom purple marker icon
          const customIcon = new L.Icon({
            iconUrl:
              'data:image/svg+xml;base64,' +
              btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="60">
              <path fill="#8b5cf6" stroke="white" stroke-width="1" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="3" fill="white"/>
            </svg>
          `),
            iconSize: [45, 60], // Increased from [30, 40] to [45, 60]
            iconAnchor: [22.5, 60], // Adjusted anchor point
            popupAnchor: [0, -60], // Adjusted popup anchor
            shadowUrl:
              'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [60, 60], // Increased shadow size
            shadowAnchor: [18, 60], // Adjusted shadow anchor
          })

          setMapComponents({
            MapContainer: reactLeaflet.MapContainer,
            TileLayer: reactLeaflet.TileLayer,
            Marker: reactLeaflet.Marker,
            Popup: reactLeaflet.Popup,
            customIcon: customIcon,
          })
          setIsClient(true)
        })
        .catch((error) => {
          console.error('Error loading map:', error)
        })
    }
  }, [])

  // Show loading state
  if (!isClient || !mapComponents) {
    return (
      <div
        style={{
          height: '500px', // Updated to 500px
          width: '100%',
          borderRadius: '12px',
          background: '#2a2a3e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize: '16px',
        }}
      >
        🗺️ Loading Map...
      </div>
    )
  }

  const { MapContainer, TileLayer, Marker, Popup, customIcon } = mapComponents

  // Exact coordinates for your location
  const mapCenter = center || [22.6708, 88.3639]

  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      style={{
        height: '500px', // Updated to 500px
        width: '100%',
        borderRadius: '12px',
        zIndex: 1,
      }}
      scrollWheelZoom={true}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapCenter} icon={customIcon}>
        <Popup>
          <div
            style={{
              padding: '15px',
              textAlign: 'center',
              fontFamily: 'Arial, sans-serif',
              minWidth: '200px',
            }}
          >
            <h3
              style={{
                margin: '0 0 12px 0',
                color: '#8b5cf6',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              Moon Shine Interiors
            </h3>
            <div
              style={{
                margin: '10px 0',
                padding: '8px',
                background: '#f8f9fa',
                borderRadius: '6px',
                borderLeft: '3px solid #8b5cf6',
              }}
            >
              <p
                style={{
                  margin: '0',
                  fontSize: '14px',
                  color: '#333',
                  lineHeight: '1.4',
                  fontWeight: '500',
                }}
              >
                📍 {address || '24/3, Dasu Babu Bagan, Kamarhati, Kolkata - 58'}
              </p>
            </div>
            <div
              style={{
                marginTop: '12px',
                fontSize: '13px',
                color: '#666',
                background: '#f0f9ff',
                padding: '8px',
                borderRadius: '6px',
              }}
            >
              <p style={{ margin: '3px 0', fontWeight: '500' }}>
                📞 +91 9038520720
              </p>
              <p style={{ margin: '3px 0', fontWeight: '500' }}>
                📞 +91 9163135727
              </p>
              <p style={{ margin: '3px 0', fontWeight: '500' }}>
                ✉️ mdazadansari2606@gmail.com
              </p>
            </div>
            <div
              style={{
                marginTop: '10px',
                fontSize: '12px',
                color: '#8b5cf6',
                fontWeight: '600',
              }}
            >
              🕒 Mon-Sat: 9AM-7PM | Sun: By Appointment
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default ContactMap
