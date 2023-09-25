import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { results } from './data';
import './hi.css'
const Maps = () => {    const  {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyBR8PVIT2RKjzHqLLi6OIngrsPgCzbLHvo",})
    if(!isLoaded) return "Loading Maps";
  return (
    <div className="w-full max-w-[1500px] px-5 md:px-10 mx-auto p-10 relative">

      <div
        // style={{
        //   width: '500px',
        //   height: '700px',
        // }}
         className='w-full h-[70vh] bg-white rounded-xl shadow-xl'
      >
        <GoogleMap 
          zoom={19}
          center={{ lat: 17.6458865, lng: 83.0819736999 }}
          mapContainerClassName="map-container"
        >
          {results.map((result) => (
            <Marker
              key={result.place_id}
              position={{
                lat: result.geometry.location.lat,
                lng: result.geometry.location.lng,
              }}
            ></Marker>
          ))}
          <Marker position={{ lat: 17.6458865, lng: 83.0819736999 }}></Marker>
        </GoogleMap>
        </div>
    </div>
  )
}

export default Maps;
