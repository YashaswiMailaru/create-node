import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Prop from "./Prop.js";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

export default function Form1() {
  const [node_name, setNodeName] = React.useState("Create Nodes");
  const handleNameChange = (event) => {
    setNodeName(event.target.value);
  };
  const [Ptype, setPtype] = React.useState("");
  const [startTime, setStartTime] = React.useState(dayjs("2022-04-07"));
  const [endTime, setEndTime] = React.useState(dayjs("2022-04-07"));
  const [node_type, setNodeType] = React.useState("");
  const handleNodeTypeChange = (event) => {
    setNodeType(event.target.value);
  };
  const [btnClicked, setbtnvalue] = React.useState(false);
  const nodes = [];
  const handleButtonClicked = (event) => {
    const node = {};
    node["node_name"] = node_name;
    node["node_type"] = node_type;
    node["properties"] = {};
    node["properties"]["time"] = { starttime: startTime, endtime: endTime };
    node["properties"]["location"] = "";
    nodes.push(node);
    console.log(node);
  };
  return (
    <div>
      <div className="row">
        <div className="col">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Select Node Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={node_type}
              onChange={handleNodeTypeChange}
              label="Select Node Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Policy Class Node"}>Policy Class Node</MenuItem>
              <MenuItem value={"User Node"}>User Node</MenuItem>
              <MenuItem value={"User Attribute Node"}>
                User Attribute Node
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col">
          <br />
          <TextField
            id="outlined-name"
            label=" Node Name"
            value={node_name}
            onChange={handleNameChange}
          />
        </div>
        <div className="col">
          <br />
          <Fab color="primary" size="small" onClick={handleButtonClicked}>
            <AddIcon />
          </Fab>
        </div>
      </div>
      <Prop
        setPtype={setPtype}
        Ptype={Ptype}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      ></Prop>
    </div>
  );
}
