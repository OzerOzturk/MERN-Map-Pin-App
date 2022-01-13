import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import "./app.css";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      >
        <Marker
          latitude={52.516266}
          longitude={13.377775}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{ fontSize: viewport.zoom * 6, color: "stateblue" }} />
        </Marker>
        <Popup
          latitude={52.516266}
          longitude={13.377775}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom"
        >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Brandenburg Gate</h4>
            <label>Review</label>
            <p className="desc">What a historical place.</p>
            <label>Rating</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username">
              Created by <b>Özer</b>
            </span>
            <span className="date">1 hour ago </span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;
