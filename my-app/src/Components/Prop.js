import * as React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  Map,
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
} from "react-leaflet";
import * as L from "leaflet";

export default function Prop(props) {
  const [checked, setChecked] = React.useState(false);
  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleTypeChange = (event) => {
    props.setPtype(event.target.value);
  };
  //var map = L.map("map").setView([51.505, -0.09], 13);
  // function handleChangeLocation(lat, lng) {
  //   setLocation({ lat: lat, lng: lng });
  // }
//   let mapOptions = {
//     center : [51.958, 9.14],
//     zoom:10
//   }
//   let map = new L.map('map', mapOptions);

//   let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// map.addLayer(layer);
//   let marker = null;
//   map.on('click', (event)=> {

//     if(marker !== null){
//         map.removeLayer(marker);
//     }

//     marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

//     lat = event.latlng.lat;
//     lng = event.latlng.lng;
    
// })
//   function handleChangeLat(lat) {
//     setLocation({ lat: lat });
//   }
//   function handleChangeLng(lng) {
//     setLocation({ lng: lng });
//   }
//   function handleChangeZoom(newZoom) {
//     setZoom(newZoom);
//   }

//   function handleResetLocation() {
//     setDefaultLocation({ ...DefaultLocation });
//     setZoom(DefaultZoom);
//   }
  return (
    <div className="row">
      <div>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleCheckChange} />}
          label="Properties"
        />
        <div className="row">
          <div className="col">
            {checked && (
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Select Key Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={props.Ptype}
                  onChange={handleTypeChange}
                  label="Select Key Type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"time"}>Time</MenuItem>
                  <MenuItem value={"location"}>Location</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
          <div className="col">
            {props.Ptype === "time" && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <div class="row">
                    <div class="col">
                      <TimePicker
                        ampm={false}
                        openTo="hours"
                        views={["hours", "minutes", "seconds"]}
                        inputFormat="HH:mm:ss"
                        mask="__:__:__"
                        label="Start Time"
                        value={props.startTime}
                        onChange={(newValue) => {
                          props.setStartTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </div>
                    <div className="col">
                      <TimePicker
                        ampm={false}
                        openTo="hours"
                        views={["hours", "minutes", "seconds"]}
                        inputFormat="HH:mm:ss"
                        mask="__:__:__"
                        label="End Time"
                        value={props.endTime}
                        onChange={(newValue) => {
                          props.setEndTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </div>
                  </div>
                </Stack>
              </LocalizationProvider>
            )}
          </div>
          <div className="col">
            {props.Ptype === "location" && (
              <div></div>
          //     <div>
          //       <TextField
          //   id="outlined-name"
          //   label=" Node Name"
          //   value={lat}
          //   onChange={handleChangeLat}
          // />
          // <TextField
          //   id="outlined-name"
          //   label=" Node Name"
          //   value={lng}
          //   onChange={handleChangeLng}
          // />
          // <div id="map"></div>
          //     </div>
              // <MapContainer
              //   center={[51.505, -0.09]}
              //   zoom={13}
              //   scrollWheelZoom={false}
              // >
              //   <TileLayer
              //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              //   />
              //   <Marker position={[51.505, -0.09]}>
              //     <Popup>
              //       A pretty CSS3 popup. <br /> Easily customizable.
              //     </Popup>
              //   </Marker>
              // </MapContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
