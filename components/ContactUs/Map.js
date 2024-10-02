import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.794764,
  lng: 90.414272,
};

function Map() {
  const officePosition = {
    lat: 23.794764,
    lng: 90.414272,
  };
  const [isHighlighted, setIsHighlighted] = useState(false);
  const toggleHighlight = () => setIsHighlighted(!isHighlighted);

  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerClassName="w-auto rounded-xl"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
            >
              <Marker
                position={officePosition}
                onClick={toggleHighlight}
                onMouseOver={toggleHighlight}
                onMouseOut={toggleHighlight}
              >
                {isHighlighted && (
                  <InfoWindow
                    options={{
                      pixelOffset: new window.google.maps.Size(0, -30),
                    }}
                  >
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl">
                      <h3>Office Name</h3>
                      <p>Office Address</p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
}

export default React.memo(Map);
